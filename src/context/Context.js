"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export let GlobalContext = createContext();

export default function ContextState({ children }) {
  //getting Data from input in navbar page
  let [params, setParams] = useState("");
  //setting returned data of searching country
  let [info, setInfo] = useState([]);
  //all country data
  let [allCountryData, setAllCountryData] = useState([]);
  // show single coutnry name from country.js page
  let [singleCountry, setSinglecountry] = useState([]);
  //single country loading state
  let [loadingSingleCountry, setLoadingSingleCountry] = useState(false);
  //use router for my search bar. when i submit something it should show search page
  let router = useRouter();

  //changing value of params state everytime i change or write something on input field from navar
  function handleOnchange(event) {
    setParams(event.target.value);
  }

  //searching countries by name
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const res = await fetch(
        ` https://restcountries.com/v3.1/name/${params}?fullText=true`
      );
      const data = await res.json();
      router.push("/search");
      setInfo(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  //function from country.js file: getting single country when i'm clicking it on country.js
  async function showCountryWtihDetailsWhenClicked(country) {
    try {
      setLoadingSingleCountry(true);
      const res = await fetch(
        ` https://restcountries.com/v3.1/name/${country}?fullText=true`
      );
      const data = await res.json();

      setSinglecountry(data[0]);
      setLoadingSingleCountry(false);
    } catch (e) {
      setLoadingSingleCountry(false);
      console.log(e.message);
    }
  }

  //getting all country information
  async function getAllCountryInformation() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      const slicedData = data.slice(0, 20);
      setAllCountryData(slicedData);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        params,
        setParams,
        handleOnchange,
        handleSubmit,
        getAllCountryInformation,
        allCountryData,
        setAllCountryData,
        showCountryWtihDetailsWhenClicked,
        singleCountry,
        loadingSingleCountry,
        setLoadingSingleCountry,
        info,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
