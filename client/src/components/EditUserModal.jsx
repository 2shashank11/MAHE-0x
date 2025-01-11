import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Tooltip, Select, SelectItem } from "@nextui-org/react";
import { EditIcon } from "./assets/EditIcon";

export default function EditUserModal({ user, editedUserDataRef, handleEditUser, handleChangeForEditing }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip color="warning" content="Edit Row" className="capitalize">
        <Button onClick={(e) => {  onOpen() }} variant="light" color="warning" className="capitalize">
          <EditIcon />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={(e) => { e.preventDefault(); handleEditUser(user._id); onClose() }}>
                <ModalHeader className="flex flex-col gap-1">Edit User Details</ModalHeader>
                <ModalBody>
                  <Input
                    defaultValue={user.fullName}
                    onChange={handleChangeForEditing}
                    autoFocus
                    label="Full Name"
                    variant="bordered"
                    name="fullName"
                    type="text"
                  />
                  <Input
                    defaultValue={user.email}
                    onChange={handleChangeForEditing}
                    label="Email"
                    variant="bordered"
                    name="email"
                    type="email"
                  />
                  <Input
                    defaultValue={user.phone}
                    onChange={handleChangeForEditing}
                    label="Phone"
                    variant="bordered"
                    name="phone"
                    type="number"
                  />
                  <Input
                    defaultValue={user.maheId}
                    onChange={handleChangeForEditing}
                    label="Mahe ID"
                    variant="bordered"
                    name="maheId"
                    type="text"
                  />
                  <Input
                    defaultValue={user.department}
                    onChange={handleChangeForEditing}
                    label="Department"
                    variant="bordered"
                    name="department"
                    type="text"
                  />
                  <Input
                    defaultValue={user.designation}
                    onChange={handleChangeForEditing}
                    label="Position"
                    variant="bordered"
                    name="designation"
                    type="text"
                  />
                  {/* <Input
                    defaultValue={user.role}
                    onChange={handleChangeForEditing}
                    label="Role"
                    variant="bordered"
                    name="role"
                    type="text"
                  /> */}
                  <Select
                    defaultSelectedKeys={[user.role]}
                    variant="bordered"
                    name="role"
                    label="Role"
                    onChange={handleChangeForEditing}
                  >
                      <SelectItem key={"USER"}>{"USER"}</SelectItem>
                      <SelectItem key={"ADMIN"}>{"ADMIN"}</SelectItem>
                  </Select>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant="flat" onPress={() => { onClose(); editedUserDataRef.current = {} }}>
                    Close
                  </Button>
                  <Button type="submit" color="warning">
                    Edit
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
