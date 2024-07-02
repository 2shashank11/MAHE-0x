import React from "react";
import { Image, Button, Input } from "@nextui-org/react";
import ProfileChangePasswordModal from "./ProfileChangePasswordModal";

function PersonalDetails() {
  return (
    <div className="flex justify-center">
      <div className="m-3 items-center ml-10 mr-10">
        <h1 className="text-3xl font-bold mb-10">Personal Details</h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="flex flex-col items-center"> {/* Profile photo and button */}
            <Image src="https://nextui.org/images/hero-card.jpeg" alt="Profile Picture" radius="full" className="h-auto w-auto" />
            <label className="mt-4">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-900 transition">
                Upload Profile Picture
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>


          <div className="grid gap-8"> {/* Personal details form */}

            <div className="flex flex-col md:items-start">
              <h2 className="text-xl font-bold mb-4">Name</h2>
              <div className="flex flex-col gap-4 md:flex-row">
                <Input label="First name" />
                <Input label="Middle name" />
                <Input label="Last name" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Email</h2>
                <Input type="email" label="Email" />
              </div>
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Phone number</h2>
                <Input label="Phone number" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">MAHE ID</h2>
                <Input label="Enter MAHE ID" />
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

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-10">
              <ProfileChangePasswordModal/>
              <Button className="w-full md:w-auto md:ml-auto" color="primary">Save and Proceed</Button>

           </div>

          </div>
        </div>

      </div>
    </div>

  );
}
export default PersonalDetails;
