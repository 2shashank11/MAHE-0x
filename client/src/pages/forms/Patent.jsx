import {
  Button,
  Input,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem
} from "@nextui-org/react";
import React, { useState } from "react";
import { choice, months } from "./data";

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function PatentForm() {

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

  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (e) => {
    handleUserInput(e);
    setSelectedRegion(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-3xl font-bold mb-4">Patent Details</h1>

        <Select label="Filed" name="filed" placeholder="Yes / No" onChange={handleUserInput}>
          {choice.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select label="Published" name="published" placeholder="Yes / No" onChange={handleUserInput}>
          {choice.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select label="Granted" name="granted" placeholder="Yes / No" onChange={handleUserInput}>
          {choice.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select
          name="region"
          label="Region"
          placeholder="Indian / Other Country"
          onChange={handleRegionChange}
        >
          <SelectItem key="Indian" value="Indian">
            Indian
          </SelectItem>
          <SelectItem key="Other Country" value="Other Country">
            Other Country
          </SelectItem>
        </Select>

        {/* Show Country field only if selected region is "Other Country" */}
        {selectedRegion === "Other Country" && (
          <Input label="Country" name="country" placeholder="Country" onChange={handleUserInput}/>
        )}

        <Select label="Month" name="month" placeholder="Month" onChange={handleUserInput}>
          {months.map((month) => (
            <SelectItem key={month.value} value={month.value}>
              {month.label}
            </SelectItem>
          ))}
        </Select>

        <Autocomplete label="Year" name="year" placeholder="Year" defaultItems={years} onSelect={handleUserInput}>
          {(item) => (
            <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
          )}
        </Autocomplete>

        <div className="flex justify-start mt-4">
          <Button color="primary" size="sm" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default PatentForm;
