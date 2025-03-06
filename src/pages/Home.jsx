import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HighlightText from "../global/HighlightText";
import Content from "../components/Content";
import YouKnowUs from "../components/YouKnowUs";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection
        heading={
          <HighlightText
            text={"Find Your Dream Job – Fast & Easy!"}
            highlight={"Dream Job"}
            color="var(--dark-bg)"
          />
        }
        para={
          "Explore the latest job openings from top recruiters and apply with just one click. Take the next step in your career effortlessly with our seamless job search platform!"
        }
        className={" flex items-center justify-center flex-col gap-2 pt-[80px] sm:pt-20"}
        headingClass={"text-2xl md:text-3xl md:text-4xl text-gray-100 font-bold text-center"}
        paraClass={"w-full md:w-[80%] text-sm md:text-md text-center text-gray-200"}
      />
      <Content/>
      <YouKnowUs/>
    </div>
  );
};

export default Home;
