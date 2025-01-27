import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { AuthContext } from "../contexts/AuthContext";
import Stats from "./home_stats";
import "../index.css";

export function HomeDescription({ onTabchange }) {
  const backgroundImage = "/herobg.png";
  const { isLoggedIn } = useContext(AuthContext);
  const [activeTab, setActiveTab] = React.useState("grants");
  const handleTabChange = (tab) => {
    onTabchange(tab);
  };

  return (
    <div className="text-center Background-image bg-gray-100  rounded-sm br px-8 md:px-8 lg:px-24 mx-16 pb-2">
      <div className="justify-items-center pt-32 ">
        <p className="text-xs py-2 px-6 bg-pink-50 rounded-md">
          Used by more than 1500+ faculties
        </p>
      </div>

      <div className="pt-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-normal  ">
          Bringing <i>organization</i> to the
          <br />
          Research at MIT.
        </h1>
        <p className="text-gray-600 pt-8 text-xs sm:text-xl md:text-xs">
          We help you save hours of time and effort in finding your research
          documents, build an
          <br />
          academic portfolio, and showcase the prowess of CSE Dept.
        </p>

        {/* <div className="flex justify-center pt-12"> */}
        {!isLoggedIn ? (
          <>
            <div className="justify-around mt-8 space-x-10">
              <Link to="/signup">
                <Button
                  className="bg-black text-white font-serif text-medium px-10 py-5 rounded-sm shadow-md shadow-green-100"
                  name="signupButton"
                  size="md"
                >
                  Sign up
                </Button>
              </Link>

              <Link to="/all-achievements">
                <Button
                  className="bg-blue-200 text-black font-serif text-medium px-10 py-4 rounded-sm shadow-md shadow-blue-100"
                  name="dashboard"
                  size="md"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </>
        ) : null}
      </div>
      {/* </div> */}

      <div className="pt-28">
        <Stats
          id="stats-section"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
}
