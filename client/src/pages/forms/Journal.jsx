import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { author, choice, months, quartiles } from "./data";
import axios from "axios";
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function JournalForm() {

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
      const response = await axios.post('/api/user/form/journal', { formData }, { withCredentials: true });
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
        <h1 className="text-3xl font-bold mb-4">Journal Details</h1>

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

        <div className="flex justify-start mt-4">
          <Button color="primary" size="sm" type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}

export default JournalForm;
