import React, { useState, useEffect, useContext } from "react";
import Filters from "../components/Filters";
import Nav from "../components/Nav";
import AllAchievementsTable from "../components/AchievementsTable";
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { Spinner } from "@nextui-org/react";


export default function UserAchievements() {

  const Navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      Navigate('/signin')
    }
  }, [])


  const [selectedCategory, setSelectedCategory] = useState("None");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const [achievements, setAchievements] = useState({})
  const [conferences, setConferences] = useState([])
  const [fellowships, setFellowships] = useState([])
  const [grants, setGrants] = useState([])
  const [journals, setJournals] = useState([])
  const [patents, setPatents] = useState([])
  const [publications, setPublications] = useState([])

  const [mainData, setMainData] = useState([])

  function filterData(data) {
    {
      data.forEach(i => {
        i.name = i?.userId?.name?.firstName + " " + i.userId.name.lastName
        i.maheId = i?.userId?.maheId
        i.month_year = i?.period.month + "-" + i?.period.year
      })
    }
    console.log(data)
    return data;
  }

  async function getAllAchievements() {
    const response = await axios.get('/api/user/my-achievements')
    setAchievements(response.data.achievements)
    console.log(response.data)
  }

  useEffect(() => {
    if (achievements.conference) setConferences(filterData(achievements.conference));
    if (achievements.fellowship) setFellowships(filterData(achievements.fellowship));
    if (achievements.grant) setGrants(filterData(achievements.grant));
    if (achievements.journal) setJournals(filterData(achievements.journal));
    if (achievements.patent) setPatents(filterData(achievements.patent));
    if (achievements.publication) setPublications(filterData(achievements.publication));
  }, [achievements]);

  function handleTableValues(selectedCategory) {
    switch (selectedCategory) {
      case "Conference":
        setMainData(conferences)
        break;
      case "Fellowship":
        setMainData(fellowships)
        break;
      case "Grant":
        setMainData(grants)
        break;
      case "Journal":
        setMainData(journals)
        break;
      case "Patent":
        setMainData(patents)
        break;
      case "Publication":
        setMainData(publications)
        break;
      case "None":
        setMainData([])
      default:
        break;
    }
  }

  useEffect(() => {
    getAllAchievements()
  }, [])

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (achievements) {
      setLoading(false);
    }
  }, [achievements])

  useEffect(() => {
    handleTableValues(selectedCategory)
  }, [selectedCategory])


  const [filter, setFilter] = useState({
    fromMonth: "",
    fromYear: "",
    toMonth: "",
    toYear: "",
  })

  function handleFilterInput(e) {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    })
  }

  if (loading) {
    return (<>
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
      </div>
    </>)
  }

  return (

    <>
      <Nav />
      <div className="h-screen">

        <Filters handleCategoryChange={handleCategoryChange} handleFilterInput={handleFilterInput} setFilter={setFilter} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        <AllAchievementsTable selectedCategory={selectedCategory} mainData={mainData} filter={filter} controls={true} />
      </div>
    </>

  );
}
