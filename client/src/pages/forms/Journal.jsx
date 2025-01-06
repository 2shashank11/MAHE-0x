import {
  Button,
  Input,
  Select,
  SelectItem,
  DatePicker,
  Divider,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { author, choice, quartiles } from "./data";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { parseDate } from "@internationalized/date";

function JournalForm() {
  const Location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/signin");
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
    try {

      if (Location.state?.data) {
        const response = await axios.patch(`/api/user/form/journal/${Location.state.data._id}`, { formData }, { withCredentials: true });
        console.log(response);
      }

      else {
        const response = await axios.post("/api/user/form/journal", { formData }, { withCredentials: true });
        console.log(response);
      }
    }
    catch (error) {
      if (error.response) {
        console.error("Something went wrong");
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
                    <h1>Journal Title</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      label="Journal Title"
                      name="title"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      value={formData?.title || ""}
                    />
                  </div>
                </div>
                <Divider />
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Journal Name</h1>
                  </div>
                  <div className="flex-auto">
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
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Quartile</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      label="Select Quartile"
                      name="quartile"
                      variant="bordered"
                      fullWidth
                      onChange={(e) =>
                        setFormData({ ...formData, quartile: e.target.value })
                      }
                      selectedKeys={new Set([formData.quartile]) || ""}
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
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>WOS</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      label="Yes / No"
                      name="wos"
                      variant="bordered"
                      fullWidth
                      onChange={(e) =>
                        setFormData({ ...formData, wos: e.target.value })
                      }
                      selectedKeys={new Set([formData.wos]) || ""}
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
                    <h1>Authorship</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      label="Authorship"
                      name="authorship"
                      variant="bordered"
                      fullWidth
                      selectedKeys={new Set([formData.authorship]) || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          authorship: e.target.value,
                        })
                      }
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
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>DOI</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      label="DOI"
                      name="doi"
                      variant="bordered"
                      fullWidth
                      value={formData.doi || ""}
                      onChange={handleUserInput}
                    />
                  </div>
                </div>
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

export default JournalForm;
