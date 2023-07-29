import React from "react";
import Banner from "../../components/homeComponents/Banner";
import Faq from "../../components/homeComponents/Faq";
import Features from "../../components/homeComponents/Features";
import GetKronos from "../../components/homeComponents/GetKronos";
import Pricing from "../../components/homeComponents/Pricing";
import Work from "../../components/homeComponents/Work";
import Footer from "../../components/shared/footer/Footer";

function Home() {
  return (
    <>
      <Banner width={"max-w-[59rem] mx-auto"}></Banner>
      <Features width={"max-w-[78rem] mx-auto"}></Features>
      <GetKronos width={"max-w-[78rem] mx-auto"}></GetKronos>
      <Work width={"max-w-[78rem] mx-auto"}></Work>
      <Pricing width={"max-w-[78rem] mx-auto"}></Pricing>
      <Faq width={"max-w-[78rem] mx-auto"}></Faq>
      <Footer width={"max-w-[75rem] mx-auto"}></Footer>
    </>
  );
}

export default Home;
