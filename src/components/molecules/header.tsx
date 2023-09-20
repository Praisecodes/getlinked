"use client";

import Image from "next/image";
import Link from "next/link";
import NavOptions from '@/json/navOptions.json';
import { Button } from "../atoms";

const Header = (): React.ReactNode => {
  return (
    <header className={`border-b font-montserrat text-white border-b-[#FFFFFF2E] bg-transparent flex items-center justify-between py-7 lg:px-16 px-4`}>
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
          {NavOptions.map((option, index)=>(
            <li key={index} className={`float-left`}>
              <Link href={option.route}>
                <p>
                  {option.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className={`w-[9rem] lg:block hidden duration-150`}>
          <Button onClick={()=>{}}>
            Register
          </Button>
        </div>
      </section>

      {/**Mobile Nav */}
      <div className={`lg:hidden block`}>
          <button className={`p-2`}>
            <Image 
              src={`/icons/hamburger.svg`}
              alt="Hamburger Icon"
              width={19}
              height={19}
              className={`w-[19px]`}
            />
          </button>
        </div>
    </header>
  )
}

export default Header;
