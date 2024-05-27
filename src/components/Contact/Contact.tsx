"use client";
import Link from "next/link";
import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import {motion} from "framer-motion"

const Contact = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        id="contact"
        className="lg:py-20 md:py-16 py-10"
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
            Contact Me
          </h1>
          <div className="md:w-24 w-16 h-1 mx-auto bg-accent md:mt-2 mt-1" />
        </motion.div>
        <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-6 gap-3">
          {/*----- Left -----*/}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            initial={{
              opacity: 0,
              y: -80,
            }}
            className="lg:col-span-3 p-4 shadow-lg rounded-lg border border-gray-200"
          >
            <form className="space-y-2">
              <h2 className="md:text-2xl text-xl text-primary font-bold">
                Send Message
              </h2>
              <p className="pb-2">I am answer your all request</p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Please type your name"
                  className="border border-gray-200 px-3 py-2 rounded-md focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                  className="border border-gray-200 px-3 py-2 rounded-md focus:outline-none focus:border-primary"
                />
                <input
                  type="phone"
                  name=""
                  id=""
                  placeholder="+880 1725385909"
                  className="border border-gray-200 px-3 py-2 rounded-md focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="please type your subject"
                  className="border border-gray-200 px-3 py-2 rounded-md focus:outline-none focus:border-primary"
                />
              </div>
              <textarea
                rows={5}
                name=""
                id=""
                placeholder="Write your message here..."
                className="border border-gray-200 px-3 py-2 rounded-md focus:outline-none focus:border-primary w-full"
              />
              <button
                onClick={onSubmit}
                style={{ letterSpacing: ".2em" }}
                type="submit"
                className="w-full py-1 rounded-full text-lg bg-primary text-neutral hover:bg-accent shadow-xl hover:shadow-2xl duration-500 ease-in-out uppercase"
              >
                submit
              </button>
            </form>
          </motion.div>
          {/*----- Right -----*/}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            initial={{
              opacity: 0,
              y: 80,
            }}
            className="lg:col-span-2 p-4 shadow-lg rounded-lg border border-gray-200"
          >
            <h2 className="md:text-2xl text-xl text-primary font-bold text-center mb-5">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <FaMobileAlt className="inline w-8 h-8 text-accent" />
                <div>
                  <h2 className="text-accent font-semibold text-xl pb-2">
                    Phone
                  </h2>
                  <Link
                    href="tel:+880 1725385909"
                    className="text-base text-primary"
                  >
                    +880 1725386909
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <MdEmail className="inline w-8 h-8 text-accent" />
                <div>
                  <h2 className="text-accent font-semibold text-xl pb-2">
                    Email
                  </h2>
                  <Link
                    href="mailto:mdawladbdinfo@gmail.com"
                    className="text-base text-primary"
                  >
                    mdawladbdinfo@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <FaLocationDot className="inline w-8 h-8 text-accent" />
                <div>
                  <h2 className="text-accent font-semibold text-xl pb-2">
                    Address
                  </h2>
                  <Link
                    href="https://www.google.com/maps/place/Uttara-12/@23.8678287,90.3885283,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c59a70e379e1:0x7ca4d9b5d8269c19!8m2!3d23.8678238!4d90.3911032!16s%2Fg%2F11t9qyp_ty?entry=ttu"
                    target="_blank"
                    className="text-base text-primary"
                  >
                    Uttara-12, Road - 17, Dhaka, Bangladesh
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-16">
              <Link href={"https://github.com/mdawlad29"} target="_blank">
                <BsGithub className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
              </Link>
              <Link href={"https://www.facebook.com/awlads"} target="_blank">
                <BsFacebook className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/mdawlad/"}
                target="_blank"
              >
                <BsLinkedin className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
              </Link>
              <Link
                href={"https://www.instagram.com/mdawlad909/"}
                target="_blank"
              >
                <BsInstagram className="inline w-7 h-7 mx-2 text-accent hover:text-primary duration-300 ease-in-out" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
