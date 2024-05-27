"use client";
import { Projects } from "@/Data/ProjectsData";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsFacebook, BsGithub, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import picture from "../../../public/assets/images/awlad.jpg";
import bootImg from "../../../public/assets/images/bootstrap.png";
import cssImg from "../../../public/assets/images/css.png";
import expressImg from "../../../public/assets/images/express.png";
import htmlImg from "../../../public/assets/images/html.png";
import jsImg from "../../../public/assets/images/js.png";
import mongoImg from "../../../public/assets/images/mongo.png";
import muiImg from "../../../public/assets/images/mui.png";
import nextImg from "../../../public/assets/images/nextjs.jpg";
import nodeImg from "../../../public/assets/images/node.png";
import reactImg from "../../../public/assets/images/reacticon.png";
import tailImg from "../../../public/assets/images/tailwind.png";
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
  desc: string;
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
        <h3 className="capitalize text-accent font-semibold md:text-xl text-lg">
          {position}
        </h3>
        <Link
          href={companyLink}
          target="_blank"
          className="capitalize text-primary font-bold flex items-center gap-2"
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
                  src={picture}
                  alt="Awlad"
                  width={"0"}
                  height={"0"}
                  priority
                  className="w-20 h-20 rounded-full object-cover border-2 border-secondary mx-auto shadow-xl"
                />
                <h1 className="text-xl font-semibold text-primary mt-2">
                  MD. AWLAD
                </h1>

                <p className="text-sm mb-4">@Frontend Web Developer</p>

                <div>
                  <Link
                    href={"https://github.com/mdawlad29?tab=repositories"}
                    target="_blank"
                  >
                    <button className="bg-accent hover:bg-primary duration-300 ease-in-out font-medium text-neutral sm:text-sm text-xs px-3 py-2 rounded-md uppercase sm:w-32 w-28 lg:w-[100px] lg:text-xs">
                      follow us
                    </button>
                  </Link>

                  <Link href={"https://www.messenger.com/t/100078916504555"}>
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
                <div className="space-y-3 mt-3">
                  <p className="text-justify text-sm font-medium">
                    I am Md. Awlad, A frontend web developer. I can do any kind
                    of responsive website like portfolio, E-commerce website,
                    PSD to HTML, Figma to HTML and customization.
                  </p>
                  <p className="text-justify text-sm font-medium">
                    I have professional experience in JavaScript Framework(React
                    JS), React JS wrapper(Next JS), JavaScript library(React
                    JS), Frontend toolkit (Tailwind CSS, Material UI, Ant
                    Design, Bootstrap5, CSS3), HTML5, JavaScript, TypeScript,
                    ES6, API integration.
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
                  <h4 className="text-sm">Md. Awlad</h4>
                </div>
                <div className="flex items-center gap-2">
                  <h4 className="text-accent text-sm font-bold w-20">Phone</h4>
                  <h2>:</h2>
                  <Link
                    href={"tel:+880 1725385909"}
                    className="text-sm text-primary"
                  >
                    +880 1725385909
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-accent text-sm font-bold w-20">Email</h4>
                  <h2>:</h2>
                  <Link
                    href="mailto:mdawladbdinfo@gmail.com"
                    className="text-sm text-primary"
                  >
                    mdawladbdinfo@gmail.com
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
                <Link href={"https://www.facebook.com/awlads"} target="_blank">
                  <BsFacebook className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
                </Link>
                <Link href={"mailto:mdawladbdinfo@gmail.com"}>
                  <MdEmail className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
                </Link>
                <Link href={"https://github.com/mdawlad29"} target="_blank">
                  <BsGithub className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
                </Link>
                <Link href={"tel:+880 1725385909"}>
                  <BsTelephoneFill className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
                </Link>
              </div>
            </div>

            {/*---- Skills ----*/}
            <div className="border border-gray-200 rounded-md p-4 lg:h-[80vh] space-y-8">
              <h1 className="uppercase italic text-xl font-semibold text-accent">
                skills
              </h1>

              {/*--- Frontend ----*/}
              <div>
                <h1 className="text-xl font-semibold text-primary mt-2 text-center">
                  Frontend
                </h1>
                <div className="flex items-center flex-wrap gap-10 mt-8">
                  <Image
                    src={reactImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                  <Image
                    src={nextImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                  <Image
                    src={jsImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                  <Image
                    src={muiImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                  <Image
                    src={tailImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                  <Image
                    src={bootImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                  <Image
                    src={htmlImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                  <Image
                    src={cssImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </div>

              {/*--- Backend ----*/}
              <div>
                <h1 className="text-xl font-semibold text-primary mt-2 text-center">
                  Backend
                </h1>
                <div className="flex items-center flex-wrap lg:gap-20 md:gap-16 gap-12 mt-8">
                  <Image
                    src={nodeImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                  <Image
                    src={expressImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                  <Image
                    src={mongoImg}
                    alt="Icon"
                    width={"0"}
                    height={"0"}
                    priority
                    className="w-12 h-12 object-cover"
                  />
                </div>
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
                href={"/Frontend-Web-Developer.pdf"}
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
                  position="Jr. Front-end Developer"
                  company="Softic"
                  companyLink="https://softic.ai/"
                  time="Nov 2023 - present"
                  desc="As a frontend developer, I play pivotal role in crafting immersive digital experiences. My responsive encompass designing and building responsive, user-friendly website that meet clients objectives and engage their target audiences effectively. I utilize a range of technologies, including HTML, CSS JavaScript, TypeScript and web development frameworks (ReactJs, NextJS) to bring web designs to life."
                />

                <Details
                  position="Front-end Developer"
                  company="Marhaba Limited"
                  companyLink="https://marhaba.com.bd/"
                  time="Jun 2023 - Oct 2023"
                  desc="As a frontend developer, I play pivotal role in crafting immersive digital experiences. My responsive encompass designing and building responsive, user-friendly website that meet clients objectives and engage their target audiences effectively. I utilize a range of technologies, including HTML, CSS JavaScript and web development frameworks (ReactJs, NextJS) to bring web designs to life."
                />

                <Details
                  position="React Developer"
                  company="Nexis Limited"
                  companyLink="https://www.nexisltd.com/"
                  time="May 2022 - May 2023"
                  desc="Understanding of the web development process from inception to deployment, understanding of industry trends and the newest programming languages and the technical skills. Responsible for developing new user-facing, features, determining the structure and design of web pages, building reusable codes, optimizing page loading times and using a variety of markup languages to create the web pages."
                />
              </ul>
            </div>

            {/*----- Projects ------*/}
            <div className="pt-4">
              <h1 className="uppercase italic text-xl font-semibold text-accent">
                projects
              </h1>
              <div className="flex flex-wrap -mx-4 mt-4">
                <div className="w-full px-4">
                  <div className="max-w-full overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead>
                        <tr className="bg-primary text-center">
                          <th className="w-1/6 min-w-[160px] text-base font-semibold text-neutral py-2 px-3 border-l border-transparent">
                            ID
                          </th>
                          <th className="w-1/6 min-w-[160px] text-base font-semibold text-neutral py-2 px-3 border-l border-transparent">
                            Project Name
                          </th>
                          <th className="w-1/6 min-w-[160px] text-base font-semibold text-neutral py-2 px-3 border-l border-transparent">
                            Core Language
                          </th>
                          <th className="w-1/6 min-w-[160px] text-base font-semibold text-neutral py-2 px-3 border-l border-transparent">
                            Project Link
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Projects?.map((project: any, index) => (
                          <tr key={project?.id}>
                            <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-gray-200">
                              {index + 1}
                            </td>
                            <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-gray-200 capitalize">
                              {project?.name}
                            </td>
                            <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-gray-200">
                              {project?.language}
                            </td>
                            <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-gray-200">
                              <button
                                onClick={() => router.push(project?.link)}
                                disabled={project?.link === "" ? true : false}
                                className={`${
                                  project?.link === ""
                                    ? "bg-gray-300 text-accent text-sm px-5 py-2 rounded-md cursor-not-allowed"
                                    : "bg-accent hover:bg-primary duration-300 ease-in-out text-neutral text-sm px-5 py-2 rounded-md"
                                }`}
                              >
                                Click Here
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OnlineCv;
