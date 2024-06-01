"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import Educations from "../Educations/Educations";
import LiIcon from "../Shared/LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
}: {
  position: string;
  company: string;
  companyLink?: string;
  time: string;
}) => {
  const ref = React.useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="space-y-2"
      >
        <h3 className="capitalize text-accent font-semibold md:text-xl text-sm">
          {position}
        </h3>
        <Link
          href={`${companyLink}`}
          target="_blank"
          className="capitalize text-primary font-bold flex items-center gap-2 text-xs"
        >
          {company} <BiLinkExternal className="text-primary" />
        </Link>
        <p className="capitalize text-sm">{time}</p>
      </motion.div>
    </li>
  );
};

const Resume = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div
        onCopy={(event) => event.preventDefault()}
        id="resume"
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
          <h1 className="text-accent text-center md:text-4xl text-2xl italic font-semibold">
            My Resume
          </h1>
          <div className="md:w-24 w-16 h-1 mx-auto bg-accent md:mt-2 mt-1" />
        </motion.div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="md:text-2xl text-xl text-primary font-semibold">
                Experience
              </h1>
              <MdWork className="inline w-7 h-7 text-primary" />
            </div>
            <hr className="mb-4" />
            <div ref={ref} className="relative">
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-0 top-1 w-1 h-full bg-accent origin-top"
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
          </div>

          {/*---- Educations -----*/}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="md:text-2xl text-xl text-primary font-semibold">
                Education
              </h1>
              <RiGraduationCapFill className="inline w-7 h-7 text-primary" />
            </div>
            <hr className="mb-4" />
            <Educations />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
