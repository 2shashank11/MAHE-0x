import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { choice, months, regionOptions } from "./data";

// Generate year options from 2000 to 2029
const years = Array.from({ length: 30 }, (v, k) => k + 2000).map(year => ({
  label: year.toString(),
  value: year.toString(),
}));

function PatentForm() {
  // State for selected region
  const [selectedRegion, setSelectedRegion] = useState("");

  // Handle region selection
  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Patent Details</h1>

      <Select label="Filed" placeholder="Yes / No">
        {choice.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="Published" placeholder="Yes / No">
        {choice.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="Granted" placeholder="Yes / No">
        {choice.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Region"
        placeholder="Indian / Other Country"
        onValueChange={handleRegionChange} // Changed to onValueChange
      >
        {regionOptions.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      {/* Show Country field only if selected region is "Other Country" */}
      {selectedRegion === "Other Country" && (
        <Input label="Country" placeholder="Country" />
      )}

      <Select label="Month" placeholder="Month">
        {months.map(month => (
          <SelectItem key={month.value} value={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="Year" placeholder="Year">
        {years.map(year => (
          <SelectItem key={year.value} value={year.value}>
            {year.label}
          </SelectItem>
        ))}
      </Select>

      <div className="flex justify-start mt-4">
        <Button color="primary" size="sm">Submit</Button>
      </div>
    </div>
  );
}

export default PatentForm;
