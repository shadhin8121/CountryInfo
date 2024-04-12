import React, { useContext, useEffect, useRef } from "react";
import Countries from "@/components/country/Country";
import { GlobalContext } from "@/context/Context";

export default function Home() {
  const { getAllCountryInformation, allCountryData } =
    useContext(GlobalContext);
  const mountedRef = useRef(false);

  useEffect(() => {
    // Update the mountedRef when the component mounts
    mountedRef.current = true;

    // Check if the component is mounted on the client-side
    if (typeof window !== "undefined" && mountedRef.current) {
      // Check if the page has been reloaded
      if (performance.navigation.type === 1) {
        // Page has been reloaded, so call getAllCountryInformation()
        getAllCountryInformation();
      }
    }

    // Cleanup function to update mountedRef when component unmounts
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <div className="container mx-auto mt-7 capitalize grid grid-cols-1 gap-6 items-center lg:grid-cols-4 md:grid-cols-3 ">
      {allCountryData?.map((items) => (
        <Countries key={items.name.common} datas={items} />
      ))}
    </div>
  );
}
