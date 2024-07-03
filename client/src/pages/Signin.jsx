import React, { useState } from "react";
import { Card, CardBody, Image, Button, Input } from "@nextui-org/react";
import PasswordButtons from "../components/PasswordButtons";

export default function Signup() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUserSignin = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Proceed with form submission logic
  };

  return (
    <div className="px-24 pt-20 min-h-screen flex flex-col">
      <h1 className="font-sans font-semibold text-7xl">Sign In</h1>
      <div className="flex flex-col md:flex-row gap-8 pt-10">
        <Card className="py-4" isBlurred shadow="sm">
          <CardBody className="overflow-hidden py-2">
            <Image
              alt="learners"
              className="object-cover rounded-xl w-96 h-96"
              src={"/signupcoverpage.png"}
            />
          </CardBody>
        </Card>

        <div className="flex flex-1 justify-center items-center">
          <form onSubmit={handleUserSignin} className="w-1/2">

            <div className="flex flex-col gap-8 p-4 w-full">
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-4">Email</h2>
                <Input
                  required
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="prof@manipal.edu"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-4">Password</h2>
                <PasswordButtons handlePasswordInput={(e) => handleInputChange(e)} />
              </div>
              <Button type="submit" variant="solid" color="success" className="mt-4 w-1/4">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
