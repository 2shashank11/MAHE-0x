import {
  Button,
  Input,
  Select,
  SelectItem,
  Divider,
  DatePicker,
  Spinner
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { choice } from "./data";
import { parseDate } from "@internationalized/date";
import toast from "react-hot-toast";


function FellowshipForm() {
  const Location = useLocation();
  const Navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      Navigate("/signin");
    }
  }, [])

  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.region === "Indian") formData.country = "India"
    console.log(formData);
    setIsLoading(true);
    try {
      if (Location.state?.data) {
        const response = await axios.patch(`/api/user/form/fellowship/${Location.state.data._id}`, { formData }, { withCredentials: true });
        console.log(response);
      }
      else{
        const response = await axios.post("/api/user/form/fellowship", { formData }, { withCredentials: true });
        console.log(response);
      }
      toast.success("Form submitted successfully",
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration: 2000,
        }
      );
      
    } catch (error) {
      if (error.response) {
        console.log("something went wrong");
        toast.error(String(error.response.data) || String(error));;
      }
    }
    setIsLoading(false);
    setFormData({});
    Navigate("/user/dashboard")
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
      setFormData((prev) => ({
        ...prev,
        periodFrom : parseDate(formatDate(Location.state?.data?.periodFrom)),
        periodTo : parseDate(formatDate(Location.state?.data?.periodTo))
      }))
      
    }
  }, []);

  useEffect(() => {
      console.log("formData", formData)
    }, [formData]);

  return (
    <>
      <Nav />
      <div className="bg-white">
        <div>
          <h1 className="px-12 pt-10 text-6xl font-bold">Forms</h1>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="w-full p-8">
            <h1 className="pt-4 font-sans font-semibold text-3xl">
              Fellowship Details
            </h1>
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="flex justify-between mt-4 w-full">
                <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
                  Update your fellowship details here
                </p>
                {isLoading
                  ? <Spinner size="large" />
                  :
                  <Button
                    className="w-56 h-12"
                    color="primary"
                    size="lg"
                    radius="none"
                    type="submit"
                  >
                    Save
                  </Button>
                }
              </div>
              <Divider />
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Fellowship Name</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                    required
                      label="Fellowship Name"
                      name="fellowshipName"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      value={formData.fellowshipName || ""}
                    />
                  </div>
                </div>
                <Divider />
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Amount</h1>
                  </div>
                  <div className="flex-auto">
                  <Input
                  required
                      label="Fellowship Amount"
                      name="fellowshipAmount"
                      variant="bordered"
                      type="number"
                      fullWidth
                      onChange={handleUserInput}
                      value={formData.fellowshipAmount || ""}
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
                    isRequired={true}
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
                    isRequired={true}
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
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Period</h1>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <DatePicker
                    required
                    isRequired
                      className="max-w-[284px]"
                      label="From"
                      defaultValue={formData.periodFrom}
                      value={formData.periodFrom}
                      onChange={(e) =>
                        setFormData({ ...formData, periodFrom: e })
                      }
                    />
                    <DatePicker
                    isRequired={true}
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

export default FellowshipForm;


