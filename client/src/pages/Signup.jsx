import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Button,
  Input,
} from "@nextui-org/react";
import PasswordButtons from "../components/PasswordButtons";
export default function Signup() {

  const [formData, setFormData] = useState({});
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleUserSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      //toast
      alert("Passwords do not match")
      return;
    }
    else{
      formData.password = password;
    }
    console.log(formData)
  }

  return (
    <div className="px-24 pt-20">
      <h1 className="font-sans font-semibold text-7xl">Sign Up</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
        <Card className="py-4" isBlurred shadow="sm">
          <CardBody className="overflow-hidden py-2">
            <Image
              alt="learners"
              className="object-cover rounded-xl w-96 h-96"
              src={"/signupcoverpage.png"}
            />
          </CardBody>
        </Card>

        {/* Personal Details  */}
        <form onSubmit={handleUserSignup}>
          <div className="grid gap-8">
            {" "}
            {/* Personal details form */}
            <div className="flex flex-col md:items-start">
              <h2 className="text-xl font-bold mb-4">Name</h2>
              <div className="flex flex-col gap-4 md:flex-row">
                <Input required label="First Name" name="firstName" onChange={handleInputChange} />
                <Input label="Middle Name" name="middleName" onChange={handleInputChange} />
                <Input label="Last Name" name="lastName" onChange={handleInputChange} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">MAHE ID</h2>
                <Input required label="Enter MAHE ID" name="maheId" onChange={handleInputChange} />
              </div>
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Department</h2>
                <Input label="Enter Department" name="department" onChange={handleInputChange} />
              </div>
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Position</h2>
                <Input label="Enter Position" name="position" onChange={handleInputChange} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Email</h2>
                <Input
                  onChange={handleInputChange}
                  required
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="prof@manipal.edu"
                  className="max-w-xs"
                />
              </div>
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Phone number</h2>
                <Input label="Phone number" name="phone" onChange={handleInputChange}/>
              </div>
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Create a Password</h2>
                <PasswordButtons handlePasswordInput={handlePasswordInput} />
              </div>
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Confirm Password</h2>
                <PasswordButtons handlePasswordInput={handleConfirmPasswordInput} />
              </div>
              <Button variant="solid" color="success" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
