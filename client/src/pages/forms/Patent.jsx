import {
  Button,
  Input,
  Select,
  SelectItem,
  DatePicker,
  Divider,
  Spinner,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { choice, months } from "./data";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { parseDate } from "@internationalized/date";
import toast from "react-hot-toast";

function PatentForm() {
  const Location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      Navigate("/signin");
    }
  }, []);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({});
  const [selectedRegion, setSelectedRegion] = useState(formData?.region || "");
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    try {
      if (Location.state?.data) {
        const response = await axios.patch(
          `/api/user/form/patent/${Location.state.data._id}`,
          { formData },
          { withCredentials: true }
        );
        console.log(response);
      } else {
        const response = await axios.post(
          "/api/user/form/patent",
          { formData },
          { withCredentials: true }
        );
        console.log(response);
        toast.success("Form submitted successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          duration: 2000,
        });
      }
    } catch (error) {
      if (error.response) {
        console.log("something went wrong");
        toast.error(String(error.response.data) || String(error));
      }
    }
    setIsLoading(false);
    setFormData({});
    Navigate("/user/dashboard");
  };

  useEffect(() => {
    if (Location.state?.data) {
      setFormData(Location.state?.data);

      console.log(Location.state.data.period);
      setFormData((prev) => ({
        ...prev,
        period: parseDate(
          new Date(Location.state.data?.period).toISOString().split("T")[0]
        ),
      }));
    }
  }, []);

  useEffect(() => {
    console.log("formData", formData);
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
            <h1 className="pt-4 font-sans font-semibold text-3xl">
              Patent Details
            </h1>
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="flex justify-between mt-4 w-full">
                <Button
                  color="primary"
                  variant="flat"
                  radius="none"
                  size="lg"
                  onPress={onOpen}
                >
                  Are you filling the form for someone else?
                </Button>
                <Modal
                  isOpen={isOpen}
                  placement="top-center"
                  onOpenChange={onOpenChange}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Enter User ID
                        </ModalHeader>
                        <ModalBody>
                          <Input
                            label="User ID"
                            placeholder="ex: 220905172"
                            variant="bordered"
                          />
                        </ModalBody>
                        <ModalFooter className="justify-end">
                          <Button
                            color="danger"
                            variant="flat"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            Confirm
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
                {isLoading ? (
                  <Spinner size="large" />
                ) : (
                  <Button
                    className="w-56 h-12"
                    color="primary"
                    size="lg"
                    radius="none"
                    type="submit"
                  >
                    Save
                  </Button>
                )}
              </div>
              <Divider />
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Patent Title</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      required
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
                      isRequired={true}
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
                      isRequired={true}
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
                      isRequired={true}
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
                      isRequired={true}
                      name="region"
                      label="Region"
                      variant="bordered"
                      fullWidth
                      onChange={handleRegionChange}
                      selectedKeys={
                        new Set([formData.region]) || selectedRegion
                      }
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
                        required
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
                      required
                      isRequired
                      className="max-w-[284px]"
                      label="Date"
                      defaultValue={formData.period}
                      value={formData.period}
                      onChange={(e) => setFormData({ ...formData, period: e })}
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
