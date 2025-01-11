import React, { useEffect, useState } from "react";
import {
    Select,
    SelectItem,
    Button,
    DatePicker,
    Divider,
} from "@nextui-org/react";

export default function Filters({ setFilter, filter, applyFilter, downloadData, achievements, setAchievements }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const category = [
        // "None",
        "Conference",
        "Fellowship",
        "Grant",
        "Journal",
        "Patent",
        "Book_BookChapter",
    ];

    function clearFilter() {
        setFilter({
            ...filter,
            fromDate: null,
            toDate: null,
            category: new Set([]),
        });
        setAchievements([]);
    }


    return (
        <div className="flex flex-col items-center p-6 w-screen bg-gray-100">
            {/* Collapsible Header */}
            <div className="bg-white p-4 rounded-xl shadow-md w-4/5">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? "View" : "✕"}
                    </Button>
                </div>
                {!isCollapsed && (
                    <>
                        <form onSubmit={applyFilter}>
                            <Divider className="mt-4" />
                            <div className="mt-4">
                                {/* Category Filter */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="flex flex-col">
                                        <label className="mb-2 font-semibold">Category</label>
                                        <Select
                                            isRequired
                                            placeholder="Select a Category"
                                            aria-label="Category"
                                            selectedKeys={filter.category}
                                            onChange={(e) => { setFilter({ ...filter, category: new Set([e.target.value]) }) }}
                                            className="w-full"
                                            name="category"
                                        >
                                            {category.map((item) => (
                                                <SelectItem key={item} value={item}>
                                                    {item}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                    </div>
                                </div>
                                <Divider className="mt-6" />
                                {/* Date Range Filters */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="flex flex-col">
                                        <label className="mb-2 font-semibold">From Date</label>
                                        <DatePicker
                                            defaultValue={filter.fromDate}
                                            value={filter.fromDate}
                                            className="w-full"
                                            aria-label="From Date"
                                            placeholder="Select Start Date"
                                            onChange={(e) =>
                                                setFilter({ ...filter, fromDate: e })}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-2 font-semibold">To Date</label>
                                        <DatePicker
                                            defaultValue={filter.toDate}
                                            value={filter.toDate} 
                                            className="w-full"
                                            aria-label="To Date"
                                            placeholder="Select End Date"
                                            onChange={(e) =>
                                                setFilter({ ...filter, toDate: e })}
                                        />
                                    </div>
                                </div>
                                {/* Clear and Apply Buttons */}
                                <div className="flex justify-end mt-6 gap-4">
                                    <Button color="default" onClick={clearFilter}>
                                        Clear Filters
                                    </Button>
                                    <Button color="primary" type="submit">
                                        Apply Filters
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </>
                )}
            </div>
            {/* Download Button */}
            <div className="mt-4 w-4/5 flex justify-end">
               {(achievements?.length>0) ? <>
                <Button
                    color="success"
                    onClick={() => downloadData()}
                    >
                    Download
                </Button>
                    </> : null}
            </div>
        </div>
    );
}
