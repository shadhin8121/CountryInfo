"use client";

import { GlobalContext } from "@/context/Context";
import { useContext } from "react";
import Image from "next/image";

export default function Search() {
  let { info } = useContext(GlobalContext);
  let countryInfo = info[0];
  return (
    <div className="container mx-auto flex flex-col p-2 md:flex-row lg:flex-row gap-4 py-7">
      {countryInfo ? (
        <>
          {
            <>
              <div className="ring rounded-lg mr-5">
                <Image
                  className="rounded-lg"
                  src={countryInfo?.flags?.png}
                  width={600}
                  height={400}
                  alt="flags of a country"
                />
              </div>
              <div>
                <h1 className="mb-2">
                  <span className="text-green-500 capitalize">name:</span>{" "}
                  {countryInfo?.name?.common}
                </h1>
                <h1 className="mb-2">
                  <span className="text-green-500 capitalize">
                    Official name:
                  </span>{" "}
                  {countryInfo?.name?.official}
                </h1>
                <h1 className="mb-2">
                  <span className="text-green-500 capitalize">
                    independent:
                  </span>{" "}
                  {countryInfo?.independent === true ? "yes" : "No"}
                </h1>
                <h1 className="mb-2">
                  <span className="text-green-500 capitalize">Capital:</span>{" "}
                  {countryInfo?.capital}
                </h1>
                <h1 className="mb-2">
                  <span className="text-green-500 capitalize">Region:</span>{" "}
                  {countryInfo?.region}
                </h1>
                <h1>
                  <span className="text-green-500 capitalize">sub Region:</span>{" "}
                  {countryInfo?.subregion}
                </h1>
              </div>
            </>
          }
        </>
      ) : (
        <div>country information not available</div>
      )}
    </div>
  );
}
