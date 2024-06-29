"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        id="service"
        className="lg:pt-20 md:pt-16 pt-10"
      >
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{
            opacity: 0,
            y: 30,
          }}
          transition={{
            duration: 1,
          }}
          className="lg:mb-10 md:mb-7 mb-4"
        >
          <h1 className="text-accent text-center md:text-4xl text-2xl font-semibold">
            My Service
          </h1>
          <div className="md:w-24 w-16 h-1 mx-auto bg-accent md:mt-2 mt-1" />
        </motion.div>
        <div className="space-y-10">
          {/*----- Client ------*/}
          <div className="lg:w-[70%] mx-auto shadow-lg hover:shadow-xl  rounded-tr-[3rem] rounded-bl-[3rem] hover:rounded-bl-none hover:rounded-tr-none hover:rounded-br-[3rem] hover:rounded-tl-[3rem] border border-gray-200 hover:border-neutral hover:bg-accent hover:text-neutral duration-500 ease-in-out px-5 md:py-10 py-5 text-center group space-y-4">
            <BsFillEmojiSmileFill className="text-center inline w-8 h-8 text-gray-800 group-hover:text-primary duration-500 ease-in-out" />
            <div>
              <h2
                style={{ letterSpacing: ".2em" }}
                className="md:text-2xl text-lg text-primary font-bold group-hover:text-neutral duration-500 ease-in-out"
              >
                Client Satisfaction
              </h2>
              <div className="w-14 h-1 mx-auto bg-accent group-hover:bg-primary duration-500 ease-in-out md:mt-2 mt-1" />
              <p className="mt-6 text-sm font-semibold">
                Client satisfaction is my main goal
              </p>
              <p className="md:text-base text-sm font-bold text-primary group-hover:text-neutral mt-1">
                Thank you.!
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
            {[...Array(3)]?.map((_, index) => (
              <div
                key={index}
                className="shadow-lg hover:shadow-xl rounded-tl-[3rem]  hover:rounded-tl-none rounded-br-[3rem] hover:rounded-tr-[3rem] hover:rounded-bl-[3rem] hover:rounded-br-none border border-gray-200 hover:border-neutral hover:bg-accent hover:text-neutral duration-500 ease-in-out px-5 md:py-10 py-5 text-center group space-y-4"
              >
                {index === 0 ? (
                  <Image
                    src="/assets/images/windows-server-icon.png"
                    width={36}
                    height={36}
                    priority
                    quality={100}
                    alt="Windows-server-icon"
                    className="mx-auto"
                  />
                ) : index === 1 ? (
                  <Image
                    src="/assets/images/routing-icon.png"
                    width={36}
                    height={36}
                    priority
                    quality={100}
                    alt="Routing-icon"
                    className="mx-auto"
                  />
                ) : (
                  <Image
                    src="/assets/images/red-hat-icon.png"
                    width={36}
                    height={36}
                    priority
                    quality={100}
                    alt="Red-hat-icon"
                    className="mx-auto"
                  />
                )}
                <div>
                  <h2
                    style={{ letterSpacing: ".1em" }}
                    className="md:text-xl text-lg text-primary font-bold group-hover:text-neutral duration-500 ease-in-out"
                  >
                    {index === 0
                      ? "Windows Server"
                      : index === 1
                      ? "Routing & Switching"
                      : "Red Hat"}
                  </h2>
                  <div className="w-14 h-1 mx-auto bg-accent group-hover:bg-primary duration-500 ease-in-out md:mt-2 mt-1" />
                  <p className="mt-6 text-sm font-semibold">
                    {index === 0
                      ? "Windows Server expert with a deep understanding of system administration, configuration, and optimization. Skilled in managing and securing server environments to ensure high availability, performance, and reliability."
                      : index === 1
                      ? "Expert in routing and switching with extensive experience in Juniper, Huawei, Cisco, Mikrotik, and switches. Skilled in designing, configuring, and troubleshooting complex network infrastructures to ensure optimal performance and reliability."
                      : "Experienced Red Hat Engineer with a strong background in Linux system optimization. Proven ability to enhance infrastructure performance, reliability, and security through expert scripting and troubleshooting skills."}
                  </p>
                  <p className="md:text-base text-sm font-bold text-primary group-hover:text-neutral mt-1">
                    Thank you.!
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/*----- Web Development -----*/}
          <div className="lg:w-[70%] mx-auto shadow-lg hover:shadow-xl rounded-tr-[3rem] rounded-bl-[3rem] hover:rounded-bl-none hover:rounded-tr-none hover:rounded-br-[3rem] hover:rounded-tl-[3rem] border border-gray-200 hover:border-neutral hover:bg-accent hover:text-neutral duration-500 ease-in-out px-5 md:py-10 py-5 text-center group space-y-4">
            {/* <SiMikrotik className="text-center inline w-8 h-8 text-gray-800 group-hover:text-primary duration-500 ease-in-out" /> */}
            <Image
              src="/assets/images/optical-terminal-olt-icon.png"
              width={36}
              height={36}
              priority
              quality={100}
              alt="Optical terminal olt icon"
              className="mx-auto"
            />
            <div>
              <h2
                style={{ letterSpacing: ".2em" }}
                className="md:text-2xl text-lg capitalize text-primary font-bold group-hover:text-neutral duration-500 ease-in-out"
              >
                optical line terminal (OLT)
              </h2>
              <div className="w-14 h-1 mx-auto bg-accent group-hover:bg-primary duration-500 ease-in-out md:mt-2 mt-1" />
              <p className="mt-6 text-sm font-semibold">
                Expert in OLT management, including BDCOM, VSOL, AVES, CDATA,
                Huawei, and AirMedia. Proficient in configuring, optimizing, and
                maintaining OLT systems to ensure seamless and efficient network
                operations.
              </p>
              <p className="md:text-base text-sm font-bold text-primary group-hover:text-neutral mt-1">
                Thank you.!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
