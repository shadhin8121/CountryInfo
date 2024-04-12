import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";

export default function Countries({ datas }) {
  // when clicked go to dynamic page and show data of that country
  let { showCountryWtihDetailsWhenClicked } = useContext(GlobalContext);

  // function to handle when country is clicked
  function handleClick() {
    // Pass the country name to the function
    showCountryWtihDetailsWhenClicked(datas.name.common);
  }

  // returning
  return (
    <Link href={`/fck/${datas.name.common}`}>
      <div
        className="justify-self-center p-5 border-indigo-900 border-4 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        <Image
          src={datas.flags.png}
          alt={`image of ${datas.name.common} flag`}
          width={400}
          height={200}
          className="rounded-lg pb-2"
        />

        <h1>{datas.name.common}</h1>
      </div>
    </Link>
  );
}
