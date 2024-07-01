import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { choice, months } from "./data";

const years = Array.from({ length: 30 }, (v, k) => k + 2000).map(year => ({
  label: year.toString(),
  value: year.toString(),
}));

function GrantForm() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Grant Details</h1>
      
      <Input label="Grant Name" placeholder="grantName" />
      
      <Select label="Submitted" placeholder="Yes / No">
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

      <Input label="Amount" placeholder="amount" />

      <Select label="Month" placeholder="Month">
        {months.map(month => (
          <SelectItem key={month.value} value={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="Year" placeholder="year">
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

export default GrantForm;
