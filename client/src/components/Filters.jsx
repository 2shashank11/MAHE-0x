import React from "react";
import { Select, SelectItem, Input, Button, Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function Filters({ handleCategoryChange, handleFilterInput, setFilter, setSelectedCategory, selectedCategory }) {

    const category = ["None", "Conference", "Fellowship", "Grant", "Journal", "Patent", "Publication"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const years = [];
    for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
        years.push({ value: year.toString(), label: year.toString() });
    }

    function clearFilter() {
        setFilter({
            fromMonth: "",
            fromYear: "",
            toMonth: "",
            toYear: "",
        });
        setSelectedCategory("None");
    }

    return (
        <>
            <div className="flex flex-col items-center p-5 w-screen">
                <div className="bg-gray-300/10 backdrop-blur-sm p-2 rounded-lg shadow-lg w-4/5 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Category</label>
                            <Select placeholder="Select" className="w-full" aria-label="Category" defaultSelectedKeys={[selectedCategory]} onChange={handleCategoryChange}>
                                {category.map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <div className="flex flex-col">
                            {/* <label className="mb-2 font-semibold">Search</label>
                            <Input isClearable className="w-full" placeholder="Search..." aria-label="Search" /> */}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">From</label>
                            <div className="flex gap-2">
                                <Select label="Month" name="fromMonth" placeholder="Select" className="w-full" aria-label="From Month" onChange={handleFilterInput}>
                                    {months.map((month) => (
                                        <SelectItem key={month}>
                                            {month}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Autocomplete
                                    name="fromYear"
                                    label="Year"
                                    placeholder="Year"
                                    defaultItems={years}
                                    onSelect={handleFilterInput}
                                >
                                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                </Autocomplete>
                                {/* <Input type="number" label="Year" className="w-full" placeholder="Year" aria-label="From Year" /> */}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">To</label>
                            <div className="flex gap-2">
                                <Select label="Month" name="toMonth" placeholder="Select" className="w-full" aria-label="To Month" onChange={handleFilterInput}>
                                    {months.map((month) => (
                                        <SelectItem key={month}>
                                            {month}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Autocomplete
                                    name="toYear"
                                    label="Year"
                                    placeholder="Year"
                                    defaultItems={years}
                                    onSelect={handleFilterInput}
                                >
                                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                </Autocomplete>
                                {/* <Input type="number" label="Year" className="w-full" placeholder="Year" aria-label="To Year" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button color="default" onClick={clearFilter}>
                            Clear Filters
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
