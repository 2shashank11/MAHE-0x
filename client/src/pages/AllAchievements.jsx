import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import Nav from "../components/Nav";
import AllAchievementsTable from "../components/AchievementsTable";

export default function AllAchievements() {
  const [selectedCategory, setSelectedCategory] = useState("default");


  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  return (
    <>
      <Nav />
      <Filters handleCategoryChange={handleCategoryChange} />
      <AllAchievementsTable selectedCategory={selectedCategory} />
    </>
  );
}
