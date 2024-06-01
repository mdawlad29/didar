"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import CvLiIcon from "../Shared/CvLiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  desc,
}: {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  desc?: string;
}) => {
  const ref = React.useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 ml-14 flex flex-col">
      <CvLiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize text-accent font-semibold md:text-xl text-sm">
          {position}
        </h3>
        <Link
          href={companyLink}
          target="_blank"
          className="capitalize text-primary font-bold flex items-center gap-2 text-xs"
        >
          {company} <BiLinkExternal className="text-primary" />
        </Link>
        <p className="capitalize text-sm">{time}</p>
        <p className="text-justify text-sm pt-2">{desc}</p>
      </motion.div>
    </li>
  );
};

const OnlineCv = () => {
  const router = useRouter();
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div
        onCopy={(event) => event.preventDefault()}
        className="lg:py-20 md:py-16 py-10 lg:mx-20 md:mx-10 sm:mx-6 mx-4"
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {/*--- About Me ----*/}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            initial={{
              opacity: 0,
              y: -80,
            }}
            className="lg:col-span-1 space-y-8"
          >
            {/*---- Personal Info ----*/}
            <div className="border border-gray-200 rounded-md p-4">
              <div className="text-center">
                <Image
                  src={"/assets/images/about_image.jpeg"}
                  alt="Awlad"
                  width={600}
                  height={600}
                  priority
                  className="w-20 h-20 rounded-full object-cover border-2 border-secondary mx-auto shadow-xl"
                />
                <h1 className="text-xl font-semibold text-primary mt-2">
                  Didarul Islam
                </h1>

                <p className="text-sm mb-4">@Network Engineer</p>

                <div>
                  <Link
                    href={
                      "https://www.linkedin.com/in/didarul-islam-6238052b4//"
                    }
                    target="_blank"
                  >
                    <button className="bg-accent hover:bg-primary duration-300 ease-in-out font-medium text-neutral sm:text-sm text-xs px-3 py-2 rounded-md uppercase sm:w-32 w-28 lg:w-[100px] lg:text-xs">
                      follow us
                    </button>
                  </Link>

                  <Link href={"https://www.messenger.com/t/100024472604761"}>
                    <button className="bg-accent hover:bg-primary duration-300 ease-in-out font-medium text-neutral sm:text-sm text-xs px-3 py-2 rounded-md uppercase sm:mx-4 mx-2 sm:w-32 w-28 lg:w-[100px] lg:text-xs">
                      message
                    </button>
                  </Link>
                </div>
              </div>

              {/*---- Description ----*/}
              <div className="mt-8">
                <h1 className="uppercase italic text-xl font-semibold text-accent">
                  About Me
                </h1>
                <div className="mt-3">
                  <p className="text-justify text-sm font-medium">
                    This is Didarul Islam, a skilled Network Engineer with
                    extensive experience in corporate settings and ISPs. Expert
                    with MikroTik, Cisco, Huawei, and Juniper devices, I design
                    and maintain networks for seamless connectivity and strong
                    security. Always up-to-date with the latest tech, I deliver
                    reliable and efficient network solutions
                  </p>
                </div>
              </div>

              {/*--- Personal Detail ----*/}
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <h4 className="text-accent text-sm font-bold w-20">
                    Full Name
                  </h4>
                  <h2>:</h2>
                  <h4 className="text-sm">Didarul Islam</h4>
                </div>
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
              </div>

              {/*--- Links ---*/}
              <div className="text-center mt-8">
                <Link
                  href={"https://www.facebook.com/didarulcse"}
                  target="_blank"
                >
                  <BsFacebook className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
                </Link>
                <Link href={"mailto:didarulcse3655@gmail.com"}>
                  <MdEmail className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
                </Link>

                <Link href={"tel:+880 1871141725"}>
                  <BsTelephoneFill className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
                </Link>
              </div>
            </div>

            {/*--- skills ----*/}
            <div className="border border-gray-200 rounded-md p-4  space-y-8">
              <h1 className="uppercase italic text-xl font-semibold text-accent">
                skills
              </h1>

              <div className="flex items-center flex-wrap gap-10 mt-8">
                <Image
                  src={"/assets/images/cisco.jpg"}
                  width={500}
                  height={500}
                  alt="Icon"
                  priority
                  className="w-12 h-12 object-cover"
                />
                <Image
                  src={"/assets/images/microtik.png"}
                  width={500}
                  height={500}
                  alt="Icon"
                  priority
                  className="w-12 h-12 object-cover"
                />
                <Image
                  src={"/assets/images/server.jpg"}
                  width={500}
                  height={500}
                  alt="Icon"
                  priority
                  className="w-12 h-12 object-cover"
                />
                <Image
                  src={"/assets/images/junipar.png"}
                  width={500}
                  height={500}
                  alt="Icon"
                  priority
                  className="w-12 h-12 object-cover"
                />
                <Image
                  src={"/assets/images/cdata.png"}
                  width={500}
                  height={500}
                  alt="Icon"
                  priority
                  className="w-12 h-12 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/*----- Experience ------*/}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            initial={{
              opacity: 0,
              y: 80,
            }}
            className="lg:col-span-2 border border-gray-200 rounded-md p-4 space-y-8"
          >
            {/*--- CV Button ---*/}
            <div className="flex justify-end">
              <Link
                href={"/Resume of Didarul Islam.pdf"}
                download={true}
                target="_blank"
              >
                <button className="bg-accent hover:bg-primary duration-300 ease-in-out font-medium text-neutral text-sm px-5 py-2 rounded-md uppercase flex items-center gap-2">
                  Download cv <BiLinkExternal />
                </button>
              </Link>
            </div>

            <h1 className="uppercase italic text-xl font-semibold text-accent">
              experience
            </h1>

            {/*---- Experience Info ----*/}
            <div ref={ref} className="relative">
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-4 top-1 w-1 h-full bg-accent origin-top"
              />
              <ul className="w-full">
                <Details
                  position="Assistant Network Engineer-NOC"
                  company="Velocity Networks Limited-(IIG), Dhaka."
                  companyLink="https://jadoobroadband.com/"
                  time="DEC 2023 to present"
                />

                <Details
                  position="Guest Trainer in Networking"
                  company="New Horizons CLC, Chittagong."
                  companyLink="https://nvit.com.bd/"
                  time=" JUNE 2023 to Dec 2023"
                />

                <Details
                  position="Guest Trainer in Networking"
                  company="WELL UP TECHNOLOGY, Chittagong"
                  companyLink="https://mywellup.com/"
                  time="JUNE 2022 to Dec 2023"
                />
                <Details
                  position="Technical NOC Engineer"
                  company="ORANGE COMMUNICATION (ISP)."
                  companyLink="https://orangebd.online/"
                  time="OCT 2021 – MARCH 2023"
                />
                <Details
                  position="Support Engineer & Customer Care Executive (ATL)"
                  company="DIGITAL DOT NET (ISP)."
                  companyLink="https://ddnbd.com/"
                  time="APR 2020 – SEP 2021"
                />
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OnlineCv;
