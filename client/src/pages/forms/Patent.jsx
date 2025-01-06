import {
  Button,
  Input,
  Select,
  SelectItem,
  DatePicker,
  Divider,
} from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { choice, months } from "./data";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { parseDate } from "@internationalized/date";

function PatentForm() {
  const Location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      Navigate("/signin");
    }
  }, []);

  const [formData, setFormData] = useState({});
  const [selectedRegion, setSelectedRegion] = useState(formData?.region || "");

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
    try {
      if (Location.state?.data) {
        const response = await axios.patch(`/api/user/form/patent/${Location.state.data._id}`, { formData }, { withCredentials: true });
        console.log(response);
      }
      else {
        const response = await axios.post("/api/user/form/patent", { formData }, { withCredentials: true });
        console.log(response);
      }
    } catch (error) {
      if (error.response) {
        console.log("something went wrong");
      }
    }
  };

    useEffect(() => {
      if (Location.state?.data) {
        setFormData(Location.state?.data);
  
        console.log(Location.state.data.period)
        setFormData((prev) => ({
          ...prev,
          period : parseDate(new Date(Location.state.data?.period).toISOString().split('T')[0]),
        }))
        
      }
    }, []);
  
    useEffect(() => {
          console.log("formData", formData)
        }, [formData]);

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region); // Set selected region
    setFormData((prevFormData) => ({
      ...prevFormData,
      region: region,
    })); // Update region in formData
  };

  return (
    <>
      <Nav />
      <div className="bg-white">
        <div>
          <h1 className="px-12 pt-10 text-6xl font-bold">Forms</h1>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="w-full p-8">
            <h1 className="pt-4 font-sans font-semibold text-3xl">Patent Details</h1>
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="flex justify-between mt-4 w-full">
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
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Patent Title</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      label="Patent Title"
                      name="title"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      value={formData.title || ""}
                    />
                  </div>
                </div>
                <Divider />
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Patent Filed</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      label="Yes/No"
                      name="filed"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      selectedKeys={new Set([formData.filed]) || ""}
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
                    <h1>Patent Published</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      label="Yes/No"
                      name="published"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      selectedKeys={new Set([formData.published]) || ""}
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
                    <h1>Patent Granted</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      label="Yes/No"
                      name="granted"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      selectedKeys={new Set([formData.granted]) || ""}
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
                    <h1>Region</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      name="region"
                      label="Region"
                      variant="bordered"
                      fullWidth
                      onChange={handleRegionChange}
                      selectedKeys={new Set([formData.region]) || selectedRegion}
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
                {selectedRegion === "Other Country" ? (
                  <div className="flex items-center gap-6">
                    <div className="w-1/3 text-lg font-semibold">
                      <h1>Country</h1>
                    </div>
                    <div className="flex-auto">
                      <Input
                        label="Country"
                        name="country"
                        fullWidth
                        onChange={handleUserInput}
                        value={formData.country || ""}
                      />
                    </div>
                  </div>
                ) : null}
                <Divider />
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Period</h1>
                  </div>
                  <div className="flex-auto">
                    <DatePicker
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatentForm;
