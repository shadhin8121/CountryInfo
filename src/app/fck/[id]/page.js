"use client";

import { GlobalContext } from "@/context/Context";
import { useContext } from "react";
import Image from "next/image";

export default function Dynamicpage() {
  let { singleCountry, loadingSingleCountry } = useContext(GlobalContext);

  if (loadingSingleCountry) {
    return (
      <div className="bg-gray-700 w-full h-full">
        <p className="text-4xl text-red-600">loading, please wait....</p>
      </div>
    );
  }

  return (
    <div className="flex gap-10 flex-col md:flex-row lg:flex-row container mx-auto mt-10">
      <div>
        {singleCountry && singleCountry.flags && singleCountry.flags.png && (
          <Image
            src={singleCountry.flags.png}
            alt="country image"
            width={500}
            height={300}
            className=" ring rounded"
          />
        )}
      </div>
      <div>
        <h1 className="text-2xl">
          Country name:{" "}
          {singleCountry && singleCountry.name && singleCountry.name.common
            ? singleCountry.name.common
            : null}
          <p className="pb-2 pt-2">
            Official name:{" "}
            {singleCountry && singleCountry.name && singleCountry.name.official
              ? singleCountry.name.official
              : null}
          </p>
          <span className="pb-2 block">
            independent:{" "}
            {singleCountry && singleCountry.independent ? "Yes" : "No"}
          </span>
          <p>
            population:{" "}
            {singleCountry.population ? singleCountry.population : null}
          </p>
        </h1>
      </div>
    </div>
  );
}
