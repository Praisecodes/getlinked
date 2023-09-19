import Image from "next/image";
import Link from "next/link";
import NavOptions from '@/json/navOptions.json';

const Header = (): React.ReactNode => {
  return (
    <header className={`border-b text-white border-b-[#FFFFFF2E] bg-transparent flex items-center justify-between py-7 px-16`}>
      <Link href={`/`}>
        <Image
          src={`/images/getlinked.svg`}
          width={100}
          height={100}
          className={`w-[8rem]`}
          alt="Get Linked Image"
        />
      </Link>

      <section className={`space-x-16`}>
        <ul className={`space-x-12 text-base`}>
          {NavOptions.map((option)=>(
            <li className={`float-left`}>
              <Link href={option.route}>
                <p>
                  {option.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

      </section>
    </header>
  )
}

export default Header;
