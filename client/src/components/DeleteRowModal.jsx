import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure, Tooltip, cn } from "@nextui-org/react";
import { DeleteDocumentIcon } from "./assets/RowDropdown";
import { iconClasses } from "./assets/RowDropdown";

export default function DeleteRowModal(props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <>
            <Tooltip color="danger" content="Delete Row" className="capitalize">
                <Button onPress={onOpen} variant="light" color="danger" className="capitalize">
                    <DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />
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
