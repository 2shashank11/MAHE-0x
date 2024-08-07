import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import Nav from "../components/Nav";
import AllAchievementsTable from "../components/AchievementsTable";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function AllAchievements() {

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
        i.name = i?.userId?.name?.firstName + " " + i.userId?.name.lastName
        i.maheId = i?.userId?.maheId
        i.month_year = i?.period.month + "-" + i?.period.year
      })
    }
    console.log(data)
    return data;
  }

  async function getAllAchievements() {
    const response = await axios.get('/api/all-achievements')
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
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    handleTableValues(selectedCategory)
  }, [selectedCategory])

  useEffect(() => {
    const getData = getAllAchievements()
    toast.promise(getData, {
      loading: 'Loading...',
      success: 'Success',
      error: 'Could not fetch data'
    })

  }, [])

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (achievements) {
      setLoading(false);
    }
  }, [achievements])

  if (loading) {
    return <>
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
      </div>
    </>
  }


  return (
    <>
      <Nav />
      <div className="h-screen">
        <Filters handleCategoryChange={handleCategoryChange} handleFilterInput={handleFilterInput} setFilter={setFilter} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        <AllAchievementsTable selectedCategory={selectedCategory} mainData={mainData} filter={filter} tableControls={false} />
      </div>

    </>
  );
}
