import React from "react";
import Banner from "../../components/homeComponents/Banner";
import Features from "../../components/homeComponents/Features";
import GetKronos from "../../components/homeComponents/GetKronos";
import Work from "../../components/homeComponents/Work";

function Home() {
  return (
    <>
      <Banner width={"max-w-[59rem] mx-auto"}></Banner>
      <Features width={"max-w-[78rem] mx-auto"}></Features>
      <GetKronos width={"max-w-[78rem] mx-auto"}></GetKronos>
      <Work width={"max-w-[78rem] mx-auto"}></Work>
    </>
  );
}

export default Home;
