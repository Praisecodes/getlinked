"use client";

import { Button } from "@/components/atoms";
import Image from "next/image";
import KeyAttributes from '@/json/keyAttributes.json';
import Faqs from '@/json/faq.json';

const Page = (): React.ReactNode => {
  return (
    <>
      <h1 className={`lg:text-xl text-base italic font-bold w-full text-right relative lg:px-14 px-4 py-5`}>
        Igniting a Revolution in HR Innovation
        <Image
          src={`/images/curve.svg`}
          alt="Curve"
          width={253}
          height={253}
          className={`absolute w-[135px] top-[70%] lg:right-14 right-4`}
        />
      </h1><br />

      {/**Hero Section */}
      <section className={`lg:px-14 px-4 border-b border-b-[#FFFFFF2E] flex lg:flex-row flex-col items-center`}>
        <div className={`font-montserrat lg:w-[50%] w-full`}>
          <h1 className={`lg:text-7xl text-5xl font-extrabold lg:text-left text-center font-clash-display`}>
            getlinked Tech Hackathon<span className={`text-[#D434FE]`}>1.0</span>
          </h1>
          <p className={`text-sm py-2 w-[23rem] lg:text-left text-center max-w-full`}>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
          </p> <br />

          <div className={`w-[8rem] mt-3 lg:mx-0 mx-auto`}>
            <Button onClick={() => { }}>
              Register
            </Button>
          </div> <br /> <br />

          <section className={`font-unica-one mx-auto lg:mx-0 w-fit flex space-x-3`}>
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

        <div className={`flex-1 lg:mt-0 mt-8`}>
          <Image
            src={`/images/hero_image.svg`}
            alt="Hero Image"
            height={200}
            width={200}
            className={`w-full object-cover rounded-md object-center`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
          />
        </div>
      </section>

      {/**Introduction Section */}
      <section className={`py-16 border-b border-b-[#FFFFFF2E] lg:px-28 px-4 flex lg:flex-row flex-col items-center`}>
        <div className={`flex-1`}>
          <Image
            src={`/images/idea.svg`}
            width={200}
            height={200}
            alt="The Big Idea"
            className={`w-[90%] object-contain object-center`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
          />
        </div>

        <div className={`lg:w-[45%] lg:px-5 md:w-[60%] w-full lg:mt-0 mt-9`}>
          <h2 className={`lg:text-3xl text-center lg:text-left text-2xl lg:w-[80%] font-bold font-clash-display`}>
            Introduction to getlinked <span className={`text-[#D434FE]`}>tech Hackathon 1.0</span>
          </h2>

          <p className={`text-[13px] lg:text-left text-center pt-3`}>
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
      <section className={`py-8 border-b border-b-[#FFFFFF2E] lg:px-28 px-4 flex lg:flex-row flex-col-reverse items-center`}>
        <div className={`lg:w-[50%] w-full relative lg:px-7`}>
          <Image
            src={`/icons/star.svg`}
            alt="Star Icon"
            width={26}
            height={32}
            className={`w-[26px] h-[32px] absolute -top-10 right-[47%]`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
          />
          <h2 className={`lg:text-3xl text-2xl lg:w-[50%] py-3 lg:text-left text-center font-bold font-clash-display`}>
            Rules and <span className={`text-[#D434FE]`}>Guidelines</span>
          </h2>

          <p className={`text-sm text-center lg:text-left`}>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you&apos;re a coding genius, a
            design maverick, or a concept wizard, you&apos;ll have the chance to transform
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that&apos;s what we&apos;re all about!
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
      <section className={`lg:py-24 py-14 border-b border-b-[#FFFFFF2E] lg:px-28 px-4 flex lg:flex-row flex-col items-center`}>
        <div className={`flex-1`}>
          <Image
            src={`/images/judging_image.svg`}
            alt="Rules Image"
            width={200}
            height={200}
            className={`w-full object-contain object-center`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
          />
        </div>

        <div className={`lg:w-[50%] lg:ml-5 w-full relative lg:px-7`}>
          <Image
            src={`/icons/star.svg`}
            alt="Star Icon"
            width={26}
            height={32}
            className={`w-[26px] h-[32px] block lg:hidden absolute -top-10 right-[47%]`}
          />
          <h2 className={`lg:text-3xl text-2xl lg:text-left text-center lg:w-[50%] py-3 font-bold font-clash-display`}>
            Judging Criteria <span className={`text-[#D434FE]`}>Key attributes</span>
          </h2>

          {
            KeyAttributes.map((attribute, index) => (
              <p key={index} className={`text-[13px] my-3 lg:text-left text-center`}>
                <span className={`text-[#D434FE] font-bold`}>{attribute.title}:</span> {attribute.description}
              </p>
            ))
          } <br />

          <div className={`w-[8rem] lg:mx-0 mx-auto`}>
            <Button onClick={() => { }}>
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/**Faqs Section */}
      <section className={`py-8 border-b border-b-[#FFFFFF2E] lg:px-28 px-4 flex lg:flex-row flex-col-reverse items-center`}>
        <div className={`lg:w-[50%] w-full relative lg:px-7`}>
          <h2 className={`lg:text-3xl lg:text-left text-center text-2xl lg:w-[50%] lg:mt-0 mt-9 py-3 font-bold font-clash-display`}>
            Frequently Asked <span className={`text-[#D434FE]`}>Questions</span>
          </h2>

          <p className={`text-[13px] text-center lg:text-left lg:w-[70%]`}>
            We got answers to the questions that you might
            want to ask about <span className={`font-bold`}>getlinked Hackathon 1.0</span>
          </p> <br />

          <section>
            {Faqs.map((faq, index) => (
              <div key={index} className={`flex w-[28rem] max-w-full py-2 border-b my-2 cursor-pointer border-[#D434FE] items-center justify-between`}>
                <p className={`text-sm`}>
                  {faq.question}
                </p>

                <p className={`text-[#D434FE] text-2xl ml-3 font-bold`}>
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
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
          />
        </div>
      </section>

      {/**Timeline Section */}
      {/* <section className={`py-14 border-b border-b-[#FFFFFF2E] lg:px-28 px-4 flex flex-col items-center justify-center`}>
        <h1 className={`font-clash-display text-3xl font-extrabold`}>
          Timeline
        </h1>
        <p className={`text-white text-sm w-[33%] mt-2 text-center`}>
          Here is the breakdown of the time we anticipate
          using for the upcoming event.
        </p> <br /> <br />

        <section className={` px-4 flex justify-center items-center flex-col`}>
          <div className={`flex items-end justify-between`}>
            <section className={`w-[25rem]`}>
              <h2 className={`text-[#D434FE] text-right font-bold text-xl`}>
                Hackathon Announcement
              </h2>
              <p className={`text-sm text-right`}>
                The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
              </p>
            </section>

            <p className={`bg-text-grad px-5 py-3 mx-20 rounded-full`}>
              1
            </p>

            <p className={`text-[#D434FE] text-xl font-bold`}>
              November 18, 2023
            </p>
          </div>
        </section>
      </section> */}
    </>
  )
}

export default Page;
