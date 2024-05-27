"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../Shared/LiIcon";

const Details = ({
  position,
  institute,
  studyName,
  year,
  gpa,
}: {
  position: string;
  institute: string;
  studyName: string;
  year: string;
  gpa: string;
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
        <h3 className="capitalize text-accent font-semibold md:text-xl text-lg">
          {position}
        </h3>
        <p className="capitalize text-sm">{institute}</p>
        <p className="capitalize text-sm">{studyName}</p>
        <p className="capitalize text-sm">{year}</p>
        <p className="capitalize text-sm">{gpa}</p>
      </motion.div>
    </li>
  );
};

const Educations = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div ref={ref} className="relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 top-1 w-1 h-full bg-accent origin-top"
        />
        <ul className="w-full">
          <Details
            position="Diploma"
            institute="Institute: Bhola Polytechnic institute"
            studyName="Field of Study: Computer"
            year="Passing Year: 2022"
            gpa="CGPA: 3.67 on 4.00"
          />
          <Details
            position="Secondary School Certificate(SSC)"
            institute="Institute: Banker Hat Co-operative High School"
            studyName="Field of Study: Science"
            year="Passing Year: 2017"
            gpa="CGPA: 4.25 on 5.00"
          />
        </ul>
      </div>
    </>
  );
};

export default Educations;
