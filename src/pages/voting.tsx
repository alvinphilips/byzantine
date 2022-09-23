import type { NextPage } from "next"
import Image from "next/image"

import { Container } from "@/components/Container"
import Navbar from "@/components/Navbar"

const Home: NextPage = () => {
  return (
    <Container title="voting">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex gap-44 justify-center text-6xl font-black text-white pt-[80px]">
          <span className="rounded-full text-xl h-[350px] w-[350px] bg-[#121212] flex items-center justify-center">
            Some vote thing
          </span>
          <span className="rounded-full text-xl h-[350px] w-[350px] bg-[#121212] flex items-center justify-center">
            Some vote thing
          </span>
          <span className="absolute bottom-0 z-0 mx-auto">
            <Image
              src={"/morpheus.webp"}
              layout="fixed"
              width={398}
              height={344}
              alt="Morpherus Logo"
            />
          </span>
        </div>
      </div>
    </Container>
  )
}

export default Home
