import React, { useState, useEffect, useContext } from "react";
import Filters from "../components/Filters";
import Nav from "../components/Nav";
import AllAchievementsTable from "../components/AchievementsTable";
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { Spinner } from "@nextui-org/react";
import * as XLSX from 'xlsx';
import { toast } from 'react-hot-toast';


export default function UserAchievements() {

  const [filter, setFilter] = useState({
    fromDate: null,
    toDate: null,
    category: new Set([]),
  })

  const [achievements, setAchievements] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function applyFilter(e) {
    e.preventDefault();
    console.log(filter)
    try {
      const category = filter.category.values().next().value
      var fromDate, toDate

      if (!filter.fromDate) fromDate = new Date(0)
      else fromDate = new Date(filter.fromDate)
      if (!filter.toDate) toDate = new Date(8640000000000000)
      else toDate = new Date(filter.toDate)

      setIsLoading(true)
      const response = await axios.get("/api/all-achievements", { params: { category, fromDate, toDate }, withCredentials: true })
      console.log(response.data)

      const data = response.data.result.map((item) => {
        const userName = item.userId.fullName
        const maheID = item.userId.maheId

        const { userId, ...rest } = item
        const updatedItem = {
          ...rest,
          userName: userName,
          maheID: maheID
        };
        return updatedItem;
      })

      setAchievements(data)
      setIsLoading(false)
    }
    catch (error) {
      console.error("Error applying filter", error)
    }
  }

  function downloadData() {
    const worksheet = XLSX.utils.json_to_sheet(achievements);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const name = filter.category.values().next().value
    XLSX.writeFile(workbook, `${name}.xlsx`);
    toast.success("Downloading...",
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 2000,
      }
    );
  }


  return (
    <>
      <Nav />
      <div className="h-screen">
        <Filters filter={filter} setFilter={setFilter} applyFilter={applyFilter} downloadData={downloadData} achievements={achievements} setAchievements={setAchievements} />

        {isLoading ?
          <div className="flex justify-center items-center h-96 w-full">
          <Spinner size="large" className="" />
        </div>
          : <AllAchievementsTable filter={filter} achievements={achievements} setAchievements={setAchievements} controls={false} />
        }
      </div>

    </>
  );
}

