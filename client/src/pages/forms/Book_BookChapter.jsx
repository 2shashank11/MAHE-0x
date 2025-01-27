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
import { months, bookTypes } from "./data"; // Import bookTypes
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { parseDate } from "@internationalized/date";
import toast from "react-hot-toast";

const years = [];
for (
  let year = new Date().getFullYear() - 30;
  year <= new Date().getFullYear() + 1;
  year++
) {
  years.push({ value: year.toString(), label: year.toString() });
}

function Book_BookChapter() {
  const Location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      Navigate("/signin");
    }
  }, []);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        const response = await axios.patch(
          `/api/user/form/book_bookChapter/${Location.state.data._id}`,
          { formData },
          { withCredentials: true }
        );
        console.log(response);
      } else {
        const response = await axios.post(
          "/api/user/form/book_bookChapter",
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
      console.log("Something went wrong");
      toast.error(String(error.response.data) || String(error));
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
              Book & Book-Chapter Details
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
                    <h1>Book Title</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      required
                      label="Book Name"
                      name="bookName"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      value={formData.bookName || ""}
                    />
                  </div>
                </div>
                <Divider />
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>ISBN</h1>
                  </div>
                  <div className="flex-auto">
                    <Input
                      required
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
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Book Type</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      isRequired={true}
                      name="type"
                      label="Type"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      selectedKeys={new Set([formData?.type]) || ""}
                    >
                      {bookTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <Divider />
                <div className="flex items-center gap-6">
                  <div className="w-1/3 text-lg font-semibold">
                    <h1>Publication Year</h1>
                  </div>
                  <div className="flex-auto">
                    <Select
                      isRequired={true}
                      label="Publication Year"
                      name="publicationYear"
                      variant="bordered"
                      fullWidth
                      onChange={handleUserInput}
                      className="mb-4"
                      selectedKeys={new Set([formData?.publicationYear]) || ""}
                    >
                      {years.map((year) => (
                        <SelectItem key={year.value} value={year.value}>
                          {year.label}
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

export default Book_BookChapter;
