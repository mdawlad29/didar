"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        id="about"
        className="grid md:grid-cols-3 grid-cols-1 gap-3 lg:items-center lg:pt-20 md:pt-16 pt-10"
      >
        {/*---- Left ----*/}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          className="md:col-span-1 relative rounded-lg"
        >
          <div className="absolute top-1 -right-2 -z-10 w-[100%] h-[101%] bg-primary rounded-lg" />
          <Image
            src={"/assets/images/about_image.jpeg"}
            alt="About Image"
            width={500}
            height={500}
            priority
            className="h-full object-cover rounded-lg"
          />
        </motion.div>

        {/*---- Right ----*/}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          initial={{
            opacity: 0,
            y: -80,
          }}
          className="md:col-span-2 lg:px-10 md:px-6 sm:px-4 px-2 py-3"
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
          >
            <h1 className="text-accent md:text-4xl text-2xl font-semibold">
              About Me
            </h1>
            <div className="md:w-24 w-16 h-1 bg-accent md:mt-2 mt-1" />
          </motion.div>

          <div className="lg:space-y-5 space-y-3 lg:pt-14 pt-4">
            <p className="text-justify text-sm font-medium">
              This is Didarul Islam, a skilled Network Engineer with extensive
              experience in corporate settings and ISPs. Expert with MikroTik,
              Cisco, Huawei, and Juniper devices, I design and maintain networks
              for seamless connectivity and strong security. Always up-to-date
              with the latest tech, I deliver reliable and efficient network
              solutions
            </p>

            {/*----- Personal Info -----*/}
            <div className="flex justify-between flex-wrap items-center lg:pt-5">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-accent text-sm font-bold w-20">Name</h4>
                  <h2>:</h2>
                  <h4 className="text-sm">Didarul Islam</h4>
                </div>
                <div className="flex items-center gap-2">
                  <h4 className="text-accent text-sm font-bold w-20">
                    Education
                  </h4>
                  <h2>:</h2>
                  <h4 className="text-sm">Bsc in CSE</h4>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-accent text-sm font-bold w-20">Email</h4>
                  <h2>:</h2>
                  <Link
                    href="mailto:didarulcse3655@gmail.com"
                    className="text-sm text-primary"
                  >
                    didarulcse3655@gmail.com
                  </Link>
                </div>
              </div>

              {/*----- Right -----*/}
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-accent text-sm font-bold w-20">Phone</h4>
                  <h2>:</h2>
                  <Link
                    href={"tel:+880 1871141725"}
                    className="text-sm text-primary"
                  >
                    +880 1871141725
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <h4 className="text-accent text-sm font-bold w-20">
                    Address
                  </h4>
                  <h2>:</h2>
                  <Link
                    href="https://www.google.com/maps/place/Dhaka/@23.7810672,90.2548737,11z/data=!3m1!4b1!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.804093!4d90.4152376!16zL20vMGZuYjQ?entry=ttu"
                    target="_blank"
                    className="text-sm text-primary"
                  >
                    Dhaka, Bangladesh
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <h4 className="text-accent text-sm font-bold w-20">Hobby</h4>
                  <h2>:</h2>
                  <h4 className="text-sm">
                    Public Speaking, Travelling, Football
                  </h4>
                </div>
              </div>
            </div>

            {/*----- Button ------*/}
            <div className="flex items-center gap-4 lg:pt-5">
              <Link href={"/online_cv"}>
                <button className="bg-primary hover:bg-accent duration-300 ease-in-out font-medium text-neutral text-sm px-4 py-2 w-32 sm:w-40 rounded-full uppercase">
                  online cv
                </button>
              </Link>
              <Link
                href={"/Resume of Didarul Islam.pdf"}
                download={true}
                target="_blank"
              >
                <button className="bg-primary hover:bg-accent duration-300 ease-in-out font-medium text-neutral text-sm justify-center px-4 py-2 w-32 sm:w-40 rounded-full uppercase flex items-center gap-2">
                  resume <BiLinkExternal />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
