import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { regionOptions, indexedOptions, months } from "./data";
import axios from "axios";
import { AuthContext } from '../../contexts/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function Conference() {

  const Location = useLocation()
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
    console.log(formData);
    try {
      const response = await axios.post('/api/user/form/conference', { formData }, { withCredentials: true });
      console.log(response)
      //toast
    } catch (error) {
      if(error.response){
        console.log("something went wrong")
        //toast
      }
    }
  }

  useEffect(() => {
    if(Location.state?.data){
      setFormData(Location.state.data)
      console.log(Location.state.data)
    }
  }, [])
  

  return (
    <form onSubmit={handleFormSubmit}>

      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-3xl font-bold mb-4">Conference Details</h1>

        <Input label="Conference Name" name="conferenceName" placeholder="Conference Name" onChange={handleUserInput} />
        <Input label="Paper Title" name="paperTitle" placeholder="Paper Title" onChange={handleUserInput} />

        <Select label="Region" name="region" placeholder="National / International" onChange={handleUserInput}>
          {regionOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select label="Indexed" name="indexed" placeholder="Yes / No" onChange={handleUserInput}>
          {indexedOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <Select label="Month" name="month" placeholder="Month" onChange={handleUserInput}>
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

export default Conference;
