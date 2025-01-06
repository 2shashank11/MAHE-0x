import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react";
import { DeleteIcon } from "./assets/DeleteIcon";

export default function DeleteRowModal(props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Tooltip color="danger" content="Delete Row" className="capitalize">
                <Button onPress={onOpen} variant="flat" color="white" className="capitalize">
                    Delete
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
                            <ModalHeader className="flex flex-col gap-1 font-bold">Are you sure do you want to delete the selected row?</ModalHeader>
                            <ModalFooter>
                                <Button
                                    color="default"
                                    variant="flat"
                                    onClick={() => {
                                        onClose();
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    color="danger"
                                    onClick={() => {
                                        props.handleDeleteRow(props.index);
                                        onClose();
                                    }}
                                >
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
