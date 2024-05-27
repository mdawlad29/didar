"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const links = [
  { name: "home", link: "/" },
  { name: "about", link: "#about" },
  { name: "service", link: "#service" },
  { name: "skills", link: "#skill" },
  { name: "resume", link: "#resume" },
  { name: "contact", link: "#contact" },
];

const Header = () => {
  const [expandedMenu, setExpandedMenu] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState<string>("");

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setActiveNav("fixed top-0 left-0 w-full !bg-neutral shadow-xl z-50")
        : setActiveNav("");
    }
  };

  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
      >
        <div
          className={`${
            activeNav ? activeNav : "bg-secondary-50"
          } text-neutral py-6 lg:px-20 md:px-10 sm:px-6 px-4 `}
        >
          <div
            className={`flex ${
              activeNav ? "justify-between" : "justify-center"
            } items-center`}
          >
            <Link
              onClick={() => setExpandedMenu(true)}
              href={"/"}
              className={`md:w-12 md:h-12 w-16 h-16 ${
                activeNav ? "md:block" : "md:hidden block"
              }`}
            >
              <Image
                src={"/assets/images/about_image.jpeg"}
                alt="Didar"
                width={600}
                height={600}
                priority
                quality={100}
                className="w-[55px] h-[55px] rounded-full object-contain"
              />
            </Link>

            <div
              className={`md:block hidden ${
                activeNav
                  ? "border-none py-0"
                  : "border border-primary py-2 px-6"
              } rounded-full`}
            >
              <ul className="flex items-center lg:gap-x-14 md:gap-x-5 uppercase">
                {links.map((link) => (
                  <li
                    key={link.name}
                    className={`${
                      link?.name === "home"
                        ? "text-primary"
                        : activeNav
                        ? "text-accent hover:text-primary"
                        : "hover:text-primary"
                    } duration-300 ease-in-out font-medium`}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/*---- Menu Icon ---*/}
            <AiOutlineMenu
              onClick={() => setExpandedMenu(true)}
              className={`text-xl md:hidden block cursor-pointer ${
                activeNav ? "text-accent" : "hidden"
              }`}
            />
          </div>
        </div>

        {/*---- Mobile Menu ----*/}
        <div
          className={`${
            expandedMenu ? "translate-y-0" : "-translate-y-full"
          } bg-white text-accent md:hidden md:px-12 sm:px-8 px-4 py-3 transition-transform duration-700 ease-in-out transform fixed top-0 left-0 w-full z-50 flex justify-between shadow-2xl`}
        >
          <ul className="uppercase">
            {links.map((link) => (
              <li
                key={link.name}
                className={`${
                  link?.name === "home" && "text-primary"
                } my-4 font-semibold text-accent`}
                onClick={() => setExpandedMenu(false)}
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <AiOutlineClose
            onClick={() => setExpandedMenu(false)}
            className="text-xl mt-3 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
