import React from "react";
import { HomeButtons, Homegrid, HomeDescription } from "../components/Homepage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <div className="flex align-middle justify-center ">
        <HomeDescription />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Homegrid />
        <HomeButtons />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
