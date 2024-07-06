// import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
// import React, { useState, useEffect, useContext } from "react";
// import { author, choice, months, quartiles } from "./data";
// import axios from "axios";
// import { AuthContext } from '../../contexts/AuthContext'
// import { useLocation, useNavigate } from 'react-router-dom'
// import Nav from "../../components/Nav";

// const years = [];
// for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
//   years.push({ value: year.toString(), label: year.toString() });
// }

// function JournalForm() {
//   const Location = useLocation()
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
//       const response = await axios.post('/api/user/form/journal', { formData }, { withCredentials: true });
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
//         <h1 className="font-sans font-semibold text-4xl">Journal Details</h1>
//         <form onSubmit={handleFormSubmit} className="space-y-6">
//         <div className="flex justify-end mt-4 w-full">
//             <Button className="w-1/6" color="primary" size="md" type="submit">Save</Button>
//           </div>
//           <Input
//             label="Title"
//             name="title"
//             placeholder="Title"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.title || ""}
//           />
//           <Input
//             label="Journal Name"
//             name="journalName"
//             placeholder="Journal Name"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.journalName || ""}
//           />

//           <Select
//             label="Quartile"
//             name="quartile"
//             placeholder="Select Quartile"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.quartile|| ""}
//           >
//             {quartiles.map((option) => (
//               <SelectItem key={option.value} value={option.value}>
//                 {option.label}
//               </SelectItem>
//             ))}
//           </Select>

//           <Select
//             label="WOS"
//             name="wos"
//             placeholder="Yes / No"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.wos || ""}
//           >
//             {choice.map((option) => (
//               <SelectItem key={option.value} value={option.value}>
//                 {option.label}
//               </SelectItem>
//             ))}
//           </Select>

//           <Select
//             label="Authorship"
//             name="authorship"
//             placeholder="Author / Co-Author"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.authorship || ""}
//           >
//             {author.map((option) => (
//               <SelectItem key={option.value} value={option.value}>
//                 {option.label}
//               </SelectItem>
//             ))}
//           </Select>

//           <Select
//             label="Month"
//             name="month"
//             placeholder="Month"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.month || ""}
//           >
//             {months.map((month) => (
//               <SelectItem key={month.value} value={month.value}>
//                 {month.label}
//               </SelectItem>
//             ))}
//           </Select>

//           <Autocomplete
//             name="year"
//             label="Year"
//             placeholder="Year"
//             defaultItems={years}
//             fullWidth
//             onSelect={handleUserInput}
//             className="mb-4"
//           >
//             {(item) => (
//               <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
//             )}
//           </Autocomplete>

          
//         </form>
//       </div>
//     </div>
//   </>
//   );
// }

// export default JournalForm;
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
import { author, choice, months, quartiles } from "./data";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function JournalForm() {
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
        "/api/user/form/journal",
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
      <div className="flex flex-col items-center  p-4">
        <div className="w-full p-8">
          <h1 className="pt-4 font-sans font-semibold text-3xl">
            Journal Details
          </h1>
          <form onSubmit={handleFormSubmit} className="space-y-8">
            <div className="flex justify-between mt-4 w-full">
              <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
                Update your journal details here
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
                <h1>Journal Title </h1>
              </div>
              <div className="flex-auto pl-80">
                <Input
                  label="Title of Journal"
                  name="title"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.title || ""}
                />
              </div>
            </div>
            <Divider />
            <div className="flex">
              <div className=" text-lg font-semibold pt-4">
                <h1>Journal Name</h1>
              </div>
              <div className="flex-auto pl-80">
                <Input
                  label="Journal Name"
                  name="journalName"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.journalName || ""}
                />
              </div>
            </div>
            <Divider />
            <div className="flex">
              <div className="flex-1 text-lg font-semibold pt-4">
                <h1>Quartile</h1>
              </div>
              <div className="flex-auto">
                <Select
                  label="Select Quartile"
                  name="quartile"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.quartile || ""}
                >
                  {quartiles.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <Divider />
            <div className="flex">
              <div className="flex-1 text-lg font-semibold pt-4">
                <h1>WOS</h1>
              </div>
              <div className="flex-auto">
                <Select
                  label="Yes / No"
                  name="wos"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.wos || ""}
                >
                  {choice.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <Divider />
            <div className="flex">
              <div className="flex-1 text-lg font-semibold pt-4">
                <h1>Authorship</h1>
              </div>
              <div className="flex-auto">
                <Select
                  label="Author / Co-Author"
                  name="authorship"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.authorship || ""}
                >
                  {author.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
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

export default JournalForm;
