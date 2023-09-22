"use client";

import Image from "next/image";
import Link from "next/link";
import NavOptions from '@/json/navOptions.json';
import { Button } from "../atoms";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const Header = (): React.ReactNode => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className={`border-b relative font-montserrat text-white border-b-[#FFFFFF2E] bg-transparent flex items-center justify-between py-7 lg:px-16 px-4`}>
      <Link href={`/`}>
        <Image
          src={`/images/getlinked.svg`}
          width={100}
          height={100}
          className={`w-[8rem]`}
          alt="Get Linked Image"
        />
      </Link>

      <section className={`space-x-24 lg:flex hidden items-center`}>
        <ul className={`space-x-12 text-sm`}>
          {NavOptions.map((option, index) => (
            <li key={index} className={`float-left`}>
              <Link href={option.route}>
                <p className={`hover:bg-clip-text hover:bg-text-grad hover:text-transparent duration-150 ${pathname.startsWith(option.route) && "bg-clip-text bg-text-grad text-transparent"}`}>
                  {option.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className={`w-[9rem] lg:block hidden duration-150`}>
          <Button onClick={() => { }}>
            Register
          </Button>
        </div>
      </section>

      <button onClick={() => { setMobileNavOpen(true) }} className={`p-2 lg:hidden block`}>
        <Image
          src={`/icons/hamburger.svg`}
          alt="Hamburger Icon"
          width={19}
          height={19}
          className={`w-[19px]`}
        />
      </button>

      {/**Mobile Nav */}
      <div className={`${mobileNavOpen ? "translate-y-0" : "-translate-y-[100%]"} z-50 duration-300 w-full absolute top-0 left-0 py-4 px-14 rounded-md bg-[#150E28]`}>
        <div className={`flex items-center justify-end`}>
          <button onClick={() => { setMobileNavOpen(false) }}>
            <Image
              src={`/icons/close_nav.svg`}
              alt="Close Nav"
              width={23}
              height={23}
              className={`w-[30px] object-center`}
            />
          </button>
        </div> <br />

        <ul className={``}>
          {NavOptions.map((option, index) => (
            <li key={index} className={`my-5`}>
              <Link href={option.route}>
                <p>
                  {option.name}
                </p>
              </Link>
            </li>
          ))}
        </ul> <br />

        <div className={`w-[10rem]`}>
          <Button onClick={() => { }}>
            Register
          </Button>
        </div> <br /><br />
      </div>
    </header>
  )
}

export default Header;
