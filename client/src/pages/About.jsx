import React from "react";
import { Link } from "react-router-dom";
import Aboutfooter from "../components/Aboutfoot";

export default function About() {
  return (
    <div>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="bg-orange-100 p-4 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            About Us
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="pt-4 text-lg md:text-xl  text-center px-4 lg:px-24">
            Welcome to MIT Research Spotlight, your comprehensive platform for
            academic excellence and professional growth. Designed exclusively
            for lecturers and researchers of MIT, our website offers a robust
            suite of tools to enhance your academic portfolio and connect with a
            community of scholars.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="pt-4 text-lg md:text-xl  text-center px-4 lg:px-24">
            At MIT Research Spotlight, our mission is to empower lecturers and
            researchers by providing a centralized hub for academic resources.
            We aim to foster a collaborative environment where knowledge is
            shared, innovations are celebrated, and academic careers are
            advanced.
          </p>
        </div>
        <div className="bg-orange-100 p-4 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            Our Mission
          </h1>
        </div>
        <div className="bg-orange-100 p-4 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            What we offer
          </h1>
        </div>
        <div className="grid grid-cols-1 items-center justify-center">
          <p className="pt-4 text-lg md:text-xl  text-center px-4 lg:px-24">
            This platform connects researchers with conferences, fellowships,
            grants, journals, patents, and publications. Upload details about
            your research activities and gain visibility, funding, and
            collaboration opportunities. Learn about others' work and stay
            updated in your field.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="pt-4 text-lg md:text-xl  text-center px-4 lg:px-24">
            Become a part of MIT Research Spotlight and take your academic
            career to new heights. By joining our platform, you gain access to a
            wealth of resources, a supportive community, and opportunities for
            professional development. Together, we can drive the future of
            academia.
          </p>
        </div>
        <div className="bg-orange-100 p-4 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            Join Us
          </h1>
        </div>
        <div className="bg-orange-100 p-4 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            Contact Us
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="pt-4 text-lg md:text-xl  text-center px-4 lg:px-24">
            For more information or to get started, please contact us at
            <br></br>teamspotlight@gmail.com. <br></br>We look forward to
            supporting your academic journey.
          </p>
        </div>
      </div>
      <Aboutfooter />
    </div>
  );
}
