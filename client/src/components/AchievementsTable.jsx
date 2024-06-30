import React, { useState, useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

// const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

export default function AchievementsTable(props) {
    //   const [selectedColor, setSelectedColor] = useState("default");
    const selectedColor = "warning";

    const [currentHead, setCurrentHead] = useState(["No Category Selected"]);
    const [tableData, setTableData] = useState([]);

    const conferenceHead = ["Profile", "Name", "MAHE-ID", "Conference Name", "Paper Title", "Region", "Indexed", "Month-Year"]
    const fellowshipHead = ["Profile", "Name", "MAHE-ID", "Fellowhip Name", "Submitted", "Granted", "Month-Year"]
    const grantHead = ["Profile", "Name", "MAHE-ID", "Grant Name", "Submitted", "Granted", "Amount", "Month-Year"]
    const journalHead = ["Profile", "Name", "MAHE-ID", "Title", "Journal Name", "Quartile", "WOS", "Authorship", "Month-Year"]
    const patentHead = ["Profile", "Name", "MAHE-ID", "Filed", "Published", "Granted", "Region", "Country", "Month-Year"]
    const publicationHead = ["Profile", "Name", "MAHE-ID", "Book Name", "Type", "ISBN", "Publish Year", "Month-Year"]

    const dummyData = {
        conference: [
            { Profile: "Profile 1", Name: "John Doe", "MAHE-ID": "123", "Conference Name": "Conf A", "Paper Title": "Title A", Region: "Region A", Indexed: "Yes", "Month-Year": "Jan-2023" },
            { Profile: "Profile 2", Name: "Jane Smith", "MAHE-ID": "124", "Conference Name": "Conf B", "Paper Title": "Title B", Region: "Region B", Indexed: "No", "Month-Year": "Feb-2023" }
        ],
        fellowship: [
            { Profile: "Profile 1", Name: "John Doe", "MAHE-ID": "123", "Fellowship Name": "Fellowship A", Submitted: "Yes", Granted: "No", "Month-Year": "Mar-2023" },
            { Profile: "Profile 2", Name: "Jane Smith", "MAHE-ID": "124", "Fellowship Name": "Fellowship B", Submitted: "No", Granted: "Yes", "Month-Year": "Apr-2023" }
        ],
        grant: [
            { Profile: "Profile 1", Name: "John Doe", "MAHE-ID": "123", "Grant Name": "Grant A", Submitted: "Yes", Granted: "No", Amount: "$1000", "Month-Year": "May-2023" },
            { Profile: "Profile 2", Name: "Jane Smith", "MAHE-ID": "124", "Grant Name": "Grant B", Submitted: "No", Granted: "Yes", Amount: "$2000", "Month-Year": "Jun-2023" }
        ],
        journal: [
            { Profile: "Profile 1", Name: "John Doe", "MAHE-ID": "123", Title: "Title A", "Journal Name": "Journal A", Quartile: "Q1", WOS: "Yes", Authorship: "First", "Month-Year": "Jul-2023" },
            { Profile: "Profile 2", Name: "Jane Smith", "MAHE-ID": "124", Title: "Title B", "Journal Name": "Journal B", Quartile: "Q2", WOS: "No", Authorship: "Second", "Month-Year": "Aug-2023" }
        ],
        patent: [
            { Profile: "Profile 1", Name: "John Doe", "MAHE-ID": "123", Filed: "Yes", Published: "No", Granted: "Yes", Region: "Region A", Country: "Country A", "Month-Year": "Sep-2023" },
            { Profile: "Profile 2", Name: "Jane Smith", "MAHE-ID": "124", Filed: "No", Published: "Yes", Granted: "No", Region: "Region B", Country: "Country B", "Month-Year": "Oct-2023" }
        ],
        publication: [
            { Profile: "Profile 1", Name: "John Doe", "MAHE-ID": "123", "Book Name": "Book A", Type: "Type A", ISBN: "123-456", "Publish Year": "2023", "Month-Year": "Nov-2023" },
            { Profile: "Profile 2", Name: "Jane Smith", "MAHE-ID": "124", "Book Name": "Book B", Type: "Type B", ISBN: "789-012", "Publish Year": "2024", "Month-Year": "Dec-2023" }
        ]
    };

    useEffect(() => {
        switch (props.selectedCategory) {
            case "Conference":
                setCurrentHead(conferenceHead);
                setTableData(dummyData.conference);
                break;
            case "Fellowship":
                setCurrentHead(fellowshipHead);
                setTableData(dummyData.fellowship);
                break;
            case "Grant":
                setCurrentHead(grantHead);
                setTableData(dummyData.grant);
                break;
            case "Journal":
                setCurrentHead(journalHead);
                setTableData(dummyData.journal);
                break;
            case "Patent":
                setCurrentHead(patentHead);
                setTableData(dummyData.patent);
                break;
            case "Publication":
                setCurrentHead(publicationHead);
                setTableData(dummyData.publication);
                break;
            default:
                setCurrentHead(["No Category Selected"]);
                setTableData([]);
                break;
        }
    }, [props.selectedCategory])

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
                </TableHeader>
                <TableBody>
                    {tableData.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {currentHead.map((column) => (
                                <TableCell key={column}>{row[column]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
