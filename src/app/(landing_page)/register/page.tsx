"use client";

import { Button } from "@/components/atoms";
import Image from "next/image";

const Page = (): React.ReactNode => {
  return (
    <section className={`flex lg:flex-row flex-col py-14 items-center justify-between`}>
      <div className={`flex-1`}>
        <Image
          src={`/images/register_image.svg`}
          alt="Register Image"
          width={300}
          height={300}
          className={`w-full`}
        />
      </div>

      <div className={`lg:w-[60vw] px-4`}>
        <section className={`bg-[#FFFFFF08] py-14 px-4 lg:px-12 w-full lg:w-[80%] mx-auto rounded-md`}>
          <h2 className={`text-[#D434FE] text-2xl font-bold font-clash-display`}>
            Register
          </h2> <br />

          <p className={`flex items-end text-sm`}>
            Be part of this movement! <Image src={`/icons/people.svg`} alt="People" width={100} height={100} className={`w-[5rem] ml-1`} />
          </p>

          <p className={`text-xl font-bold mt-4`}>
            CREATE YOUR ACCOUNT
          </p> <br />

          <div className={`flex flex-wrap w-full lg:space-y-0 space-y-4 justify-between items-center`}>
            <section className={`w-full lg:w-[14rem]`}>
              <p className={`text-xs font-bold mb-2`}>
                Team&apos;s Name
              </p>
              <input
                type="text"
                placeholder="Enter the name of your group"
                className={`w-full border border-white placeholder:text-[#FFFFFF40] outline-none rounded-sm py-2 text-sm px-4 bg-[#ffffff11]`}
              />
            </section>

            <section className={`w-full lg:w-[14rem]`}>
              <p className={`text-xs font-bold mb-2`}>
                Phone
              </p>
              <input
                type="text"
                placeholder="Enter your phone number"
                className={`w-full border border-white placeholder:text-[#FFFFFF40] outline-none rounded-sm py-2 text-sm px-4 bg-[#ffffff11]`}
              />
            </section>
          </div> <br />

          <div className={`flex flex-wrap justify-between lg:space-y-0 space-y-4 mt-3 items-center`}>
            <section className={`w-full lg:w-[14rem]`}>
              <p className={`text-xs font-bold mb-2`}>
                Email
              </p>
              <input
                type="text"
                placeholder="Enter your email address"
                className={`w-full border border-white placeholder:text-[#FFFFFF40] outline-none rounded-sm py-2 text-sm px-4 bg-[#ffffff11]`}
              />
            </section>

            <section className={`w-full lg:w-[14rem]`}>
              <p className={`text-xs font-bold mb-2`}>
                Project Topic
              </p>
              <input
                type="text"
                placeholder="What is your group project topic"
                className={`w-full border border-white placeholder:text-[#FFFFFF40] outline-none rounded-sm py-2 text-sm px-4 bg-[#ffffff11]`}
              />
            </section>
          </div><br />

          <div className={`flex justify-between mt-3 items-center`}>
            <section className={`lg:w-[14rem] w-[60%]`}>
              <p className={`text-xs font-bold mb-2`}>
                Category
              </p>

              <select className={`w-full border border-white placeholder:text-[#FFFFFF40] outline-none rounded-sm py-2 text-sm px-4 bg-[#ffffff11]`}>
                <option value="">Select your category</option>
              </select>
            </section>

            <section className={`lg:w-[14rem] w-[35%]`}>
              <p className={`text-xs font-bold mb-2`}>
                Group Size
              </p>
              <select className={`w-full border border-white placeholder:text-[#FFFFFF40] outline-none rounded-sm py-2 text-sm px-4 bg-[#ffffff11]`}>
                <option value="">Select</option>
              </select>
            </section>
          </div> <br />

          <p className={`text-xs italic text-[#FF26B9]`}>
            Please review your registration details before submitting
          </p>

          <div className={`flex items-center space-x-2 mt-3`}>
            <input type="checkbox" id="check" className={`border bg-transparent`} />
            <label htmlFor="check" className={`text-xs`}>
              I agreed with the event terms and conditions  and privacy policy
            </label>
          </div>

          <div className={`w-full mt-6`}>
            <Button onClick={() => { }}>
              Register Now
            </Button>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Page;
