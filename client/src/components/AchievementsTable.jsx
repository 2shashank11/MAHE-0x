import React, { useState, useEffect, useContext } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Tooltip } from "@nextui-org/react";
import { EditIcon } from "./assets/EditIcon";
import { DeleteIcon } from "./assets/DeleteIcon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteRowModal from "./DeleteRowModal";
import { AuthContext } from "../contexts/AuthContext";

export default function AchievementsTable(props) {
    const { authUser } = useContext(AuthContext);

    const selectedColor = "success";
    const [currentHead, setCurrentHead] = useState(["No Category Selected"]);
    const [filteredData, setFilteredData] = useState([]);
    const [deleteRow, setDeleteRow] = useState(false);

    const conferenceHead = ["name", "maheId", "conferenceName", "paperTitle", "region", "indexed", "month_year"];
    const fellowshipHead = ["name", "maheId", "fellowshipName", "submitted", "granted", "month_year"];
    const grantHead = ["name", "maheId", "grantName", "submitted", "granted", "amount", "month_year"];
    const journalHead = ["name", "maheId", "title", "journalName", "quartile", "wos", "authorship", "month_year"];
    const patentHead = ["name", "maheId", "filed", "published", "granted", "region", "country", "month_year"];
    const publicationHead = ["name", "maheId", "bookName", "Type", "isbn", "publishYear", "month_year"];

    const getCategoryHead = (category) => {
        switch (category) {
            case "Conference":
                return conferenceHead;
            case "Fellowship":
                return fellowshipHead;
            case "Grant":
                return grantHead;
            case "Journal":
                return journalHead;
            case "Patent":
                return patentHead;
            case "Publication":
                return publicationHead;
            default:
                return ["No Category Selected"];
        }
    };

    const filterData = (data, filter) => {
        return data.filter((i) => {
            const [month, year] = i.month_year.split("-");
            const date = new Date(`${month} 1, ${year}`);

            if (filter.fromMonth && filter.fromYear && filter.toMonth && filter.toYear) {
                const fromDate = new Date(`${filter.fromMonth} 1, ${filter.fromYear}`);
                const toDate = new Date(`${filter.toMonth} 1, ${filter.toYear}`);
                return date >= fromDate && date <= toDate;
            }

            if (filter.fromMonth && filter.fromYear && (!filter.toMonth || !filter.toYear)) {
                const fromDate = new Date(`${filter.fromMonth} 1, ${filter.fromYear}`);
                return date >= fromDate;
            }

            if ((!filter.fromMonth || !filter.fromYear) && filter.toMonth && filter.toYear) {
                const toDate = new Date(`${filter.toMonth} 1, ${filter.toYear}`);
                return date <= toDate;
            }

            return true;
        });
    };

    useEffect(() => {
        const categoryHead = getCategoryHead(props.selectedCategory);
        setCurrentHead(categoryHead);

        const mainData = props.mainData || [];
        const filteredResults = filterData(mainData, props.filter);

        setFilteredData(filteredResults);
    }, [props.selectedCategory, props.mainData, props.filter]);

    const Navigate = useNavigate();

    const handleRedirectToEdit = (row, selectedCategory) => {
        console.log("Edit Row", row, selectedCategory);
        selectedCategory = selectedCategory.toLowerCase();
        Navigate(`/user/form/${selectedCategory}`, { state: { data: row } });
    };

    const handleDeleteRow = async (id) => {
        try {
            const response = await axios.delete(`/api/user/form/${props.selectedCategory.toLowerCase()}/${id}`);
            console.log(response);
            console.log(filteredData)
            setFilteredData((filteredData) => filteredData.filter(i => i._id !== id));

        } catch (error) {
            console.error("Error deleting row:", error);
        }
    };

    // useState(() => {console.log(filteredData)}, [filteredData])

    return (
        <div className="flex flex-col gap-3 p-5">
            <Table
                color={selectedColor}
                selectionMode="single"
                aria-label="Example static collection table"
            >
                <TableHeader>
                    {currentHead.map((head) => (
                        <TableColumn key={head}>{head}</TableColumn>
                    ))}
                    {/* {(props.tableControls && authUser?.role === "ADMIN") ? <TableColumn key="actions">Actions</TableColumn> : null} */}
                    <TableColumn key="actions">Actions</TableColumn>
                </TableHeader>
                <TableBody>
                    {filteredData.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {currentHead.map((column) => (
                                <TableCell key={column}>{row[column] !== undefined ? row[column] : 'N/A'}</TableCell>
                            ))}
                            <TableCell className="flex gap-2 justify-center max-w-fit">
                                {authUser?.role === "ADMIN" ? (
                                    <>
                                        {/* <Tooltip content="Edit user">
                                            <span className="text-lg p-2 border-2 text-default-400 cursor-pointer active:opacity-50">
                                                <EditIcon onClick={() => handleRedirectToEdit(row, props.selectedCategory)} />
                                            </span>
                                        </Tooltip>
                                        <Tooltip color="danger" content="Delete user">
                                            <span className="text-lg p-2 border-2 text-danger cursor-pointer active:opacity-50">
                                                <DeleteRowModal handleDeleteRow={handleDeleteRow} id={row._id} />
                                            </span>
                                        </Tooltip> */}

                                        <Tooltip color="warning" content="Edit Row" className="capitalize">
                                            <Button variant="flat" color="warning" className="capitalize" onClick={() => handleRedirectToEdit(row, props.selectedCategory)}>
                                                <EditIcon />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip color="danger" content="Delete Row" className="capitalize">
                                            <DeleteRowModal handleDeleteRow={handleDeleteRow} id={row._id} />
                                        </Tooltip>
                                    </>
                                ) : null}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
