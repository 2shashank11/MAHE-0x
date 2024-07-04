import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Tooltip } from "@nextui-org/react";
import { EditIcon } from "../components/assets/EditIcon";
import { DeleteIcon } from "../components/assets/DeleteIcon";
import Nav from "../components/Nav";
import axios from "axios";

const columns = [
    { name: "NAME", uid: "name" },
    { name: "PHONE", uid: "phone" },
    { name: "MAHE ID", uid: "maheId" },
    { name: "DEPARTMENT", uid: "department" },
    { name: "POSITION", uid: "position" },
    { name: "ROLE", uid: "role" },
    { name: "ACTIONS", uid: "actions" }
];

export default function AllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/admin/all-users');
            setUsers(response.data.users);
        };
        fetchUsers();
    }, []);

    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.profileImageURL }}
                        description={user.email}
                        name={`${user.name.firstName} ${user.name.middleName} ${user.name.lastName}`}
                    />
                );
            case "email":
            case "phone":
            case "maheId":
            case "department":
            case "position":
            case "role":
                return <p className="text-bold text-sm capitalize">{cellValue}</p>;
            case "actions":
                return (
                    <div className="flex items-center justify-center gap-2">
                        <Tooltip content="Edit user">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    };

    return (
        <>
            <Nav />
            <div className="m-4">
                <h1 className="font-bold text-2xl mb-4">All Users</h1>
                <Table aria-label="Example table with custom cells">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={users}>
                        {(item) => (
                            <TableRow key={item._id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
