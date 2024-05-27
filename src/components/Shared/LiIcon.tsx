"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }: { reference: React.RefObject<any> }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <>
      <figure className="absolute -left-9 stroke-[#263170]">
        <svg
          className="-rotate-90"
          width={"75"}
          height={"75"}
          viewBox="0 0 100 100"
        >
          <circle
            cx="75"
            cy={"50"}
            r={"20"}
            className="stroke-[#0866FF] stroke-1 fill-none"
          />
          <motion.circle
            style={{ pathLength: scrollYProgress }}
            cx="75"
            cy={"50"}
            r={"20"}
            className="stroke-[4px] fill-[#83aef3]"
          />
          <circle
            cx="75"
            cy={"50"}
            r={"10"}
            className="stroke-1 fill-[#0866FF]"
          />
        </svg>
      </figure>
    </>
  );
};

export default LiIcon;
