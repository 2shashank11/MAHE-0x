import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { choice, months } from "./data";

const years = Array.from({ length: 30 }, (v, k) => k + 2000).map(year => ({
  label: year.toString(),
  value: year.toString(),
}));

function FellowshipForm() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-3xl font-bold mb-4">Fellowship Details</h1>
      
      <Input label="fellowshipName" placeholder="fellowshipName" className="w-full" />

      <Select label="Submitted" placeholder="Yes / No" className="w-full">
        {choice.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="Granted" placeholder="Yes / No" className="w-full">
        {choice.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="Month" placeholder="Month" className="w-full">
        {months.map(month => (
          <SelectItem key={month.value} value={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="year" placeholder="year" className="w-full">
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

export default FellowshipForm;
