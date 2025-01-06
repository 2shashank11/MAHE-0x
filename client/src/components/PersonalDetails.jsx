import React, { useState, useEffect } from "react";
import { Image, Button, Input, Spinner } from "@nextui-org/react";
import ProfileChangePasswordModal from "./ProfileChangePasswordModal";

function PersonalDetails({ authUser, setAuthUser, formData, handleInputChange, handleSaveProfile }) {
  const [editDisabled, setEditDisabled] = useState(true);
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

  function getImage(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setFile(selectedFile);
      setFileURL(url);
    }
  }

  function uploadImage() {
    if (file) {
      console.log(file);
      setAuthUser((prevData) => ({
        ...prevData,
        profileImageURL: fileURL
      }));
      setFile(null);
      setFileURL(null);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="m-3 items-center ml-6 mr-6">
        <h1 className="text-3xl font-bold mb-10">Personal Details</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center items-center">
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl max-w-96 p-10"> 
            <Image src={fileURL || authUser?.profileImageURL} alt="Profile Picture" radius="full" className="min-h-40 min-w-40" />
            {/* {fileURL && file ? (
              <>
                <div className="mt-4">
                  <Button color="default" onPress={() => { setFile(null); setFileURL(null); }}>Cancel</Button>
                </div>
                <div className="mt-4">
                  <Button color="success" onPress={uploadImage}>Save</Button>
                </div>
              </>
            ) : (
              <label className="mt-4">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-900 transition">
                  Upload Profile Picture
                </span>
                <Input type="file" name="imageInput" className="hidden" onChange={(e) => getImage(e)}>Upload Profile Picture</Input>
              </label>
            )} */}
          </div>

          <form className="grid gap-8" onSubmit={(e) => { e.preventDefault(); setEditDisabled(false); handleSaveProfile(); setEditDisabled(true) }}>
            <div className="grid gap-8"> {/* Personal details form */}

              <div className="flex flex-col md:items-start">
                <h2 className="text-xl font-bold mb-4">Name</h2>
                <div className="flex flex-col gap-4 md:flex-row">
                  <Input isDisabled={editDisabled} name="firstName" label="First name" defaultValue={authUser?.name?.firstName} onChange={handleInputChange} />
                  <Input isDisabled={editDisabled} name="middleName" label="Middle name" defaultValue={authUser?.name?.middleName} onChange={handleInputChange} />
                  <Input isDisabled={editDisabled} name="lastName" label="Last name" defaultValue={authUser?.name?.lastName} onChange={handleInputChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Email</h2>
                  <Input isDisabled={editDisabled} type="email" name="email" label="Email" defaultValue={authUser?.email} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Phone number</h2>
                  <Input isDisabled={editDisabled} label="Phone number" name="phone" defaultValue={authUser?.phone} onChange={handleInputChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">MAHE ID</h2>
                  <Input isDisabled={editDisabled} label="Enter MAHE ID" name="maheId" defaultValue={authUser?.maheId} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Department</h2>
                  <Input isDisabled={editDisabled} label="Enter Department" name="department" defaultValue={authUser?.department} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col md:items-start">
                  <h2 className="text-xl font-bold mb-4">Designation</h2>
                  <Input isDisabled={editDisabled} label="Enter Position" name="designation" defaultValue={authUser?.designation} onChange={handleInputChange} />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-10">
                <ProfileChangePasswordModal authUser={authUser} />
                {editDisabled ? <Button className="w-full md:w-auto md:ml-auto" color="warning" onPress={() => setEditDisabled(false)}>Edit</Button>
                  : <>
                    <Button className="w-full md:w-auto md:ml-auto" color="default" onPress={() => setEditDisabled(true)}>Cancel</Button>
                    <Button className="w-full md:w-auto md:ml-auto" type="submit" color="primary">Save</Button>
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
