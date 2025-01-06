import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteRowModal from "./DeleteRowModal";
import { AuthContext } from "../contexts/AuthContext";
import { Button, Tooltip, Popover, PopoverContent, PopoverTrigger, cn, Listbox, ListboxItem } from "@nextui-org/react";
import { AddNoteIcon, ListboxWrapper } from './assets/RowDropdown';
import { EditDocumentIcon, DeleteDocumentIcon } from './assets/RowDropdown';


export default function AchievementsTable({ filter, achievements, controls, setAchievements }) {
    const { authUser } = useContext(AuthContext);
    const [currentHead, setCurrentHead] = useState(["No data to display"]);
    const [filteredData, setFilteredData] = useState(achievements);

    useEffect(() => {
        if (achievements && achievements.length > 0) {

            const formatMonthYear = (date) => {
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                return new Date(date).toISOString('en-US', options).split('T')[0];
            };

            const updatedAchievements = achievements.map(item => {
                const { _id, period, periodFrom, periodTo, ...rest } = item;

                const updatedItem = {
                    ...rest,
                    ...(period ? { period: formatMonthYear(period) } : {}),
                    ...(periodFrom ? { periodFrom: formatMonthYear(periodFrom) } : {}),
                    ...(periodTo ? { periodTo: formatMonthYear(periodTo) } : {}),
                };
                return updatedItem;
            });

            const keys = Object.keys(updatedAchievements[0]);
            setCurrentHead(keys);

            setFilteredData(updatedAchievements);
        }

        else{
            setCurrentHead(["No data to display"]);
            setFilteredData([]);
        }
    }, [achievements]);

    // useEffect(() => {
    //   setAchievements([]);
    //   setCurrentHead(["Apply Filter to view data"]);
    // }, [filter])
    


    const navigate = useNavigate();

    const handleRedirectToEdit = (row, category) => {
        const selectedCategory = category.values().next().value.toLowerCase();
        console.log(row)
        navigate(`/user/form/${selectedCategory}`, { state: { data: row, category: selectedCategory } });
    };

    const handleDeleteRow = async (index) => {
        try {
            console.log(index, achievements[index]);
            const id = achievements[index]?._id;
            console.log(achievements[index]);
            const category = filter.category.values().next().value;
            const response = await axios.delete(`/api/user/form/${category.toLowerCase()}/${id}`);
            setFilteredData((filteredData) => filteredData.filter(i => i._id !== id));
            setAchievements((achievements) => achievements.filter(i => i._id !== id));
        } catch (error) {
            console.error("Error deleting row:", error);
        }
    };

    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <div className="overflow-x-auto p-5">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        {currentHead.map((head) => (
                            <th key={head} className="py-3 px-4 text-left font-medium text-gray-700 border-b">{head}</th>
                        ))}
                        <th className="py-3 px-4 text-left font-medium text-gray-700 border-b"></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {currentHead.map((column) => (
                                <td key={column} className="py-3 px-4 border-b">
                                    {row[column] !== undefined ? row[column] : 'N/A'}
                                </td>
                            ))}
                            <td className="py-3 px-4 border-b text-center">
                                {((authUser?.role === 'ADMIN' || !controls) || controls) ? (
                                    <>
                                        <Popover placement="left">
                                            <PopoverTrigger>
                                                <Button color="default" className="rounded-full">:</Button>
                                            </PopoverTrigger>
                                            <PopoverContent>

                                                <ListboxWrapper>
                                                    <Listbox aria-label="Listbox menu with icons" variant="faded">
                                                        <ListboxItem
                                                            key="edit"
                                                            showDivider
                                                            startContent={<EditDocumentIcon className={iconClasses} />}
                                                        >
                                                            <Button
                                                                variant="flat"
                                                                color="white"
                                                                className="capitalize"
                                                                onClick={() => handleRedirectToEdit(achievements[rowIndex], filter.category)}
                                                            >
                                                                Edit
                                                            </Button>
                                                        </ListboxItem>

                                                        <ListboxItem
                                                            key="delete"
                                                            className="text-danger"
                                                            color="danger"
                                                            startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
                                                        >
                                                            <DeleteRowModal handleDeleteRow={() => handleDeleteRow(rowIndex)} id={rowIndex} />
                                                        </ListboxItem>
                                                    </Listbox>
                                                </ListboxWrapper>

                                                {/* <Tooltip color="warning" content="Edit Row" className="capitalize">
                                                    <Button variant="flat" color="warning" className="capitalize" onClick={() => handleRedirectToEdit(row, filter.category)}>
                                                    <EditIcon />
                                                    </Button>
                                                    </Tooltip>
                                                    <Tooltip color="danger" content="Delete Row" className="capitalize">
                                                    <DeleteRowModal handleDeleteRow={handleDeleteRow} id={rowIndex} />
                                                    </Tooltip> */}
                                            </PopoverContent>
                                        </Popover>

                                    </>
                                ) : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
