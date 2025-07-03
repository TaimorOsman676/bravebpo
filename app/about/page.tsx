'use client'
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";



const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At Brave Bepo, we’re on a mission to build innovative, user-centric digital experiences. Learn more about our story, vision, and the people behind the platform."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
