import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { choice, months } from "./data";
import axios from "axios";
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function FellowshipForm() {

  const Navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      Navigate('/signin')
    }
  }, [])

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
    //toast
    try {
      const response = await axios.post('/api/user/form/fellowship', { formData }, { withCredentials: true });
      console.log(response)
    } catch (error) {
      if(error.response){
        console.log("something went wrong")
        //toast
      }
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>

      <div className="flex flex-col gap-6 p-4">
        <h1 className="text-3xl font-bold mb-4">Fellowship Details</h1>

        <Input label="Fellowship Name" name="fellowshipName" placeholder="Fellowship Name" className="w-full" onChange={handleUserInput} />

        <Select label="Submitted" name="submitted" placeholder="Yes / No" className="w-full" onChange={handleUserInput}>
          {choice.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select label="Granted" name="granted" placeholder="Yes / No" className="w-full" onChange={handleUserInput}>
          {choice.map(option => (
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

        <div className="flex justify-start mt-4">
          <Button color="primary" size="sm" type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}

export default FellowshipForm;
