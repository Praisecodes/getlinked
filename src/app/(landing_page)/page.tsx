"use client";

import { Button } from "@/components/atoms";
import Image from "next/image";

const Page = (): React.ReactNode => {
  return (
    <>
      <h1 className={`text-xl italic font-bold w-full text-right relative px-14 py-5`}>
        Igniting a Revolution in HR Innovation
        <Image 
          src={`/images/curve.svg`}
          alt="Curve"
          width={253}
          height={253}
          className={`absolute w-[135px] top-[70%] right-14`}
        />
      </h1><br />

      {/**Hero Section */}
      <section className={`px-14 border-b border-b-[#FFFFFF2E] flex items-start`}>
        <div className={`font-montserrat pt-28 w-[50%]`}>
          <h1 className={`text-7xl font-extrabold font-clash-display`}>
            getlinked Tech Hackathon<span className={`text-[#D434FE]`}>1.0</span>
          </h1>
          <p className={`text-sm py-2 w-[23rem]`}>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
          </p> <br />

          <div className={`w-[8rem] mt-3`}>
            <Button onClick={() => { }}>
              Register
            </Button>
          </div> <br /> <br />

          <section className={`font-unica-one flex space-x-3`}>
            <div className={`flex items-baseline`}>
              <h2 className={`text-5xl`}>
                00
              </h2>
              <p className={`text-base`}>H</p>
            </div>

            <div className={`flex items-baseline`}>
              <h2 className={`text-5xl`}>
                00
              </h2>
              <p className={`text-base`}>M</p>
            </div>

            <div className={`flex items-baseline`}>
              <h2 className={`text-5xl`}>
                00
              </h2>
              <p className={`text-base`}>S</p>
            </div>
          </section>
        </div>

        <div className={`flex-1`}>
          <Image
            src={`/images/hero_image.svg`}
            alt="Hero Image"
            height={200}
            width={200}
            className={`w-full object-cover object-center`}
          />
        </div>
      </section>

      {/**Introduction Section */}
      <section className={`py-16 border-b border-b-[#FFFFFF2E] px-28 flex items-center`}>
        <div className={`flex-1`}>
          <Image 
            src={`/images/idea.svg`}
            width={200}
            height={200}
            alt="The Big Idea"
            className={`w-[90%] object-contain object-center`}
          />
        </div>

        <div className={`lg:w-[45%] px-5 md:w-[60%] w-full`}>
          <h2 className={`text-3xl w-[80%] font-bold font-clash-display`}>
            Introduction to getlinked <span className={`text-[#D434FE]`}>tech Hackathon 1.0</span>
          </h2>

          <p className={`text-[13px] pt-3`}>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you&apos;re a coding genius, a
            design maverick, or a concept wizard, you&apos;ll have the chance to transform
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that&apos;s what we&apos;re all about!
          </p>
        </div>
      </section>
    </>
  )
}

export default Page;
