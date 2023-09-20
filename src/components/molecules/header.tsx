"use client";

import Image from "next/image";
import Link from "next/link";
import NavOptions from '@/json/navOptions.json';
import { Button } from "../atoms";

const Header = (): React.ReactNode => {
  return (
    <header className={`border-b font-montserrat text-white border-b-[#FFFFFF2E] bg-transparent flex items-center justify-between py-7 px-16`}>
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
    </header>
  )
}

export default Header;
