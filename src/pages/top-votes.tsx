import type { NextPage } from "next"

import { Container } from "@/components/Container"
import Navbar from "@/components/Navbar"

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-col items-center justify-between text-6xl font-black text-white pt-[80px]"></div>
      </div>
    </Container>
  )
}

export default Home
