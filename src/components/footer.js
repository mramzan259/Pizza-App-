"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="body-font text-black bg-white body-font dark:bg-black/80 dark:text-white border-t border-black/40">
      <div className=" container mx-auto flex flex-wrap justify-between p-3 px-10 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-extrabold items-center  uppercase"
        >
          <Image alt="Navbar Logo" src={"/Pizza.svg"} width={60} height={60} />
          <p className="leading-5 text-xl mx-2">Pizza Wizza</p>
        </Link>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 dark:sm:border-gray-200 sm:border-black/40  sm:py-2 sm:mt-0 mt-4">
          Copyright © 2024 Pizza Wizza
        </p>
      </div>
    </footer>
  );
}

export default Footer;
