import type { NextPage } from "next"

import { Container } from "@/components/Container"
import Navbar from "@/components/Navbar"
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex mx-auto w-1/2 items-center justify-between text-6xl font-black text-white py-[80px]">
          <Image
            src="/meme1.png"
            layout="fixed"
            alt="Meme 1"
            width={407}
            height={540}
          />
          <Image
            src="/meme2.png"
            layout="fixed"
            alt="Meme 1"
            width={407}
            height={540}
          />
        </div>
      </div>
    </Container>
  )
}

export default Home
