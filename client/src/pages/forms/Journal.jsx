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
import React, { useState, useEffect } from "react";
import { author, choice, quartiles, graduation } from "./data";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { parseDate } from "@internationalized/date";
import toast from "react-hot-toast";

function JournalForm() {
  const Location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      Navigate("/signin");
    }
  }, []);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({});
  const [isStudentProject, setIsStudentProject] = useState(
    formData?.studentProject || ""
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStudentProjectChange = (e) => {
    const isStudentProject = e.target.value;
    setIsStudentProject(isStudentProject); // Set selected region
    setFormData((prevFormData) => ({
      ...prevFormData,
      isStudentProject: isStudentProject,
    })); // Update region in formData
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.region === "Indian") formData.country = "India";
    console.log(formData);
    setIsLoading(true);
    try {
      if (Location.state?.data) {
        const response = await axios.patch(
          `/api/user/form/journal/${Location.state.data._id}`,
          { formData },
          { withCredentials: true }
        );
        console.log(response);
      } else {
        const response = await axios.post(
          "/api/user/form/journal",
          { formData },
          { withCredentials: true }
        );
        console.log(response);
      }
      toast.success("Form submitted successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 2000,
      });
    } catch (error) {
      if (error.response) {
        console.error("Something went wrong");
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
                    <h1>Journal Title</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      required
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
                      required
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
                      isRequired={true}
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
                      isRequired={true}
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
                      isRequired={true}
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
                    <h1>Student Project</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      isRequired={true}
                      name="isStudentProject"
                      label="Yes / No"
                      variant="bordered"
                      fullWidth
                      onChange={handleStudentProjectChange}
                      selectedKeys={
                        new Set([formData.isStudentProject]) || isStudentProject
                      }
                    >
                      {choice.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
                {isStudentProject === "Yes" ? (
                  <div className="flex items-center gap-6">
                    <div className="w-1/3 text-lg font-semibold">
                      <h1>Graduation</h1>
                    </div>
                    <div className="flex-auto">
                      <Select
                        isRequired={true}
                        label="UG / PG "
                        name="isStudentProject"
                        variant="bordered"
                        fullWidth
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isStudentProject: e.target.value,
                          })
                        }
                        selectedKeys={
                          new Set([formData.isStudentProject]) || ""
                        }
                      >
                        {graduation.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                ) : null}
                <Divider />
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>DOI</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      required
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

export default JournalForm;
