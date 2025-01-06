import React, { useState, useEffect, useContext } from "react";
import Filters from "../components/Filters";
import Nav from "../components/Nav";
import AllAchievementsTable from "../components/AchievementsTable";
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { Spinner } from "@nextui-org/react";


export default function UserAchievements() {

  const [filter, setFilter] = useState({
    fromDate: null,
    toDate: null,
    category: new Set([]),
  })

  const [achievements, setAchievements] = useState([])

  async function applyFilter(e) {
    e.preventDefault();
    console.log(filter)
    try {
      const category = filter.category.values().next().value
      var fromDate, toDate
      
      if(!filter.fromDate) fromDate = new Date(0)
        else fromDate = new Date(filter.fromDate)
      if(!filter.toDate) toDate = new Date(8640000000000000)
        else toDate = new Date(filter.toDate)

      const response = await axios.get("/api/user/user-achievements", { params: {category, fromDate, toDate}, withCredentials: true })
      // console.log(response.data)
      setAchievements(response.data.result)
    } 
    catch (error) {
      console.error("Error applying filter", error)
    }
  }


  return (
    <>
      <Nav />
      <div className="h-screen">
        <Filters filter={filter} setFilter={setFilter} applyFilter={applyFilter} />
        <AllAchievementsTable filter={filter} achievements={achievements} setAchievements={setAchievements} controls={false}  />
        {/* selectedCategory={selectedCategory} mainData={mainData}  tableControls={false} /> */}
      </div>

    </>
  );
}
