import React from "react";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";

export default function Filters({ handleCategoryChange }) {

    const category = ["Conference", "Fellowship", "Grant", "Journal", "Patent", "Publication"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <>
            <div className="flex flex-col items-center p-5 w-full bg-gray-100">
                <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Category</label>
                            <Select placeholder="Select" className="w-full" aria-label="Category" onChange={handleCategoryChange}>
                                {category.map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Search</label>
                            <Input isClearable className="w-full" placeholder="Search..." aria-label="Search" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">From</label>
                            <div className="flex gap-2">
                                <Select label="Month" placeholder="Select" className="w-full" aria-label="From Month">
                                    {months.map((month) => (
                                        <SelectItem key={month}>
                                            {month}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Input type="number" label="Year" className="w-full" placeholder="Year" aria-label="From Year" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">To</label>
                            <div className="flex gap-2">
                                <Select label="Month" placeholder="Select" className="w-full" aria-label="To Month">
                                    {months.map((month) => (
                                        <SelectItem key={month}>
                                            {month}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Input type="number" label="Year" className="w-full" placeholder="Year" aria-label="To Year" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button color="primary">
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
