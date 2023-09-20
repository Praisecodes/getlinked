"use client";

import { Button } from "@/components/atoms";
import Image from "next/image";
import KeyAttributes from '@/json/keyAttributes.json';
import Faqs from '@/json/faq.json';

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

      {/**Rules and Guidelines Section */}
      <section className={`py-8 border-b border-b-[#FFFFFF2E] px-28 flex items-center`}>
        <div className={`lg:w-[50%] w-full relative px-7`}>
          <Image
            src={`/icons/star.svg`}
            alt="Star Icon"
            width={26}
            height={32}
            className={`w-[26px] h-[32px] absolute -top-10 right-[47%]`}
          />
          <h2 className={`text-3xl w-[50%] py-3 font-bold font-clash-display`}>
            Rules and <span className={`text-[#D434FE]`}>Guidelines</span>
          </h2>

          <p className={`text-sm`}>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a
            design maverick, or a concept wizard, you'll have the chance to transform
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!
          </p>
        </div>

        <div className={`flex-1`}>
          <Image
            src={`/images/rules_image.svg`}
            alt="Rules Image"
            width={200}
            height={200}
            className={`w-[35rem] object-contain object-center`}
          />
        </div>
      </section>

      {/**Judging Criteria section */}
      <section className={`py-24 border-b border-b-[#FFFFFF2E] px-28 flex items-center`}>
        <div className={`flex-1`}>
          <Image
            src={`/images/judging_image.svg`}
            alt="Rules Image"
            width={200}
            height={200}
            className={`w-full object-contain object-center`}
          />
        </div>

        <div className={`lg:w-[50%] ml-5 w-full relative px-7`}>
          <Image
            src={`/icons/star.svg`}
            alt="Star Icon"
            width={26}
            height={32}
            className={`w-[26px] h-[32px] block lg:hidden absolute -top-10 right-[47%]`}
          />
          <h2 className={`text-3xl w-[50%] py-3 font-bold font-clash-display`}>
            Judging Criteria <span className={`text-[#D434FE]`}>Key attributes</span>
          </h2>

          {
            KeyAttributes.map((attribute, index) => (
              <p key={index} className={`text-[13px] my-3`}>
                <span className={`text-[#D434FE] font-bold`}>{attribute.title}:</span> {attribute.description}
              </p>
            ))
          } <br />

          <div className={`w-[8rem]`}>
            <Button onClick={() => { }}>
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/**Faqs Section */}
      <section className={`py-8 border-b border-b-[#FFFFFF2E] px-28 flex items-center`}>
        <div className={`lg:w-[50%] w-full relative px-7`}>
          <h2 className={`text-3xl w-[50%] py-3 font-bold font-clash-display`}>
            Frequently Asked <span className={`text-[#D434FE]`}>Questions</span>
          </h2>

          <p className={`text-[13px] w-[70%]`}>
            We got answers to the questions that you might
            want to ask about getlinked Hackathon 1.0
          </p> <br />

          <section>
            {Faqs.map((faq, index) => (
              <div key={index} className={`flex w-[28rem] py-2 border-b my-2 cursor-pointer border-[#D434FE] items-center justify-between`}>
                <p className={`text-sm`}>
                  {faq.question}
                </p>

                <p className={`text-[#D434FE] text-2xl font-bold`}>
                  +
                </p>
              </div>
            ))}
          </section>
        </div>

        <div className={`flex-1`}>
          <Image
            src={`/images/faq_images.svg`}
            alt="Rules Image"
            width={200}
            height={200}
            className={`w-full object-contain object-center`}
          />
        </div>
      </section>

      {/**Timeline Section */}
      <section className={`py-14 border-b border-b-[#FFFFFF2E] px-28 flex flex-col items-center justify-center`}>
        <h1 className={`font-clash-display text-3xl font-extrabold`}>
          Timeline
        </h1>
        <p className={`text-white text-sm w-[33%] mt-2 text-center`}>
          Here is the breakdown of the time we anticipate
          using for the upcoming event.
        </p>
      </section>
    </>
  )
}

export default Page;
