import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

export default function UserModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">Open User Details</Button>
      <form>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
            
              <ModalHeader className="flex flex-col gap-1">User Details</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="First Name"
                  variant="bordered"
                  name="firstName"
                />
                <Input
                  label="Middle Name"
                  variant="bordered"
                  name="middleName"
                />
                <Input
                  label="Last Name"
                  variant="bordered"
                  name="lastName"
                />
                <Input
                  label="email"
                  variant="bordered"
                  name="email"
                />
                <Input
                  label="Phone"
                  variant="bordered"
                  name="phone"
                />
                <Input
                  label="maheid"
                  variant="bordered"
                  name="maheid"
                />
                <Input
                  label="department"
                  variant="bordered"
                  name="department"
                />
                <Input
                  label="position"
                  variant="bordered"
                  name="position"
                />
                <Input
                  label="role"
                  variant="bordered"
                  name="role"
                />

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose} type="submit">
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </form>
    </>
  );
}
