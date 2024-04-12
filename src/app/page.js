"use client";

import Countries from "@/components/country/Country";
import { GlobalContext } from "@/context/Context";
import { useContext, useEffect } from "react";

export default function Home() {
  // getting Datas from Context
  let { getAllCountryInformation, allCountryData, setAllCountryData } =
    useContext(GlobalContext);

  // useEffect hook to call getAllCountryInformation() after page reload
  useEffect(() => {
    // Check if the component is mounted on the client-side
    if (typeof window !== "undefined") {
      // Check if the page has been reloaded
      if (performance.navigation.type === 1) {
        // Page has been reloaded, so call getAllCountryInformation()
        getAllCountryInformation();
      }
    }
  }, []);

  // console.log(allCountryData);

  return (
    <div className="container mx-auto mt-7 capitalize grid grid-cols-1 gap-6 items-center lg:grid-cols-4 md:grid-cols-3 ">
      {allCountryData?.map((items) => {
        return <Countries key={items.name.common} datas={items} />;
      })}
    </div>
  );
}
