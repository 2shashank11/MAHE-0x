import React from "react";
import { Image, Button, Input } from "@nextui-org/react";
import ProfileChangePasswordModal from "./ProfileChangePasswordModal";

function PersonalDetails() {
  return (
    <div className="flex justify-center">
      <div className="m-3 items-center ml-10 mr-10">
        <h1 className="text-3xl font-bold mb-10">Personal Details</h1>



        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
        <div className="flex flex-col justify-center items-center border-2 rounded-2xl max-w-96 p-10"> {/* Profile photo and button */}
        <Image src="https://nextui.org/images/hero-card.jpeg" alt="Profile Picture" radius="full" className="min-h-40 min-w-40" />
            <label className="mt-4">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-900 transition">
                Upload Profile Picture
              </span>
              <input type="file" name="imageInput" className="hidden" />
            </label>
          </div>

          <form>
            <div className="grid gap-8"> {/* Personal details form */}

              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Name</h2>
                <div className="flex flex-col gap-4 md:flex-row">
                  <Input isDisabled name="firstName" label="First name" />
                  <Input isDisabled name="middleName" label="Middle name" />
                  <Input isDisabled name="lastName" label="Last name" />
                </div>

              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Email</h2>
                  <Input type="email" name="email" label="Email" />
                </div>
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Phone number</h2>
                  <Input label="Phone number" name="phone" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">MAHE ID</h2>
                  <Input label="Enter MAHE ID" name="maheid"/>
                </div>
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Department</h2>
                  <Input label="Enter Department" name="department"/>
                </div>
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Position</h2>
                  <Input label="Enter Position" name="position"/>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-10">
                <ProfileChangePasswordModal />
                <Button className="w-full md:w-auto md:ml-auto" type="submit" color="primary">Save and Proceed</Button>

              </div>

            </div>
          </form>
        </div>

      </div>
    </div>

  );
}
export default PersonalDetails;
