import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./assets/EyeSlashFilledIcon";
import axios from "axios";


export default function ProfileChangePasswordModal({ authUser }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const [formData, setFormData] = useState({});

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    async function handlePasswordUpdate() {
        console.log(formData)
        if (!formData.originalPassword || !formData.newPassword || !formData.confirmPassword) return;
        if (formData.newPassword !== formData.confirmPassword) {
            alert("Passwords do not match")
            return;
        }
        try {
            const response = await axios.patch(`/api/user/update-password/${authUser._id}`, formData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Button onPress={onOpen} color="success">Change Password</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                backdrop="blur"
                size="sm"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Reset Password</ModalHeader>
                            <ModalBody>
                                <Input
                                    isRequired
                                    value={formData.originalPassword}
                                    onChange={handleInputChange}
                                    name="originalPassword"
                                    label="Original Password"
                                    variant="bordered"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}
                                    className="max-w-xs"
                                />
                                <Input
                                    isRequired
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    name="newPassword"
                                    label="New Password"
                                    variant="bordered"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}
                                    className="max-w-xs"
                                />
                                <Input
                                    isRequired
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    variant="bordered"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}
                                    className="max-w-xs"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="default"
                                    type="submit"
                                    onClick={onClose}>
                                    Cancel
                                </Button>

                                <Button
                                    color="success"
                                    type="submit"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handlePasswordUpdate();
                                    }}>
                                    Change Password
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    );
}
