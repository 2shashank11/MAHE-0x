import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { useState } from "react";
import { author, choice, months, quartiles } from "./data";

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function JournalForm() {

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

      <div className="flex flex-col gap-6 p-4">
        <h1 className="font-sans font-semibold text-6xl">Journal Details</h1>

        <Input label="Title" name="title" placeholder="Title" className="w-full" onChange={handleUserInput}/>
        <Input label="Journal Name" name="journalName" placeholder="Journal Name" className="w-full" onChange={handleUserInput}/>

        <Select label="Quartile" name="quartile" placeholder="Select Quartile" className="w-full" onChange={handleUserInput}>
          {quartiles.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select label="WOS" name="wos" laceholder="Yes / No" className="w-full" onChange={handleUserInput}>
          {choice.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select label="Authorship" name="authorship" placeholder="Author / Co-Author" className="w-full" onChange={handleUserInput}>
          {author.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select label="Month" name="month" placeholder="Month" className="w-full" onChange={handleUserInput}>
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

export default JournalForm;
