import type { NextPage } from "next"
import Image from "next/image"

import { Container } from "@/components/Container"
import Navbar from "@/components/Navbar"

import solanaLogo from "/assets/solana-logo.svg"

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col">
        <Navbar />
      </div>
    </Container>
  )
}

export default Home
