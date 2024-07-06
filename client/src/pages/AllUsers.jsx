import React, { useEffect, useRef, useState, useContext } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Tooltip, Spinner } from "@nextui-org/react";
import EditUserModal from "../components/EditUserModal";
import DeleteRowModal from "../components/DeleteRowModal";
import Nav from "../components/Nav";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

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
    const { authUser } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const editedUserDataRef = useRef({});

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/admin/all-users');
            const result = response.data.users
            setUsers(result.filter(user => user._id !== authUser?._id));
            console.log(response.data.users);
        };
        fetchUsers();
    }, []);

    function handleChangeForEditing(e) {
        console.log("name: ", e.target.name, "value: ", e.target.value);
        editedUserDataRef.current = {
            ...editedUserDataRef.current,
            [e.target.name]: e.target.value
        };
    }

    async function handleEditUser(id) {
        const editedUserData = editedUserDataRef.current;
        console.log(editedUserData);
        if (!Object.keys(editedUserData).length) return;
        try {
            const response = await axios.patch(`/api/admin/edit-user/${id}`, { editedUserData });
            console.log(response);
            setUsers(users.map(user => user._id === id ? { ...user, ...response.data.user } : user));
        } catch (error) {
            console.log(error); // toast
        }
    }

    const handleDeleteRow = async (id) => {
        console.log(id)
        console.log("deleting:", id);
        try {
            const response = await axios.delete(`/api/admin/delete-user/${id}`);
            console.log(response);
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            console.log(error); // toast
        }
    }

    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.profileImageURL }}
                        description={user.email}
                        name={`${user.name.firstName} ${user.name.middleName || ''} ${user.name.lastName}`}
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
                        <EditUserModal
                            user={user}
                            editedUserDataRef={editedUserDataRef}
                            handleEditUser={handleEditUser}
                            handleChangeForEditing={handleChangeForEditing}
                        />
                        <Tooltip color="danger" content="Delete Row" className="capitalize">
                            <DeleteRowModal handleDeleteRow={handleDeleteRow} id={user._id} />
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authUser) {
            setLoading(false);
        }
    }, [authUser]);

    if (loading) {
        return <>
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" />
            </div>
        </>
    }

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
