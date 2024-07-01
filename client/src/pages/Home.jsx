import React from "react";
import { HomeButtons, Homegrid, Titlebox } from "../components/homepage";

function Home() {
  return (
    <div>
      <Titlebox />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Homegrid />
        <HomeButtons />
      </div>
    </div>
  );
}

export { Home };
