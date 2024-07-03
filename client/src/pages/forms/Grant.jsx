import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { useState } from "react";
import { choice, months } from "./data";

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function GrantForm() {

  const [formData, setFormData] = useState({});

  const handleUserInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.region === "Indian") formData.country = "India"
    console.log(formData);
  }

  return (
    <div className="flex justify-end items-center min-h-screen p-4">
      <form onSubmit={handleFormSubmit} className="w-1/2">
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-sans font-semibold text-6xl">Grant Details</h1>

        <Input label="Grant Name" name="grantName" placeholder="grantName" onChange={handleUserInput}/>

        <Select label="Submitted" name="submitted" placeholder="Yes / No" onChange={handleUserInput}>
          {choice.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select label="Granted" name="granted" placeholder="Yes / No" onChange={handleUserInput}>
          {choice.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Input label="Amount" name="amount" placeholder="amount" onChange={handleUserInput}/>

        <Select label="Month" name="month" placeholder="Month" onChange={handleUserInput}>
          {months.map(month => (
            <SelectItem key={month.value} value={month.value}>
              {month.label}
            </SelectItem>
          ))}
        </Select>

        <Autocomplete
        name="year"
          label="Year"
          placeholder="Year"
          defaultItems={years}
          onSelect={handleUserInput}
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>

        <div className="flex justify-start mt-4 w-full">
            <Button className="w-1/4" color="primary" size="md" type="submit">Submit</Button>
          </div>
      </div>
    </form>
    </div>
  );
}

export default GrantForm;
