"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div
      onCopy={(event) => {
        event.preventDefault();
      }}
      className="bg-secondary-50 text-neutral py-4 lg:px-28 md:px-12 sm:px-8 px-4 text-center text-sm"
    >
      <div>
        &copy;{" "}
        <Link
          target="_blank"
          href="https://awlad.vercel.app"
          className="text-primary font-bold hover:underline"
        >
          Awlad
        </Link>{" "}
        all reserved.
      </div>
    </div>
  );
};

export default Footer;
