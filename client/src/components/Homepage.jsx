import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import details from "../images/details.svg";
import { AuthContext } from "../contexts/AuthContext";
import Stats from "./home_stats";

export function HomeDescription({ onTabchange }) {
  const { isLoggedIn } = useContext(AuthContext);
  const [activeTab, setActiveTab] = React.useState("grants");
  const handleTabChange = (tab) => {
    onTabchange(tab);
  };

  return (
    <div className="text-center  bg-gray-100  rounded-lg br px-4 md:px-8 lg:px-24 pb-2">
      <div className="justify-items-center pt-40 ">
        <p className="text-xs py-2 px-6 bg-gray-200 rounded-md">
          Used by more than 1500+ faculties
        </p>
      </div>

      <div className="pt-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-normal ">
          Bringing<i>organization</i>to the
          <br />
          Research at MIT.
        </h1>
        <p className="text-gray-600 pt-8 text-sm sm:text-xl md:text-base">
          We help you save hours of time and effort in finding your research
          documents, build an
          <br />
          academic portfolio, and showcase the prowess of CSE Dept.
        </p>

        <div className="flex justify-center gap-12 pt-12">
          {!isLoggedIn ? (
            <>
              <div className="flex justify-around mt-8">
                <Link to="/signup">
                  <Button
                    className="bg-gradient-to-r from-stone-700 to-black text-white font-serif text-medium px-10 py-5 rounded-md shadow-lg shadow-gray-700/40"
                    name="signupButton"
                    size="md"
                  >
                    Sign up
                  </Button>
                </Link>
                <Link to="/all-achievements">
                  <Button
                    className="bg-gradient-to-r from-gray-300 to-gray-400 text-white font-serif text-medium px-10 py-5 rounded-md shadow-lg shadow-gray-600/40"
                    name="dashboard"
                    size="md"
                  >
                    Dashboard
                  </Button>
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </div>

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
