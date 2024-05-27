"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import project1 from "../../../public/assets/images/project_1.png";
import project2 from "../../../public/assets/images/project_2.png";
import project3 from "../../../public/assets/images/project_3.png";
import project4 from "../../../public/assets/images/project_5.png";

const FeaturedProject = ({
  title,
  summary,
  img,
  link,
  github,
}: {
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}) => {
  return (
    <article className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-3 items-center rounded-xl shadow-xl md:px-5 px-3 md:py-8 py-5 relative bg-neutral border border-gray-200">
      <div className="absolute top-0 -right-2 -z-10 w-[100%] lg:h-[103%] h-[102%] rounded-xl bg-primary" />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer overflow-hidden rounded-xl"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          width={"0"}
          height={"0"}
          priority
        />
      </Link>
      <div className="">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl text-accent font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium">{summary}</p>
        <div className="mt-2 flex items-center gap-4">
          <Link href={github} target="_blank">
            <AiFillGithub className="inline w-9 h-9" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-full bg-primary hover:bg-accent text-neutral px-5 py-1 text-base duration-300 ease-in-out shadow-md flex items-center gap-2"
          >
            Visit Project <BiLinkExternal />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  title,
  img,
  link,
  github,
}: {
  title: string;
  img: StaticImageData;
  link: string;
  github: string;
}) => {
  return (
    <article className="rounded-xl shadow-xl md:p-5 p-3 border border-gray-200  relative bg-neutral">
      <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[102%] rounded-xl bg-primary" />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer overflow-hidden rounded-xl"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto rounded-xl"
          width={"0"}
          height={"0"}
          priority
        />
      </Link>
      <div className="mt-2">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="pt-4 text-accent text-left text-2xl font-bold">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex justify-between items-center">
          <Link
            href={link}
            target="_blank"
            className="text-base flex items-center gap-2 hover:underline"
          >
            Visit <BiLinkExternal />
          </Link>
          <Link href={github} target="_blank">
            <AiFillGithub className="inline w-9 h-9" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        id="project"
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
            My Projects
          </h1>
          <div className="md:w-24 w-16 h-1 mx-auto bg-accent md:mt-2 mt-1" />
        </motion.div>
        <div className="space-y-10">
          <motion.div
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <FeaturedProject
              img={project1}
              title="Foody Restaurant"
              summary="Foody is a restaurant website through which one can know all information about a restaurant and can order food while sitting at the table."
              link="https://vault-restaurent.vercel.app/"
              github="https://github.com/mdawlad29/vault-frontend"
            />
          </motion.div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-4">
            <div>
              <Project
                img={project4}
                title="E-Tutor Learning Platform"
                link="https://e-tutor-learning.vercel.app/"
                github="https://github.com/mdawlad29/E-tutor"
              />
            </div>

            <div>
              <Project
                img={project2}
                title="Bondhu Health"
                link="https://bondhuhealth.netlify.app/"
                github="https://github.com/mdawlad29/Bondhu-Health"
              />
            </div>
          </div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <FeaturedProject
              img={project3}
              title="Intelligent Systems & Solutions Limited"
              summary="It is an artificial intelligence system that you can order to create software according to your needs. So all information is presented through this site."
              link="https://intelligentsystemsolution.netlify.app/"
              github="https://github.com/mdawlad29/intelligentsystemssolutions"
            />
          </motion.div>
        </div>
        <div className="mx-auto text-center mt-12">
          <Link
            href={"/online_cv"}
            className="px-8 py-3 rounded-full bg-primary text-neutral font-semibold hover:bg-accent duration-300 ease-in-out text-sm uppercase"
          >
            see more projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
