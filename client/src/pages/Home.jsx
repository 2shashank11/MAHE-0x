import React from "react";
import { HomeButtons, Homegrid, HomeDescription } from "../components/Homepage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Stats from "../components/home_stats";
import Navigation from "../components/newNav";
import Features from "../components/features";
import FutureScope from "../components/future_scope";

function Home() {
  const [activeTab, setActiveTab] = React.useState("grants");
  return (
    <div class="wrapper">
      <Navigation />
      <div className="flex-grow justify-center ">
        <HomeDescription onTabchange={setActiveTab} />
      </div>
      <div className="flex-grow justify-center">
        {/* <Homegrid /> */}
        {/* <HomeButtons /> */}
        <Features />
        <FutureScope />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
