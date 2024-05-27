"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-accent text-neutral shadow-black absolute py-1 px-4 cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <div
        onCopy={(event) => event.preventDefault()}
        id="skill"
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
            My Skills
          </h1>
          <div className="md:w-24 w-16 h-1 mx-auto bg-accent md:mt-2 mt-1" />
        </motion.div>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circle">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-primary text-neutral shadow-black cursor-pointer lg:p-5 md:p-4 p-2 xs:text-xs"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>
          <Skill name="HTML" x="-29vw" y="2vw" />
          <Skill name="CSS" x="-15vw" y="-9.8vw" />
          <Skill name="Javascript" x="14vw" y="0vw" />
          <Skill name="Typescript" x="28vw" y="6vw" />
          <Skill name="ReactJS" x="-12vw" y="5vw" />
          <Skill name="NextJS" x="-25vw" y="-15vw" />
          <Skill name="Tailwind CSS" x="13vw" y="-13vw" />
          <Skill name="Ant Design" x="0vw" y="16vw" />
          <Skill name="Material UI" x="32vw" y="-5vw" />
          <Skill name="Bootstrap" x="0vw" y="-20.2vw" />
          <Skill name="Web Design" x="-22vw" y="18vw" />
          <Skill name="Figma" x="18vw" y="18vw" />
        </div>
      </div>
    </>
  );
};

export default Skills;
