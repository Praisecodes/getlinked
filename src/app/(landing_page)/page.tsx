import Image from "next/image";

const Page = (): React.ReactNode => {
  return (
    <>
      <h1 className={`text-xl italic font-bold w-full text-right px-14 py-5`}>
        Igniting a Revolution in HR Innovation
      </h1>

      <section className={`px-14 py-5 flex items-start`}>
        <div className={`font-montserrat w-[40%]`}>
          <h1 className={`text-4xl font-extrabold font-clash-display`}>
            getlinked Tech Hackathon<span className={`text-[#D434FE]`}>1.0</span>
          </h1>
          <p className={`text-sm py-2`}>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
          </p>
        </div>

        <Image 
          src={`/images/hero_image.svg`}
          alt="Hero Image"
          height={200}
          width={200}
          className={`flex-1 object-contain object-center`}
        />
      </section>
    </>
  )
}

export default Page;
