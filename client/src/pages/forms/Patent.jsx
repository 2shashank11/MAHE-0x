// import {
//   Button,
//   Input,
//   Select,
//   SelectItem,
//   Autocomplete,
//   AutocompleteItem
// } from "@nextui-org/react";
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

// function PatentForm() {
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
//       const response = await axios.post('/api/user/form/patent', { formData }, { withCredentials: true });
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

//   const [selectedRegion, setSelectedRegion] = useState("");

//   const handleRegionChange = (e) => {
//     handleUserInput(e);
//     setSelectedRegion(e.target.value);
//     console.log(e.target.value);
//   };

//   return (
//     <>
//       <Nav />
//       <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
//         <div className="w-full p-8">
//           <h1 className="font-sans font-semibold text-4xl">Patent Details</h1>
//           <form onSubmit={handleFormSubmit} className="space-y-6">
//           <div className="flex justify-end mt-4">
//               <Button className="w-1/6" color="primary" size="md" type="submit">Save</Button>
//             </div>
//             <Select
//               label="Filed"
//               name="filed"
//               placeholder="Yes / No"
//               fullWidth
//               onChange={handleUserInput}
//               className="mb-4"
//               value={formData.filed || ""}
//             >
//               {choice.map((option) => (
//                 <SelectItem key={option.value} value={option.value}>
//                   {option.label}
//                 </SelectItem>
//               ))}
//             </Select>

//             <Select
//               label="Published"
//               name="published"
//               placeholder="Yes / No"
//               fullWidth
//               onChange={handleUserInput}
//               className="mb-4"
//               value={formData.published || ""}
//             >
//               {choice.map((option) => (
//                 <SelectItem key={option.value} value={option.value}>
//                   {option.label}
//                 </SelectItem>
//               ))}
//             </Select>

//             <Select
//               label="Granted"
//               name="granted"
//               placeholder="Yes / No"
//               fullWidth
//               onChange={handleUserInput}
//               className="mb-4"
//               value={formData.granted || ""}
//             >
//               {choice.map((option) => (
//                 <SelectItem key={option.value} value={option.value}>
//                   {option.label}
//                 </SelectItem>
//               ))}
//             </Select>

//             <Select
//               name="region"
//               label="Region"
//               placeholder="Indian / Other Country"
//               fullWidth
//               onChange={handleRegionChange}
//               className="mb-4"
//               value={formData.region || ""}
//             >
//               <SelectItem key="Indian" value="Indian">
//                 Indian
//               </SelectItem>
//               <SelectItem key="Other Country" value="Other Country">
//                 Other Country
//               </SelectItem>
//             </Select>

//             {selectedRegion === "Other Country" && (
//               <Input
//                 label="Country"
//                 name="country"
//                 placeholder="Country"
//                 fullWidth
//                 onChange={handleUserInput}
//                 className="mb-4"
//                 value={formData.country || ""}
//               />
//             )}

//             <Select
//               label="Month"
//               name="month"
//               placeholder="Month"
//               fullWidth
//               onChange={handleUserInput}
//               className="mb-4"
//               value={formData.month || ""}
//             >
//               {months.map((month) => (
//                 <SelectItem key={month.value} value={month.value}>
//                   {month.label}
//                 </SelectItem>
//               ))}
//             </Select>

//             <Autocomplete
//               label="Year"
//               name="year"
//               placeholder="Year"
//               defaultItems={years}
//               fullWidth
//               onSelect={handleUserInput}
//               className="mb-4"
//             >
//               {(item) => (
//                 <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
//               )}
//             </Autocomplete>

            
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PatentForm
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

function PatentForm() {
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
        "/api/user/form/patent",
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

  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (e) => {
    handleUserInput(e);
    setSelectedRegion(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Nav />
      <div>
        <h1 className="px-12 pt-10 text-6xl font-bold">Forms</h1>
      </div>
      <div className="flex flex-col items-center  p-4 ">
        <div className="w-full p-8">
          <h1 className="pt-4 font-sans font-semibold text-3xl">
            Patent Details
          </h1>
          <form onSubmit={handleFormSubmit} className="space-y-8">
            <div className="flex justify-between mt-4">
              <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
                Update your patent details here
              </p>
              <Button
                className="w-56 h-12"
                color="primary"
                radius="none"
                size="lg"
                type="submit"
              >
                Save
              </Button>
            </div>
            <Divider />
            <div className="flex">
              <div className=" text-lg font-semibold pt-4">
                <h1>Patent Title </h1>
              </div>
              <div className="flex-auto pl-80">
                <Input
                  label="Patent Name"
                  name="patenttitle"
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
                <h1>Patent Filled</h1>
              </div>
              <div className="flex-auto pl-80">
                <Select
                  label="Yes/No"
                  name="filed"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.filed || ""}
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
                <h1>Patent Published</h1>
              </div>
              <div className="flex-auto">
                <Select
                  label="Yes/No"
                  name="published"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.published || ""}
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
                <h1>Patent Granted</h1>
              </div>
              <div className="flex-auto">
                <Select
                  label="Yes/No"
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
              <div className=" flex-1 text-lg font-semibold pt-4">
                <h1>Region </h1>
              </div>
              <div className="flex-auto">
                <Select
                  name="Indian/Other Country"
                  label="Region"
                  variant="bordered"
                  fullWidth
                  onChange={handleRegionChange}
                  value={formData.region || ""}
                >
                  <SelectItem key="Indian" value="Indian">
                    Indian
                  </SelectItem>
                  <SelectItem key="Other Country" value="Other Country">
                    Other Country
                  </SelectItem>
                </Select>
              </div>
            </div>

            {selectedRegion === "Other Country" && (
              <Input
                label="Country"
                name="country"
                placeholder="Country"
                fullWidth
                onChange={handleUserInput}
                className="mb-4"
                value={formData.country || ""}
              />
            )}

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

export default PatentForm;
