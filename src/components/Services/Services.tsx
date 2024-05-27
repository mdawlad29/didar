"use client";
import React from "react";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaLaptopCode, FaEye, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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
          <h1 className="text-accent text-center md:text-4xl text-2xl italic font-semibold">
            My Service
          </h1>
          <div className="md:w-24 w-16 h-1 mx-auto bg-accent md:mt-2 mt-1" />
        </motion.div>
        <div className="space-y-10">
          {/*----- Client ------*/}
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-[70%] mx-auto shadow-lg hover:shadow-xl  rounded-tr-[3rem] rounded-bl-[3rem] hover:rounded-bl-none hover:rounded-tr-none hover:rounded-br-[3rem] hover:rounded-tl-[3rem] border border-gray-200 hover:border-neutral hover:bg-accent hover:text-neutral duration-500 ease-in-out px-5 md:py-10 py-5 text-center group space-y-4"
          >
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
          </motion.div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
            {[...Array(3)]?.map((_, index) => (
              <div
                key={index}
                className="shadow-lg hover:shadow-xl rounded-tl-[3rem]  hover:rounded-tl-none rounded-br-[3rem] hover:rounded-tr-[3rem] hover:rounded-bl-[3rem] hover:rounded-br-none border border-gray-200 hover:border-neutral hover:bg-accent hover:text-neutral duration-500 ease-in-out px-5 md:py-10 py-5 text-center group space-y-4"
              >
                {index === 0 ? (
                  <FaLaptopCode className="text-center inline w-8 h-8 text-gray-800 group-hover:text-primary duration-500 ease-in-out" />
                ) : index === 1 ? (
                  <FaEye className="text-center inline w-8 h-8 text-gray-800 group-hover:text-primary duration-500 ease-in-out" />
                ) : (
                  <FaMobileAlt className="text-center inline w-8 h-8 text-gray-800 group-hover:text-primary duration-500 ease-in-out" />
                )}
                <div>
                  <h2
                    style={{ letterSpacing: ".1em" }}
                    className="md:text-xl text-lg text-primary font-bold group-hover:text-neutral duration-500 ease-in-out"
                  >
                    {index === 0
                      ? "Web Design"
                      : index === 1
                      ? "Pixel Perfect Design"
                      : "Full Responsive"}
                  </h2>
                  <div className="w-14 h-1 mx-auto bg-accent group-hover:bg-primary duration-500 ease-in-out md:mt-2 mt-1" />
                  <p className="mt-6 text-sm font-semibold">
                    {index === 0
                      ? "I can do any kind of website design like E-commerce, Portfolio, etc."
                      : index === 1
                      ? "100% Pixel perfect design is my goal."
                      : "I will provide full responsive website with mobile phone, tablet, desktop, extra large device"}
                  </p>
                  <p className="md:text-base text-sm font-bold text-primary group-hover:text-neutral mt-1">
                    Thank you.!
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/*----- Web Development -----*/}
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-[70%] mx-auto shadow-lg hover:shadow-xl rounded-tr-[3rem] rounded-bl-[3rem] hover:rounded-bl-none hover:rounded-tr-none hover:rounded-br-[3rem] hover:rounded-tl-[3rem] border border-gray-200 hover:border-neutral hover:bg-accent hover:text-neutral duration-500 ease-in-out px-5 md:py-10 py-5 text-center group space-y-4"
          >
            <FaLaptopCode className="text-center inline w-8 h-8 text-gray-800 group-hover:text-primary duration-500 ease-in-out" />
            <div>
              <h2
                style={{ letterSpacing: ".2em" }}
                className="md:text-2xl text-lg text-primary font-bold group-hover:text-neutral duration-500 ease-in-out"
              >
                Web Development
              </h2>
              <div className="w-14 h-1 mx-auto bg-accent group-hover:bg-primary duration-500 ease-in-out md:mt-2 mt-1" />
              <p className="mt-6 text-sm font-semibold">
                I will provide web development service. If you need please
                contact with me.
              </p>
              <p className="md:text-base text-sm font-bold text-primary group-hover:text-neutral mt-1">
                Thank you.!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
