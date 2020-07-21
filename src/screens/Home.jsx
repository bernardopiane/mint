import React from "react";
import About from "../components/AboutUs";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <Partners />
      <About />
      <Blog />
      <Contact />
    </>
  );
}
