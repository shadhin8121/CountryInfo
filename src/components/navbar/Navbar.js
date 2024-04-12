"use client";

import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {
  let { params, setParams, handleOnchange, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="container mx-auto flex lg:justify-between items-center gap-5  shadow-2xl ">
      <div className=" w-14 ml-6">
        <Link href="/">
          <Image
            src="/logo.jpg"
            width={100}
            height={100}
            alt="Logo"
            className="w-full bg-contain rounded-lg hover:scale-105 duration-300 group"
          />
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="px-3 py-2 border-none outline-none rounded-full bg-slate-600 text-white"
            type="text"
            placeholder="Search..."
            onChange={handleOnchange}
            value={params}
          />
        </form>
      </div>
      <div className="hidden md:block lg:block">
        <ul className="flex  text-2xl border border-indigo-700 rounded-lg ">
          <li className="border border-indigo-700 px-5 py-1 rounded-l-lg hover:border-indigo-300 duration-150">
            <Link href="/">Home</Link>
          </li>
          <li className="border border-indigo-700 px-5 py-1 rounded-r-lg hover:border-indigo-300 duration-150">
            <Link href="/saved">saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
