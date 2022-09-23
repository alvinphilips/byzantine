#![warn(missing_docs)]
#![warn(rustdoc::missing_doc_code_examples)]

//! Byzantine

use anchor_lang::prelude::*;
use std::iter;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

/// How long a [`Round`] lasts, defined in slots.
/// 
/// Used with the [`Clock`] sysvar's slot field.
const _ROUND_DURATION_SLOTS: u64 = 100;

#[program]
pub mod byzantine {
    //! The `byzantine` module
    use anchor_lang::solana_program::{entrypoint::ProgramResult, self};

    use super::*;

    /// Initialize the game, allowing us to create a new `Round` if none exists/has expired.
    pub fn initialize(ctx: Context<Initialize>, start_time: u64) -> ProgramResult {
        if ctx.accounts.round.end_time >= start_time {
            return Err(ProgramError::InvalidArgument)
        }

        let primary_votes: u64 = ctx.accounts.round.primary_votes.len() as u64;
        let secondary_votes: u64 = ctx.accounts.round.secondary_votes.len() as u64;
        let total_votes: u64 = primary_votes + secondary_votes;

        let total_lamports: u64 = ctx.accounts.round.to_account_info().lamports.borrow().to_owned();

        // Get a list of winners based on the final state of the [`Round`]
        let winners: Vec<(Pubkey, u64)> = if primary_votes == secondary_votes {
            ctx.accounts.round.primary_votes.iter().chain(ctx.accounts.round.secondary_votes.iter()).map(|key| *key).zip(iter::once(total_lamports / total_votes)).collect()
        } else if primary_votes > secondary_votes {
            ctx.accounts.round.primary_votes.iter().map(|key| *key).zip(iter::once(total_lamports / total_votes)).collect()
        } else {
            ctx.accounts.round.secondary_votes.iter().map(|key| *key).zip(iter::once(total_lamports / total_votes)).collect()
        };

        // Instructions to transfer solana to the winners
        // TODO: We aren't currently able to pay users back because we do not have a list of all users while calling our program
        let transfer_ixs= solana_program::system_instruction::transfer_many(
            ctx.accounts.round.to_account_info().key,
            &winners,
        );

        for (_id, transfer_ix) in transfer_ixs.iter().enumerate() {
            // TODO: Allow paying a user back
            solana_program::program::invoke(
                &transfer_ix, 
                &[
                    ctx.accounts.round.to_account_info(),
                ]
            )?;
        }

        Ok(())
    }

    /// Make a single vote
    pub fn vote(ctx: Context<Vote>, vote_time: u64, selection: bool) -> ProgramResult {
        // TODO: Prevent multiple voting
        // TODO: Take currency from voter
        if selection {
            ctx.accounts.round.primary_votes.insert(0, *ctx.accounts.voter.key);
        } else {
            ctx.accounts.round.secondary_votes.insert(0, *ctx.accounts.voter.key);
        }
        Ok(())
    }
}

/// We [`Initialize`] a [`Round`], and return an Error if the game is in progress
#[derive(Accounts)]
#[instruction(start_time: u64)]
pub struct Initialize<'info> {
    #[account(signer)]
    initializer: AccountInfo<'info>,
    round: Box<Account<'info, Round>>,
}

/// The [`Vote`] defines how we manage a single vote
#[derive(Accounts)]
#[instruction(vote_time: u64, selection: bool)]
pub struct Vote<'info> {
    #[account(mut, signer)]
    voter: AccountInfo<'info>,
    #[account(mut, seeds = [b"round_data".as_ref()], bump = round.bump)]
    round: Account<'info, Round>,
}

/// The [`Round`] struct defines
#[account]
#[derive(Default)]
pub struct Round {
    /// Time at which the current [`Round`] will end
    pub end_time: u64,
    /// Votes for the first choice out of the two
    pub primary_votes: Vec<Pubkey>,
    /// Votes for the second choice out of the two
    pub secondary_votes: Vec<Pubkey>,
    /// A bump is used to derive the PDA with our seed
    pub bump: u8,
}