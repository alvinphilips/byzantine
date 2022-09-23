import type { NextPage } from "next"
import Image from "next/image"

import { Container } from "@/components/Container"
import Navbar from "@/components/Navbar"

import solanaLogo from "/assets/solana-logo.svg"
import { CapSVG, GuySVG, ManSVG, SquigglyIcon } from "@/images"

const Home: NextPage = () => {
  return (
    <Container>
      <div className="relative flex flex-col h-screen">
        <ManSVG className="absolute z-10 scale-75 top-40 right-20" />
        <GuySVG className="absolute bottom-0 z-10 left-32" />
        <CapSVG className="absolute z-20 scale-75 top-48 left-48" />
        <Navbar />
        <div className="flex flex-col items-center justify-between text-6xl font-black text-white pt-[100px]">
          <Image
            src={solanaLogo}
            alt="Solana Logo"
            layout="fixed"
            height={300}
            width={300}
          />
          <div className="flex flex-col items-center">
            <div className="leading-[90px] flex gap-4 font-bold">
              A <p className="font-black text-neo-yellow">voting</p> app that
            </div>
            <div className="flex gap-4 font-bold ">
              <span className="flex flex-col">
                doesn’t
                <SquigglyIcon className="h-10 max-w-full" />
              </span>{" "}
              make sense
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
