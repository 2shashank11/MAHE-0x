import React from "react";
import { HomeButtons, Homegrid, HomeDescription } from "../components/Homepage";
import Footer from "../components/Footer";
import Navigation from "../components/newNav";

function Home() {
  return (
    <div class="wrapper">
      <Navigation />
      <div className="flex-grow justify-center pt-4 ">
        <HomeDescription />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
