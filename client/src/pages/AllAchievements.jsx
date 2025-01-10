// import React, { useState, useEffect } from "react";
// import Filters from "../components/Filters";
// import Nav from "../components/Nav";
// import AllAchievementsTable from "../components/AchievementsTable";
// import { Spinner } from "@nextui-org/react";
// import axios from "axios";
// import { toast } from "react-hot-toast";


// export default function AllAchievements() {

//   const [selectedCategory, setSelectedCategory] = useState("None");

//   function handleCategoryChange(e) {
//     setSelectedCategory(e.target.value);
//   }

//   // const [achievements, setAchievements] = useState({})
//   // const [conferences, setConferences] = useState([])
//   // const [fellowships, setFellowships] = useState([])
//   // const [grants, setGrants] = useState([])
//   // const [journals, setJournals] = useState([])
//   // const [patents, setPatents] = useState([])
//   // const [book_bookChapter, setBook_BookChapter] = useState([])

//   // const [mainData, setMainData] = useState([])

//   // function filterData(data) {
//   //   {
//   //     data.forEach(i => {
//   //       i.name = i?.userId?.name?.firstName + " " + i.userId?.name.lastName
//   //       i.maheId = i?.userId?.maheId
//   //       i.month_year = i?.period?.getMonth() + "-" + i?.period?.getFullYear()
//   //     })
//   //   }
//   //   console.log(data)
//   //   return data;
//   // }

//   // async function getAllAchievements() {
//   //   const response = await axios.get('/api/all-achievements')
//   //   setAchievements(response.data.achievements)
//   //   console.log(response.data)
//   // }

//   // useEffect(() => {
//   //   if (achievements.conference) setConferences(filterData(achievements.conference));
//   //   if (achievements.fellowship) setFellowships(filterData(achievements.fellowship));
//   //   if (achievements.grant) setGrants(filterData(achievements.grant));
//   //   if (achievements.journal) setJournals(filterData(achievements.journal));
//   //   if (achievements.patent) setPatents(filterData(achievements.patent));
//   //   if (achievements.book_bookChapter) setBook_BookChapter(filterData(achievements.book_bookChapter));
//   // }, [achievements]);

//   // function handleTableValues(selectedCategory) {
//   //   switch (selectedCategory) {
//   //     case "Conference":
//   //       setMainData(conferences)
//   //       break;
//   //     case "Fellowship":
//   //       setMainData(fellowships)
//   //       break;
//   //     case "Grant":
//   //       setMainData(grants)
//   //       break;
//   //     case "Journal":
//   //       setMainData(journals)
//   //       break;
//   //     case "Patent":
//   //       setMainData(patents)
//   //       break;
//   //     case "Book_BookChapter":
//   //       setMainData(book_bookChapter)
//   //       break;
//   //     case "None":
//   //       setMainData([])
//   //       break;
//   //     default:
//   //       break;
//   //   }
//   // }

//   // useEffect(() => {
//   //   handleTableValues(selectedCategory)
//   // }, [selectedCategory])

//   // useEffect(() => {
//   //   const getData = getAllAchievements()
//   //   toast.promise(getData, {
//   //     loading: 'Loading...',
//   //     success: 'Success',
//   //     error: 'Could not fetch data'
//   //   })

//   // }, [])

//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   if (achievements) {
//   //     setLoading(false);
//   //   }
//   // }, [achievements])

//   // if (loading) {
//   //   return <>
//   //     <div className="flex justify-center items-center h-screen">
//   //       <Spinner size="lg" />
//   //     </div>
//   //   </>
//   // }

//   const [filter, setFilter] = useState({
//     fromDate: "",
//     toDate: "",
//     category: "None",
//   })

//   function handleFilterInput(e) {
//     setFilter({
//       ...filter,
//       [e.target.name]: e.target.value
//     })
//   }


//   return (
//     <>
//       <Nav />
//       <div className="h-screen">
//         <Filters filter={filter} setFilter={setFilter} handleFilterInput={handleFilterInput} />
//         {/* handleCategoryChange={handleCategoryChange} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} /> */}
//         <AllAchievementsTable />
//         {/* selectedCategory={selectedCategory} mainData={mainData} filter={filter} tableControls={false} /> */}
//       </div>

//     </>
//   );
// }


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

      const response = await axios.get("/api/all-achievements", { params: {category, fromDate, toDate}, withCredentials: true })
      console.log(response.data)

      const data = response.data.result.map((item) => {
        const userName = item.userId.fullName
        const maheID = item.userId.maheId

        const {userId, ...rest} = item
        const updatedItem = {
          ...rest,
          userName: userName,
          maheID: maheID
        };
        return updatedItem;
      })

      setAchievements(data)
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

