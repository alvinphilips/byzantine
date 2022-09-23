import Image from "next/image"
import NextLink from "next/link"
import { useRouter } from "next/router"

import phantomLogo from "/assets/phantom-logo.svg"
import arrowIcon from "/assets/arrow.svg"
import { SquigglyIcon } from "@/images"

export default function Navbar() {
  const router = useRouter()
  const isActive = router.asPath === "/"
  return (
    <div className="flex items-center justify-between mx-auto w-2/3 mt-[100px]">
      <NextLink href="/">
        <h1 className="text-3xl w-[140px] text-[#d9d9d9] font-black h-8 cursor-pointer">
          Byzantine
          {isActive && (
            <SquigglyIcon className="h-8 max-w-full scale-y-[0.8]" />
          )}
        </h1>
      </NextLink>
      <div className="flex items-center justify-between w-1/2">
        <NavItem href="/voting" text="Voting" />
        <NavItem href="/rewards" text="Rewards" />
        <NavItem href="/top-votes" text="Top Votes" />
        <NavItem href="/about-us" text="About Us" />
      </div>
      <button className="px-[30px] py-3 gap-[16px] flex items-center text-[20px] font-black rounded-full bg-neo-pink">
        <Image
          src={phantomLogo}
          alt="Phantom Logo"
          layout="fixed"
          width={20}
          height={20}
        />
        SignUp
        <Image
          src={arrowIcon}
          alt="Phantom Logo"
          layout="fixed"
          width={20}
          height={20}
        />
      </button>
    </div>
  )
}

function NavItem({ href, text }: any) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={
          "hidden md:inline-block p-1 sm:px-3 h-[41px] sm:py-2 rounded-lg hover:bg-gray-900 text-[20px] font-black transition-all"
        }
      >
        <span className="capsize">{text}</span>
        <SquigglyIcon className={`${!isActive && "invisible"} max-w-fit`} />
      </a>
    </NextLink>
  )
}
