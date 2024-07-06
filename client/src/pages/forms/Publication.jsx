// import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
// import React, { useState, useEffect, useContext } from "react";
// import { months, bookTypes } from "./data"; // Import bookTypes
// import axios from "axios";
// import { AuthContext } from '../../contexts/AuthContext'
// import { useLocation, useNavigate } from 'react-router-dom'
// import Nav from "../../components/Nav";

// const years = [];
// for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
//   years.push({ value: year.toString(), label: year.toString() });
// }

// function Publication() {
//   const Location =useLocation()
//   const Navigate = useNavigate()
//   useEffect(() => {
//     if (!localStorage.getItem('isLoggedIn')) {
//       Navigate('/signin')
//     }
//   }, [])

//   const [formData, setFormData] = useState({});

 

//   const handleUserInput = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.region === "Indian") formData.country = "India"
//     console.log(formData);
//     //toast
//     try {
//       const response = await axios.post('/api/user/form/publication', { formData }, { withCredentials: true });
//       console.log(response)
//     } catch (error) {
//       if (error.response) {
//         console.log("something went wrong")
//         //toast
//       }
//     }
//   }
//   useEffect(() => {
//     if (Location.state?.data) {
//       setFormData(Location.state.data)
//       console.log(Location.state.data)
//     }
//   }, [])

//   return (
//     <>
//     <Nav />
//     <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
//       <div className="w-full p-8">
//         <h1 className="font-sans font-semibold text-4xl">Publication Details</h1>
        
//         <form onSubmit={handleFormSubmit} className="space-y-6">
//         <div className="flex justify-end mt-4">
//             <Button className="w-1/6" color="primary" size="md" type="submit">Save</Button>
//           </div>
//           <Input
//             label="Book Name"
//             name="bookName"
//             placeholder="Book Name"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.bookName || ""}
//           />
//           <Input
//             label="ISBN"
//             name="isbn"
//             placeholder="Enter ISBN"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.isbn || ""}
//           />
//           <Select
//             name="type"
//             label="Type"
//             placeholder="Select Type"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.type || ""}
//           >
//             {bookTypes.map(type => (
//               <SelectItem key={type.value} value={type.value}>
//                 {type.label}
//               </SelectItem>
//             ))}
//           </Select>
//           <Select
//             label="Publication Year"
//             name="publicationYear"
//             placeholder="Select Year"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.publicationYear || ""}
//           >
//             {years.map(year => (
//               <SelectItem key={year.value} value={year.value}>
//                 {year.label}
//               </SelectItem>
//             ))}
//           </Select>
//           <Select
//             label="Month"
//             name="month"
//             placeholder="Select Month"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.month || ""}
//           >
//             {months.map(month => (
//               <SelectItem key={month.value} value={month.value}>
//                 {month.label}
//               </SelectItem>
//             ))}
//           </Select>
//           <Autocomplete
//             label="Year"
//             name="year"
//             placeholder="Select Year"
//             defaultItems={years}
//             onSelect={handleUserInput}
//             className="mb-4"
//           >
//             {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
//           </Autocomplete>
          
//         </form>
//       </div>
//     </div>
//   </>
//   );
// }

// export default Publication;
import {
  Button,
  Input,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
  Divider,
} from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { months, bookTypes } from "./data"; // Import bookTypes
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function Publication() {
  const Location = useLocation();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      Navigate("/signin");
    }
  }, []);

  const [formData, setFormData] = useState({});

  const handleUserInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.region === "Indian") formData.country = "India";
    console.log(formData);
    //toast
    try {
      const response = await axios.post(
        "/api/user/form/publication",
        { formData },
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log("something went wrong");
        //toast
      }
    }
  };
  useEffect(() => {
    if (Location.state?.data) {
      setFormData(Location.state.data);
      console.log(Location.state.data);
    }
  }, []);

  return (
    <>
      <Nav />
      <div>
        <h1 className="px-12 pt-10 text-6xl font-bold">Forms</h1>
      </div>
      <div className="flex flex-col items-center p-4 ">
        <div className="w-full p-8">
          <h1 className="pt-4 font-sans font-semibold text-3xl">
            Publication Details
          </h1>

          <form onSubmit={handleFormSubmit} className="space-y-8">
            <div className="flex justify-between mt-4">
              <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
                Update your patent details here
              </p>
              <Button
                className="w-56 h-12"
                color="primary"
                size="lg"
                radius="none"
                type="submit"
              >
                Save
              </Button>
            </div>
            <Divider />
            <div className="flex">
              <div className=" text-lg font-semibold pt-4">
                <h1>Book Title </h1>
              </div>
              <div className="flex-auto pl-72">
                <Input
                  label="Book Name"
                  name="bookName"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.bookName || ""}
                />
              </div>
            </div>
            <Divider />

            <div className="flex">
              <div className=" text-lg font-semibold pt-4">
                <h1>ISBN </h1>
              </div>
              <div className="flex-auto pl-80">
                <Input
                  label="Enter ISBN"
                  name="isbn"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.isbn || ""}
                />
              </div>
            </div>
            <Divider />
            <div className="flex">
              <div className="flex-1 text-lg font-semibold pt-4">
                <h1>Book Type </h1>
              </div>
              <div className="flex-auto pl-80">
                <Select
                  name="type"
                  label="Type"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.type || ""}
                >
                  {bookTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <Divider />
            <div className="flex">
              <div className="flex-1 text-lg font-semibold pt-4">
                <h1>Publication Year </h1>
              </div>
              <div className="flex-auto pl-80">
                <Select
                  label="Publication Year"
                  name="publicationYear"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  className="mb-4"
                  value={formData.publicationYear || ""}
                >
                  {years.map((year) => (
                    <SelectItem key={year.value} value={year.value}>
                      {year.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <Divider />

            <div className="flex">
              <div className="flex-none text-lg font-semibold pt-4">
                <h1>Month</h1>
              </div>
              <div className="flex-auto pl-80">
                <Select
                  label="Month"
                  name="month"
                  variant="bordered"
                  // placeholder="Month"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData?.month || ""}
                >
                  {months.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="px-12 flex-1 text-lg font-semibold pt-4">
                <h1>Year</h1>
              </div>
              <div className="flex-1">
                <Autocomplete
                  name="year"
                  label="Year"
                  variant="bordered"
                  // placeholder="Year"
                  defaultItems={years}
                  fullWidth
                  onSelect={handleUserInput}
                >
                  {(item) => (
                    <AutocompleteItem key={item.value}>
                      {item.label}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Publication;
