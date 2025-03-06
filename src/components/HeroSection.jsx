import React from "react";
import hero_bg from "../../public/images/hero_bg.webp";

const HeroSection = ({ className, heading, para, paraClass, headingClass }) => {
  return (
    <div
      className="px-4 py-5 md:py-10 min-h-[60vh] md:min-h-[80vh] shadow-xl flex items-center justify-center"
      style={{
        background: `${
          hero_bg
            ? `linear-gradient(rgba(0,0,0,0.64),rgba(0,0,0,0.94)) ,url(${hero_bg})`
            : ""
        }`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`${className} container mx-auto`}>
        <h1 className={`${headingClass}`}>{heading}</h1>
        <p className={`${paraClass}`}>{para}</p>
      </div>
    </div>
  );
};

export default HeroSection;
