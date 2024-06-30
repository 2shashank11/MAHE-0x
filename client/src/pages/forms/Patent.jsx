import { Card, Image, Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { choice } from "./data";

function Patent() {
  return (
    <div className="grid grid-cols-5 gap-6 m-4">
      <h1 className="text-3xl font-bold col-span-5">Patent Details</h1>

      <Card
        isFooterBlurred
        radius="lg"
        className="border-none col-span-2 flex flex-col max-w-xs"
      >
        <Image
          alt="Profile Picture"
          className="object-cover"
          height={200}
          src="https://nextui.org/images/hero-card.jpeg"
          width={200}
        />
        <Button color="primary" className="mt-4">Upload Image</Button>
      </Card>

      <div className="col-span-3 flex flex-col gap-4">
        <h2>Patent Name</h2>
        <Input label="Enter title" className="w-60" />

        <div className="flex flex-wrap gap-4 mt-5">
          <div className="flex flex-col w-44">
            <h2>Filed</h2>
            <Select
              items={choice}
              label="filed"
              className="w-full"
            >
              {(choice) => <SelectItem>{choice.label}</SelectItem>}
            </Select>
          </div>
          <div className="flex flex-col w-44">
            <h2>published</h2>
            <Select
              items={choice}
              label="published"
              className="w-full"
            >
              {(choice) => <SelectItem>{choice.label}</SelectItem>}
            </Select>
          </div>
          <div className="flex flex-col w-44">
            <h2>Granted</h2>
            <Select
              items={choice}
              label="granted"
              className="w-full"
            >
              {(choice) => <SelectItem>{choice.label}</SelectItem>}
            </Select>
          </div>
        </div>

        <div className="mt-5">
          <h2>Describe your Patent details (30-50 words)</h2>
          <Textarea label="Description" className="w-60 h-40" />
        </div>
      </div>

      <div className="col-span-5 flex justify-center mt-5">
        <Button color="primary">Save and Proceed</Button>
      </div>
    </div>
  );
}

export default Patent;
