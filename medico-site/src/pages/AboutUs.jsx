import React from "react";
import headImg from "../assets/images/AboutUsImg/headImg.jpg";
import AboutSection from "../components/AboutUs/AboutSection";
import FeaturesBanner from "../components/FeaturesBanner";
import { ProfileCard } from "../components/AboutUs/ProfileCard";
import BigSectionName from "../components/BigSectionName";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      {/* Head Title */}
      <div
        className="head bg-cover bg-center h-[100%] md:h-[200px] flex items-center"
        style={{
          backgroundImage: `url(${headImg})`,
        }}
      >
        <div className="about-us-text mx-2 p-4 text-[#13324e] space-y-2 font-bold text-xl md:text-3xl md:p-8 md:mx-14">
          <div>About Us</div>
          <div className="flex items-center text-sm md:text-base  text-gray-600">
            <Link to="/" className="hover:text-mainCyan text-[#13324e]">
              Home
            </Link>
            <span className="mx-2 text-[#13324e]">&gt;&gt;</span>
            <span className="text-mainCyan ">About Us</span>
          </div>
        </div>
      </div>
      <div className="mx-10">
        {/* About Section */}
        <AboutSection />

        {/* BigBanner */}
        <FeaturesBanner />

        {/* Profile Card */}
        <BigSectionName title="Meet Our Expert Team" className="mt-10" />
        <div className="teamMember grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w1257:grid-cols-5 gap-2 lg:p-10 justify-center">
          <ProfileCard
            img={"https://docs.material-tailwind.com/img/team-3.jpg"}
            name={"Natalie Paiseley"}
            position={"CEO / Co-Founder"}
          />
          <ProfileCard
            img={"https://live.themewild.com/medion/assets/img/team/01.jpg"}
            name={"Julia Aniston"}
            position={"Product Manager"}
          />
          <ProfileCard
            img={"https://live.themewild.com/medion/assets/img/team/02.jpg"}
            name={"Alexa Smith"}
            position={"Lead Developer"}
          />
          <ProfileCard
            img={"https://live.themewild.com/medion/assets/img/team/03.jpg"}
            name={"John Doe"}
            position={"Designer"}
          />
          <ProfileCard
            img={"https://live.themewild.com/medion/assets/img/team/04.jpg"}
            name={"Sara Adkins"}
            position={"Marketing Manager"}
          />
        </div>
      </div>
    </div>
  );
}
