import {
  Button,
  Input,
  Select,
  SelectItem,
  DatePicker,
  Divider,
  Spinner,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { regionOptions, indexedOptions } from "./data";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { parseDate } from "@internationalized/date";
import toast from "react-hot-toast";


function Conference() {
  const Location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      Navigate("/signin");
    }
  }, []);

  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    try {
      if (Location.state?.data) {
        const response = await axios.patch(`/api/user/form/conference/${Location.state.data._id}`, { formData }, { withCredentials: true });
        console.log(response);
      }
      else {
        const response = await axios.post("/api/user/form/conference", { formData }, { withCredentials: true });
        console.log(response);
      }
      toast.success("Form submitted successfully");
    } 
    catch (error) {
      if (error.response) {
        console.log("something went wrong");
        toast.error(String(error));;
      }
    }
    setIsLoading(false);
    setFormData({});
  };

  useEffect(() => {
    if (Location.state?.data) {
      setFormData(Location.state.data);

      if (Location.state.data.period) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const periodDate = new Date(Location.state.data.period);

        if (!isNaN(periodDate.getTime())) {
          const formattedPeriod = periodDate.toLocaleString('en-US', options);
          const isoPeriod = periodDate.toISOString().split('T')[0];
          setFormData((prev) => ({
            ...prev,
            period: parseDate(isoPeriod),
          }));
        }
        else {
          console.error('Invalid period date:', Location.state.data.period);
        }
      }
    }
  }, []);


  useEffect(() => {
    console.log(formData)
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
              Conference Details
            </h1>
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="flex justify-between mt-4 w-full">
                <p className="pt-2 text-lg md:text-xl text-blue-600 font-bold">
                  Update your conference details here
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

              <div className="flex items-center gap-6">
                <div className="w-1/3 text-lg font-semibold">
                  <h1>Conference Name</h1>
                </div>
                <div className="flex-auto">
                  <Input
                  required
                    label="Conference Name"
                    variant="bordered"
                    name="conferenceName"
                    fullWidth
                    onChange={handleUserInput}
                    value={formData?.conferenceName || ""}
                  />
                </div>
              </div>
              <Divider />

              <div className="flex items-center gap-6">
                <div className="w-1/3 text-lg font-semibold">
                  <h1>Paper Title</h1>
                </div>
                <div className="flex-auto">
                  <Input
                  required
                    label="Title of Paper"
                    variant="bordered"
                    name="paperTitle"
                    fullWidth
                    onChange={handleUserInput}
                    value={formData?.paperTitle || ""}
                  />
                </div>
              </div>
              <Divider />

              <div className="flex items-center gap-6">
                <div className="w-1/3 text-lg font-semibold">
                  <h1>Region</h1>
                </div>
                <div className="flex-auto">
                  <Select
                  isRequired={true}
                    label="Region"
                    variant="bordered"
                    name="region"
                    fullWidth
                    onChange={handleUserInput}
                    selectedKeys={new Set([formData?.region]) || ""}
                  >
                    {regionOptions.map((option) => (
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
                  <h1>Indexed</h1>
                </div>
                <div className="flex-auto">
                  <Select
                  isRequired={true}
                    label="Indexed"
                    variant="bordered"
                    name="indexed"
                    fullWidth
                    onChange={handleUserInput}
                    selectedKeys={new Set([formData?.indexed]) || ""}
                  >
                    {indexedOptions.map((option) => (
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
                  <h1>Period</h1>
                </div>
                <div className="flex-auto">
                  <DatePicker
                  required
                  isRequired
                    className="max-w-[284px]"
                    label="Date"
                    defaultValue={formData.period}
                    value={formData.period}
                    onChange={(e) =>
                      setFormData({ ...formData, period: e })
                    }
                  />
                </div>
              </div>
              <Divider />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conference;
