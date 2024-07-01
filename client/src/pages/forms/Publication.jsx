import React, { useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { months, bookTypes } from "./data"; // Import bookTypes

// Generate year options from 2000 to 2029
const years = Array.from({ length: 30 }, (v, k) => k + 2000).map(year => ({
  label: year.toString(),
  value: year.toString(),
}));

function Publication() {
  const [bookType, setBookType] = useState("");

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Publication Details</h1>

      <Input label="Book Name" placeholder="Enter book name" />

      <Select
        label="Type"
        placeholder="Select type"
        onValueChange={setBookType}
      >
        {bookTypes.map(type => (
          <SelectItem key={type.value} value={type.value}>
            {type.label}
          </SelectItem>
        ))}
      </Select>

      <Input label="ISBN" placeholder="Enter ISBN" />

      <Input label="Publish Year" placeholder="Enter publish year" />

      <Select label="Month" placeholder="Select month">
        {months.map(month => (
          <SelectItem key={month.value} value={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="Year" placeholder="Select year">
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

export default Publication;
