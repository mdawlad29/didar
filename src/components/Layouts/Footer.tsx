"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div
      onCopy={(event) => {
        event.preventDefault();
      }}
      className="flex md:justify-between justify-center flex-wrap items-center bg-secondary-50 text-neutral py-4 lg:px-28 md:px-12 sm:px-8 px-4"
    >
      <small className="text-[10px]">
        &copy; 2024 Didarul Islam All rights reserved.
      </small>
      <small className="text-[10px]">
        Designed & Developed By{" "}
        <Link
          target="_blank"
          href="https://awlad.vercel.app"
          className="text-primary font-bold hover:underline"
        >
          Mohammad Awlad
        </Link>
      </small>
    </div>
  );
};

export default Footer;
