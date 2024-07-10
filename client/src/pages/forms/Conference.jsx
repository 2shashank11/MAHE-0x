import {
  Button,
  Input,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
  Divider
} from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { regionOptions, indexedOptions, months } from "./data";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function Conference() {
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
    console.log(formData);
    try {
      const response = await axios.post(
        "/api/user/form/conference",
        { formData },
        { withCredentials: true }
      );
      console.log(response);
      //toast
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
        <div>
          <h1 className="px-8 pt-10 text-5xl font-bold">Forms</h1>
        </div>
        <div className="w-full p-8">
          <h1 className="font-sans font-semibold text-4xl">
            Conference Details
          </h1>
          <p className="my-7 text-lg md:text-xl text-blue-600 font-bold">
            Update your conference details here
          </p>
          <Divider />

          <form onSubmit={handleFormSubmit} className="space-y-6">

            <div className="flex flex-col align-middle md:flex-row">
              <div className="text-lg font-semibold mt-4 md:mt-8">
                <h1>Conference Name</h1>
              </div>
              <div className="flex-auto md:ml-28 mt-4 ">
                <Input
                  label="Conference Name"
                  name="conferenceName"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData?.conferenceName || ""}
                />
              </div>
            </div>
            <Divider />

            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="flex text-lg font-semibold md:mt-4">Paper Title</h1>
              <div className="flex-auto md:ml-40 max-md:mt-4">
                <Input
                  label="Paper Title"
                  name="paperTitle"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData?.paperTitle || ""}
                />
              </div>
            </div>
            <Divider />

            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="flex text-lg font-semibold md:mt-4">Region</h1>
              <Select
                label="National / International"
                name="region"
                variant="bordered"
                fullWidth
                onChange={handleUserInput}
                className="flex-auto md:ml-48 max-md:mt-4"
                value={formData?.region || ""}
              >
                {regionOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Divider />

            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="flex text-lg font-semibold md:mt-4">Indexed</h1>
              <Select
                label="Yes / No"
                name="indexed"
                variant="bordered"
                fullWidth
                onChange={handleUserInput}
                className="flex-auto md:ml-48 max-md:mt-4"
                value={formData?.indexed || ""}
              >
                {indexedOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Divider />

            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="flex text-lg font-semibold md:mt-4">Month</h1>
              <Select
                label="Month"
                name="month"
                variant="bordered"
                fullWidth
                onChange={handleUserInput}
                className="flex-auto md:ml-48 max-md:mt-4"
                value={formData?.month || ""}
              >
                {months.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Divider />

            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="flex text-lg font-semibold md:mt-4">Year</h1>
              <Autocomplete
                name="Year"
                label="Year"
                variant="bordered"
                defaultItems={years}
                fullWidth
                onSelect={handleUserInput}
                className="flex-auto md:ml-52 max-md:mt-4"
              >
                {(item) => (
                  <AutocompleteItem key={item.value}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>

            <div className="flex justify-end mt-4 w-full">
              <Button className="w-1/6 mt-6" color="primary" size="md" type="submit">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Conference;





// import {
//   Button,
//   Input,
//   Select,
//   SelectItem,
//   Autocomplete,
//   AutocompleteItem,
//   Divider,
// } from "@nextui-org/react";
// import React, { useState, useEffect, useContext } from "react";
// import { regionOptions, indexedOptions, months } from "./data";
// import axios from "axios";
// import { AuthContext } from "../../contexts/AuthContext";
// import { useLocation, useNavigate } from "react-router-dom";
// import Nav from "../../components/Nav";

// const years = [];
// for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
//   years.push({ value: year.toString(), label: year.toString() });
// }

// function Conference() {
//   const Location = useLocation();
//   const Navigate = useNavigate();
//   useEffect(() => {
//     if (!localStorage.getItem("isLoggedIn")) {
//       Navigate("/signin");
//     }
//   }, []);

//   const [formData, setFormData] = useState({});

//   const handleUserInput = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await axios.post(
//         "/api/user/form/conference",
//         { formData },
//         { withCredentials: true }
//       );
//       console.log(response);
//       //toast
//     } catch (error) {
//       if (error.response) {
//         console.log("something went wrong");
//         //toast
//       }
//     }
//   };

//   useEffect(() => {
//     if (Location.state?.data) {
//       setFormData(Location.state.data);
//       console.log(Location.state.data);
//     }
//   }, []);

//   return (
//     <>
//       <Nav />
//       <div className="bg-white">
//         <div>
//           <h1 className="px-12 pt-10 text-6xl font-bold">Forms</h1>
//         </div>
//         <div className="flex flex-col items-center p-4">
//           <div className="w-full p-8">
//             <h1 className="pt-4 font-sans font-semibold text-3xl">
//               Conference Details
//             </h1>

//             <form onSubmit={handleFormSubmit} className="space-y-8">
//               <div className="flex justify-between mt-4 w-full">
//                 <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
//                   Update your conference details here
//                 </p>
//                 <Button
//                   className="w-56 h-12"
//                   color="primary"
//                   radius="none"
//                   size="lg"
//                   type="submit"
//                 >
//                   Save
//                 </Button>
//               </div>
//               <Divider />

//               <div className="flex">
//                 <div className=" text-lg font-semibold pt-4">
//                   <h1>Conference Name</h1>
//                 </div>
//                 <div className="flex-auto pl-80">
//                   <Input
//                     label="Conference Name"
//                     variant="bordered"
//                     name="conferenceName"
//                     fullWidth
//                     onChange={handleUserInput}
//                     value={formData?.conferenceName || ""}
//                   />
//                 </div>
//               </div>

//               <Divider />
//               <div className="flex">
//                 <div className=" text-lg font-semibold pt-4">
//                   <h1>Paper Title</h1>
//                 </div>
//                 <div className="flex-auto pl-96">
//                   <Input
//                     label="Title of Paper"
//                     variant="bordered"
//                     name="conferenceName"
//                     fullWidth
//                     onChange={handleUserInput}
//                     value={formData?.conferenceName || ""}
//                   />
//                 </div>
//               </div>
//               <Divider />
//               <div className="flex">
//                 <div className="flex-1 text-lg font-semibold pt-4">
//                   <h1>Region</h1>
//                 </div>
//                 <div className="flex-1">
//                   <Select
//                     label="Region"
//                     variant="bordered"
//                     name="region"
//                     placeholder="National / International"
//                     fullWidth
//                     onChange={handleUserInput}
//                     value={formData?.region || ""}
//                   >
//                     {regionOptions.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </Select>
//                 </div>
//               </div>
//               <Divider />
//               <div className="flex">
//                 <div className=" flex-1 text-lg font-semibold pt-4">
//                   <h1>Select Country</h1>
//                 </div>
//                 <div className="flex-1">
//                   <Select
//                     label="Country"
//                     variant="bordered"
//                     name="region"
//                     // placeholder="National / International"
//                     fullWidth
//                     onChange={handleUserInput}
//                     value={formData?.region || ""}
//                   >
//                     {regionOptions.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </Select>
//                 </div>
//               </div>

//               {/* <div className="flex">
//               <div className="flex-1 text-lg font-semibold pt-4">
//                 <h1>Region</h1>
//               </div>
//               <div className="flex-auto">
//                 <Select
//                   label="Indexed"
//                   variant="bordered"
//                   name="indexed"
//                   placeholder="Yes / No"
//                   fullWidth
//                   onChange={handleUserInput}
//                   value={formData?.indexed || ""}
//                 >
//                   {indexedOptions.map((option) => (
//                     <SelectItem key={option.value} value={option.value}>
//                       {option.label}
//                     </SelectItem>
//                   ))}
//                 </Select>
//               </div>
//             </div> */}

//               <Divider />
//               <div className="flex">
//                 <div className="flex-none text-lg font-semibold pt-4">
//                   <h1>Month</h1>
//                 </div>
//                 <div className="flex-auto pl-80">
//                   <Select
//                     label="Month"
//                     name="month"
//                     variant="bordered"
//                     // placeholder="Month"
//                     fullWidth
//                     onChange={handleUserInput}
//                     value={formData?.month || ""}
//                   >
//                     {months.map((month) => (
//                       <SelectItem key={month.value} value={month.value}>
//                         {month.label}
//                       </SelectItem>
//                     ))}
//                   </Select>
//                 </div>
//                 <div className="px-12 flex-1 text-lg font-semibold pt-4">
//                   <h1>Year</h1>
//                 </div>
//                 <div className="flex-1">
//                   <Autocomplete
//                     name="year"
//                     label="Year"
//                     variant="bordered"
//                     // placeholder="Year"
//                     defaultItems={years}
//                     fullWidth
//                     onSelect={handleUserInput}
//                   >
//                     {(item) => (
//                       <AutocompleteItem key={item.value}>
//                         {item.label}
//                       </AutocompleteItem>
//                     )}
//                   </Autocomplete>
//                 </div>
//               </div>

//             </form>
//           </div>
//         </div>

//       </div>

//     </>
//   );
// }

// export default Conference;
