import Image from "next/image";
import Link from "next/link";
import FooterLinks from '@/json/footerLinks.json';

const Footer = (): React.ReactNode => {
  return (
    <footer className={`py-10 bg-[#100B20] font-montserrat text-white px-24`}>
      <section className={`flex items-start`}>
        <section className={`w-[40%]`}>
          <Image
            src={`/images/getlinked.svg`}
            width={100}
            height={100}
            alt="Get Linked Logo"
            className={`w-[8rem]`}
          />

          <p className={`text-sm mt-2`}>
            Getlinked Tech Hackathon is technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technolo
          </p> <br /> <br /> <br />

          <div className={`flex items-center text-sm`}>
            <Link href={`/`}>
              <p>
                Terms of Use
              </p>
            </Link>

            <div className={`h-4 bg-[#D434FE] mx-4 w-[2px]`}></div>

            <Link href={`/`}>
              <p>
                Terms of Use
              </p>
            </Link>
          </div>
        </section>

        <section className={`flex-1 px-16`}>
          <div className={`w-full flex justify-between items-start`}>
            <section>
              <h3 className={`text-[#D434FE] mb-2 text-base`}>Useful Links</h3>
              <ul>
                {FooterLinks.map((links, index) => (
                  <li key={index}>
                    <Link href={links.route}>
                      <p className={`font-montserrat hover:bg-clip-text hover:bg-text-grad hover:text-transparent text-sm my-3 duration-150`}>
                        {links.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className={`text-[#D434FE] mb-2 text-base`}>Contact Us</h3>
              <div className={`flex items-center font-montserrat`}>
                <Image
                  src={`/icons/phone.svg`}
                  alt="Phone Icon"
                  width={12}
                  height={12}
                  className={`w-[14px] mr-4`}
                />

                <p className={`text-sm`}>
                  +234 6707653444
                </p>
              </div>

              <div className={`flex items-center my-3 font-montserrat`}>
                <Image
                  src={`/icons/location.svg`}
                  alt="Phone Icon"
                  width={12}
                  height={12}
                  className={`w-[14px] mr-4`}
                />

                <p className={`text-sm`}>
                  27,Alara Street
                  Yaba 100012
                  Lagos State
                </p>
              </div>
            </section>
          </div>

          <div className={`flex space-x-5  my-2`}>
            <p className={`text-[#D434FE] text-sm`}>
              Follow Us
            </p>

            <section className={`flex space-x-4 items-center`}>
              <Link href={`/`}>
                <Image
                  src={`/icons/instagram.svg`}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className={`w-[20px]`}
                />
              </Link>

              <Link href={`/`}>
                <Image
                  src={`/icons/twitter.svg`}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className={`w-[18px]`}
                />
              </Link>

              <Link href={`/`}>
                <Image
                  src={`/icons/facebook.svg`}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className={`w-[10px]`}
                />
              </Link>

              <Link href={`/`}>
                <Image
                  src={`/icons/linkedin.svg`}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className={`w-[20px]`}
                />
              </Link>
            </section>
          </div>
        </section>
      </section> <br />

      <p className={`w-full text-center text-white font-montserrat text-xs`}>
        All rights reserved. &copy; getlinked Ltd.
      </p>
    </footer>
  )
}

export default Footer;
