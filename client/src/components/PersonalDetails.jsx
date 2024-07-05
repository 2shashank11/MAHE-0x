import React, { useState } from "react";
import { Image, Button, Input } from "@nextui-org/react";
import ProfileChangePasswordModal from "./ProfileChangePasswordModal";

function PersonalDetails({ authUser, formData, handleInputChange, handleSaveProfile }) {
  const [editable, setEditable] = useState(true);
  return (
    <div className="flex justify-center">
      <div className="m-3 items-center ml-6 mr-6">
        <h1 className="text-3xl font-bold mb-10">Personal Details</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center items-center">
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl max-w-96 p-10"> {/* Profile photo and button */}
            <Image src='/images/defaultProfileImage.png' alt="Profile Picture" radius="full" className="min-h-40 min-w-40" />
            <label className="mt-4">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-900 transition">
                Upload Profile Picture
              </span>
              <input type="file" name="imageInput" className="hidden" />
            </label>
          </div>

          <form className="grid gap-8" onSubmit={(e) => { e.preventDefault(); setEditable(false); handleSaveProfile(e) }}>
            <div className="grid gap-8"> {/* Personal details form */}

              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Name</h2>
                <div className="flex flex-col gap-4 md:flex-row">
                  <Input isDisabled={editable} name="firstName" label="First name" value={formData?.name.firstName} onChange={handleInputChange} />
                  <Input isDisabled={editable} name="middleName" label="Middle name" value={formData?.name.middleName} onChange={handleInputChange} />
                  <Input isDisabled={editable} name="lastName" label="Last name" value={formData?.name.lastName} onChange={handleInputChange} />
                </div>

              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Email</h2>
                  <Input isDisabled={editable} type="email" name="email" label="Email" value={formData?.email} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Phone number</h2>
                  <Input isDisabled={editable} label="Phone number" name="phone" value={formData?.phone} onChange={handleInputChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">MAHE ID</h2>
                  <Input isDisabled={editable} label="Enter MAHE ID" name="maheId" value={formData?.maheId} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Department</h2>
                  <Input isDisabled={editable} label="Enter Department" name="department" value={formData?.department} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Position</h2>
                  <Input isDisabled={editable} label="Enter Position" name="position" value={formData?.position} onChange={handleInputChange} />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-10">
                <ProfileChangePasswordModal authUser={authUser} />
                {editable ? <Button className="w-full md:w-auto md:ml-auto" color="warning" onPress={() => setEditable(false)}>Edit</Button>
                  : <>
                    <Button className="w-full md:w-auto md:ml-auto" color="default" onPress={() => setEditable(true)}>Cancel</Button>
                    <Button className="w-full md:w-auto md:ml-auto" type="submit" color="primary" onPress={() => setEditable(true)}>Save</Button>
                  </>
                }

              </div>
            </div>
          </form>
        </div>

      </div>
    </div>

  );
}
export default PersonalDetails;
