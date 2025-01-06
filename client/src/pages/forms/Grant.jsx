import {
  Button,
  Input,
  Select,
  SelectItem,
  Divider,
  DatePicker,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { choice } from "./data";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { parseDate } from "@internationalized/date";

function GrantForm() {
  const Location = useLocation()
  const Navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      Navigate('/signin')
    }
  }, [])

  const [formData, setFormData] = useState({});

  const handleUserInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      if (Location.state?.data) {
        const response = await axios.patch(`/api/user/form/grant/${Location.state.data._id}`, { formData }, { withCredentials: true });
        console.log(response);
      }
      else{
        const response = await axios.post("/api/user/form/grant", { formData }, { withCredentials: true });
        console.log(response);
      }
    } catch (error) {
      if (error.response) {
        console.log("Something went wrong");
      }
    }
  };

  function formatDate(period){
    if (period) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const periodDate = new Date(period);

      if (!isNaN(periodDate.getTime())) {
        const formattedPeriod = periodDate.toLocaleString('en-US', options);
        const isoPeriod = periodDate.toISOString().split('T')[0];
        return isoPeriod
      }
    }
  }

  useEffect(() => {
    if (Location.state?.data) {
      setFormData(Location.state?.data);

      console.log(Location.state.data.periodFrom)
      setFormData((prev) => ({
        ...prev,
        periodFrom : parseDate(new Date(Location.state.data?.periodFrom).toISOString().split('T')[0]),
        periodTo : parseDate(new Date(Location.state.data?.periodTo).toISOString().split('T')[0]),
      }))
      
    }
  }, []);

  useEffect(() => {
        console.log("formData", formData)
      }, [formData]);

  return (
    <>
      <Nav />
      <div>
        <div>
          <h1 className="px-8 pt-10 text-5xl font-bold">Forms</h1>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="w-full p-8">
            <h1 className="pt-4 font-sans font-semibold text-3xl">
              Grant Details
            </h1>
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="flex justify-between mt-4 w-full">
                <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
                  Update your grant details here
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
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Grant Name</h1>
                  </div>
                  <div className="flex-auto">
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
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Project Title</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      label="Project Title"
                      name="projectTitle"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      value={formData.projectTitle || ""}
                    />
                  </div>
                </div>
                <Divider />
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Submitted</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      label="Yes / No"
                      name="submitted"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      selectedKeys={new Set([formData?.submitted]) || ""}
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
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Granted</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      label="Yes / No"
                      name="granted"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      selectedKeys={new Set([formData?.granted]) || ""}
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
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Amount</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      label="Amount"
                      name="amount"
                      variant="bordered"
                      type="number"
                      fullWidth
                      onChange={handleUserInput}
                      value={formData.amount || ""}
                    />
                  </div>
                </div>
                <Divider />
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Period</h1>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <DatePicker
                      className="max-w-[284px]"
                      label="From"
                      defaultValue={formData.periodFrom}
                      value={formData.periodFrom}
                      onChange={(e) =>
                        setFormData({ ...formData, periodFrom: e })
                      }
                    />
                    <DatePicker
                      className="max-w-[284px]"
                      label="To"
                      defaultValue={formData.periodTo}
                      value={formData.periodTo}
                      onChange={(e) =>
                        setFormData({ ...formData, periodTo: e })
                      }
                    />
                  </div>
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
// import { choice, months } from "./data";
// import axios from "axios";
// import { AuthContext } from "../../contexts/AuthContext";
// import { useLocation, useNavigate } from "react-router-dom";
// import Nav from "../../components/Nav";

// const years = [];
// for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
//   years.push({ value: year.toString(), label: year.toString() });
// }

// function GrantForm() {
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
//         "/api/user/form/grant",
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
//         <div>
//           <h1 className="px-12 pt-10 text-6xl font-bold">Forms</h1>
//         </div>
//         <div className="flex flex-col items-center p-4">
//           <div className="w-full p-8">
//             <h1 className="pt-4 font-semibold text-3xl">Grant Details</h1>

//             <form onSubmit={handleFormSubmit} className="space-y-8">
//               <div className="flex justify-between mt-4 w-full">
//                 <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
//                   Update your grant details here
//                 </p>
//                 <Button
//                   className="w-56 h-12"
//                   color="primary"
//                   size="lg"
//                   radius="none"
//                   type="submit"
//                 >
//                   Save
//                 </Button>
//               </div>
//               <Divider />

//               <div className="flex">
//                 <div className=" text-lg font-semibold pt-4">
//                   <h1>Grant Name</h1>
//                 </div>
//                 <div className="flex-auto pl-80">
//                   <Input
//                     label="Name of Grant"
//                     name="grantName"
//                     variant="bordered"
//                     fullWidth
//                     onChange={handleUserInput}
//                     value={formData.grantName || ""}
//                   />
//                 </div>
//               </div>
//               <Divider />

//               <div className="flex">
//                 <div className="text-lg font-semibold pt-4">
//                   <h1>Grant Name</h1>
//                 </div>
//                 <div className="flex-auto pl-80">
//                   <Input
//                     label="Grant Name"
//                     name="grantName"
//                     variant="bordered"
//                     fullWidth
//                     onChange={handleUserInput}
//                     value={formData.grantName || ""}
//                   />
//                 </div>
//               </div>
//               <Divider />

//               <div className="flex">
//                 <div className="flex-1 text-lg font-semibold pt-4">
//                   <h1>Submitted</h1>
//                 </div>
//                 <div className="flex-auto">
//                   <Select
//                     label="Yes / No"
//                     name="submitted"
//                     variant="bordered"
//                     fullWidth
//                     onChange={handleUserInput}
//                     value={formData.submitted || ""}
//                   >
//                     {choice.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </Select>
//                 </div>
//               </div>
//               <Divider />
//               <div className="flex">
//                 <div className="flex-1 text-lg font-semibold pt-4">
//                   <h1>Granted</h1>
//                 </div>
//                 <div className="flex-auto">
//                   <Select
//                     label="Yes / No"
//                     name="granted"
//                     variant="bordered"
//                     fullWidth
//                     onChange={handleUserInput}
//                     value={formData.granted || ""}
//                   >
//                     {choice.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </Select>
//                 </div>
//               </div>
//               <Divider />
//               <div className="flex">
//                 <div className=" text-lg font-semibold pt-4">
//                   <h1> Amount</h1>
//                 </div>
//                 <div className="flex-auto pl-80">
//                   <Input
//                     label="Amount"
//                     name="amount"
//                     variant="bordered"
//                     fullWidth
//                     onChange={handleUserInput}
//                     className="mb-4"
//                     value={formData.amount || ""}
//                   />
//                 </div>
//               </div>
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

// export default GrantForm;
