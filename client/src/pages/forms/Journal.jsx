import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { author, choice, months, quartiles } from "./data";

const years = Array.from({ length: 30 }, (v, k) => k + 2000).map(year => ({
  label: year.toString(),
  value: year.toString(),
}));

function JournalForm() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-3xl font-bold mb-4">Journal Details</h1>
      
      <Input label="title" placeholder="title" className="w-full" />
      <Input label="journalName" placeholder="journalName" className="w-full" />

      <Select label="quartile" placeholder="Select quartile" className="w-full">
        {quartiles.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="wos" placeholder="Yes / No" className="w-full">
        {choice.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      <Select label="authorship" placeholder="Author / Co-Author" className="w-full">
        {author.map(option => (
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

export default JournalForm;
