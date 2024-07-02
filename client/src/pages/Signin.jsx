import React, { useState } from "react";
import { Card, CardBody, Image, Button, Input } from "@nextui-org/react";
import PasswordButtons from "../components/PasswordButtons";

export default function Signup() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
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
    <div className="px-24 pt-20">
      <h1 className="font-sans font-semibold text-7xl">Sign In</h1>
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

        <div className="grid gap-8">
          <form onSubmit={handleUserSignin}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Email</h2>
                <Input
                  required
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="prof@manipal.edu"
                  className="max-w-xs"
                />
              </div>
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Password</h2>
                <PasswordButtons handlePasswordInput={(e) => handleInputChange(e)} />
              </div>
              <Button type="submit" variant="solid" color="success">
                Signin
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
