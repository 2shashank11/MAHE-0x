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
        <div>
          <h1 className="px-8 pt-10 text-5xl font-bold">Forms</h1>
        </div>
        <div className="w-full p-8">
          <h1 className="font-sans font-semibold text-4xl">
            Book / Book Chapter Details
          </h1>
          <p className="my-7 text-lg md:text-xl text-blue-600 font-bold">
            Update your book / book chapter details here
          </p>
          <Divider />

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="text-lg font-semibold mt-4 md:mt-8">Book Name</h1>
              <div className="flex-auto md:ml-40 mt-4">
                <Input
                  label="Enter Book Name"
                  name="bookName"
                  variant="bordered"
                  fullWidth
                  onChange={handleUserInput}
                  value={formData.bookName || ""}
                />
              </div>
            </div>
            <Divider />

            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="flex text-lg font-semibold md:mt-4">ISBN</h1>
              <div className="flex-auto md:ml-40 max-md:mt-4">
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

            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="flex text-lg font-semibold md:mt-4">Type</h1>
              <Select
                name="type"
                label="Select Type"
                variant="bordered"
                fullWidth
                onChange={handleUserInput}
                className="flex-auto md:ml-48 max-md:mt-4"
                value={formData.type || ""}
              >
                {bookTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Divider />

            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="flex text-lg font-semibold md:mt-4">Publication Year</h1>
              <Select
                label="Select Year"
                name="publicationYear"
                variant="bordered"
                fullWidth
                onChange={handleUserInput}
                className="flex-auto md:ml-48 max-md:mt-4"
                value={formData.publicationYear || ""}
              >
                {years.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Divider />

            <div className="flex flex-col align-middle md:flex-row">
              <h1 className="flex text-lg font-semibold md:mt-4">Month</h1>
              <Select
                label="Select Month"
                name="month"
                variant="bordered"
                fullWidth
                onChange={handleUserInput}
                className="flex-auto md:ml-48 max-md:mt-4"
                value={formData.month || ""}
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
                label="Select Year"
                name="year"
                variant="bordered"
                defaultItems={years}
                onSelect={handleUserInput}
                className="flex-auto md:ml-48 max-md:mt-4"
              >
                {(item) => (
                  <AutocompleteItem key={item.value}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
            <Divider />

            <div className="flex justify-end mt-4">
              <Button className="w-1/6 mt-6" color="primary" size="md" type="submit">
                Save
              </Button>
            </div>
            
          </form>
        </div >
      </div >
    </>
  );
}

export default Publication;

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
// import { months, bookTypes } from "./data"; // Import bookTypes
// import axios from "axios";
// import { AuthContext } from "../../contexts/AuthContext";
// import { useLocation, useNavigate } from "react-router-dom";
// import Nav from "../../components/Nav";

// const years = [];
// for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
//   years.push({ value: year.toString(), label: year.toString() });
// }

// function Publication() {
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
//     if (formData.region === "Indian") formData.country = "India";
//     console.log(formData);
//     //toast
//     try {
//       const response = await axios.post(
//         "/api/user/form/publication",
//         { formData },
//         { withCredentials: true }
//       );
//       console.log(response);
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
//       <div>
//         <h1 className="px-12 pt-10 text-6xl font-bold">Forms</h1>
//       </div>
//       <div className="flex flex-col items-center p-4 ">
//         <div className="w-full p-8">
//           <h1 className="pt-4 font-sans font-semibold text-3xl">
//             Publication Details
//           </h1>

//           <form onSubmit={handleFormSubmit} className="space-y-8">
//             <div className="flex justify-between mt-4">
//               <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
//                 Update your patent details here
//               </p>
//               <Button
//                 className="w-56 h-12"
//                 color="primary"
//                 size="lg"
//                 radius="none"
//                 type="submit"
//               >
//                 Save
//               </Button>
//             </div>
//             <Divider />
//             <div className="flex">
//               <div className=" text-lg font-semibold pt-4">
//                 <h1>Book Title </h1>
//               </div>
//               <div className="flex-auto pl-72">
//                 <Input
//                   label="Book Name"
//                   name="bookName"
//                   variant="bordered"
//                   fullWidth
//                   onChange={handleUserInput}
//                   value={formData.bookName || ""}
//                 />
//               </div>
//             </div>
//             <Divider />

//             <div className="flex">
//               <div className=" text-lg font-semibold pt-4">
//                 <h1>ISBN </h1>
//               </div>
//               <div className="flex-auto pl-80">
//                 <Input
//                   label="Enter ISBN"
//                   name="isbn"
//                   variant="bordered"
//                   fullWidth
//                   onChange={handleUserInput}
//                   value={formData.isbn || ""}
//                 />
//               </div>
//             </div>
//             <Divider />
//             <div className="flex">
//               <div className="flex-1 text-lg font-semibold pt-4">
//                 <h1>Book Type </h1>
//               </div>
//               <div className="flex-auto pl-80">
//                 <Select
//                   name="type"
//                   label="Type"
//                   variant="bordered"
//                   fullWidth
//                   onChange={handleUserInput}
//                   value={formData.type || ""}
//                 >
//                   {bookTypes.map((type) => (
//                     <SelectItem key={type.value} value={type.value}>
//                       {type.label}
//                     </SelectItem>
//                   ))}
//                 </Select>
//               </div>
//             </div>
//             <Divider />
//             <div className="flex">
//               <div className="flex-1 text-lg font-semibold pt-4">
//                 <h1>Publication Year </h1>
//               </div>
//               <div className="flex-auto pl-80">
//                 <Select
//                   label="Publication Year"
//                   name="publicationYear"
//                   variant="bordered"
//                   fullWidth
//                   onChange={handleUserInput}
//                   className="mb-4"
//                   value={formData.publicationYear || ""}
//                 >
//                   {years.map((year) => (
//                     <SelectItem key={year.value} value={year.value}>
//                       {year.label}
//                     </SelectItem>
//                   ))}
//                 </Select>
//               </div>
//             </div>

//             <Divider />

//             <div className="flex">
//               <div className="flex-none text-lg font-semibold pt-4">
//                 <h1>Month</h1>
//               </div>
//               <div className="flex-auto pl-80">
//                 <Select
//                   label="Month"
//                   name="month"
//                   variant="bordered"
//                   // placeholder="Month"
//                   fullWidth
//                   onChange={handleUserInput}
//                   value={formData?.month || ""}
//                 >
//                   {months.map((month) => (
//                     <SelectItem key={month.value} value={month.value}>
//                       {month.label}
//                     </SelectItem>
//                   ))}
//                 </Select>
//               </div>
//               <div className="px-12 flex-1 text-lg font-semibold pt-4">
//                 <h1>Year</h1>
//               </div>
//               <div className="flex-1">
//                 <Autocomplete
//                   name="year"
//                   label="Year"
//                   variant="bordered"
//                   // placeholder="Year"
//                   defaultItems={years}
//                   fullWidth
//                   onSelect={handleUserInput}
//                 >
//                   {(item) => (
//                     <AutocompleteItem key={item.value}>
//                       {item.label}
//                     </AutocompleteItem>
//                   )}
//                 </Autocomplete>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>

//       </div>

//     </>
//   );
// }

// export default Publication;
