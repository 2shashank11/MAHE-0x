import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Input,
} from "@nextui-org/react";
import PassButton from "../components/password_buttons";
export default function Signup() {
  //   const [liked, setLiked] = React.useState(false);

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
        <div className="grid gap-8">
          {" "}
          {/* Personal details form */}
          <div className="flex flex-col md:items-start">
            <h2 className="text-xl font-bold mb-4">Name</h2>
            <div className="flex flex-col gap-4 md:flex-row">
              <Input label="First Name" />
              <Input label="Middle Name" />
              <Input label="Last Name" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col md:items-start">
              <h2 className="text-xl font-bold mb-4">MAHE ID</h2>
              <Input isRequired label="Enter MAHE ID" />
            </div>
            <div className="flex flex-col md:items-start">
              <h2 className="text-xl font-bold mb-4">Department</h2>
              <Input label="Enter Department" />
            </div>
            <div className="flex flex-col md:items-start">
              <h2 className="text-xl font-bold mb-4">Position</h2>
              <Input label="Enter Position" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col md:items-start">
              <h2 className="text-xl font-bold mb-4">Email</h2>
              <Input
                isRequired
                type="email"
                label="Email"
                placeholder="prof@manipal.edu"
                className="max-w-xs"
              />
            </div>
            <div className="flex flex-col md:items-start">
              <h2 className="text-xl font-bold mb-4">Phone number</h2>
              <Input label="Phone number" />
            </div>
            <div className="flex flex-col md:items-start">
              <h2 className="text-xl font-bold mb-4">Create a Password</h2>
              <PassButton />
            </div>
            <div className="flex flex-col md:items-start">
              <h2 className="text-xl font-bold mb-4">Verify Password</h2>
              <PassButton />
            </div>
            <Button variant="solid" color="success">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
