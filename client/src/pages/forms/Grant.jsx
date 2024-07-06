// import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
// import React, { useState, useEffect, useContext } from "react";
// import { choice, months } from "./data";
// import axios from "axios";
// import { AuthContext } from '../../contexts/AuthContext'
// import { useLocation, useNavigate } from 'react-router-dom'
// import Nav from "../../components/Nav";

// const years = [];
// for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
//   years.push({ value: year.toString(), label: year.toString() });
// }

// function GrantForm() {
//   const Location=useLocation()
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
//       const response = await axios.post('/api/user/form/grant', { formData }, { withCredentials: true });
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
//         <h1 className="font-sans font-semibold text-4xl">Grant Details</h1>

//         <form onSubmit={handleFormSubmit} className="space-y-6">
//         <div className="flex justify-end mt-4 w-full">
//             <Button className="w-1/6" color="primary" size="md" type="submit">Save</Button>
//           </div>
//           <Input
//             label="Grant Name"
//             name="grantName"
//             placeholder="Grant Name"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.grantName || ""}
//           />

//           <Select
//             label="Submitted"
//             name="submitted"
//             placeholder="Yes / No"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.submitted || ""}
//           >
//             {choice.map((option) => (
//               <SelectItem key={option.value} value={option.value}>
//                 {option.label}
//               </SelectItem>
//             ))}
//           </Select>

//           <Select
//             label="Granted"
//             name="granted"
//             placeholder="Yes / No"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.granted || ""}
//           >
//             {choice.map((option) => (
//               <SelectItem key={option.value} value={option.value}>
//                 {option.label}
//               </SelectItem>
//             ))}
//           </Select>

//           <Input
//             label="Amount"
//             name="amount"
//             placeholder="Amount"
//             fullWidth
//             onChange={handleUserInput}
//             className="mb-4"
//             value={formData.amount || ""}
//           />

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

// export default GrantForm;
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
import { choice, months } from "./data";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function GrantForm() {
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
        "/api/user/form/grant",
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
      <div className="bg-white">
        <div>
          <h1 className="px-12 pt-10 text-6xl font-bold">Forms</h1>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="w-full p-8">
            <h1 className="pt-4 font-semibold text-3xl">Grant Details</h1>

            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="flex justify-between mt-4 w-full">
                <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
                  Update your grant details here
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
                  <h1>Grant Name</h1>
                </div>
                <div className="flex-auto pl-80">
                  <Input
                    label="Name of Grant"
                    name="grantName"
                    variant="bordered"
                    fullWidth
                    onChange={handleUserInput}
                    value={formData.grantName || ""}
                  />
                </div>
              </div>
              <Divider />

              <div className="flex">
                <div className="text-lg font-semibold pt-4">
                  <h1>Grant Name</h1>
                </div>
                <div className="flex-auto pl-80">
                  <Input
                    label="Grant Name"
                    name="grantName"
                    variant="bordered"
                    fullWidth
                    onChange={handleUserInput}
                    value={formData.grantName || ""}
                  />
                </div>
              </div>
              <Divider />

              <div className="flex">
                <div className="flex-1 text-lg font-semibold pt-4">
                  <h1>Submitted</h1>
                </div>
                <div className="flex-auto">
                  <Select
                    label="Yes / No"
                    name="submitted"
                    variant="bordered"
                    fullWidth
                    onChange={handleUserInput}
                    value={formData.submitted || ""}
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
                  <h1>Granted</h1>
                </div>
                <div className="flex-auto">
                  <Select
                    label="Yes / No"
                    name="granted"
                    variant="bordered"
                    fullWidth
                    onChange={handleUserInput}
                    value={formData.granted || ""}
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
                <div className=" text-lg font-semibold pt-4">
                  <h1> Amount</h1>
                </div>
                <div className="flex-auto pl-80">
                  <Input
                    label="Amount"
                    name="amount"
                    variant="bordered"
                    fullWidth
                    onChange={handleUserInput}
                    className="mb-4"
                    value={formData.amount || ""}
                  />
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

      </div>

    </>
  );
}

export default GrantForm;
