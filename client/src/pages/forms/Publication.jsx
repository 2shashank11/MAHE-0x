import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { months, bookTypes } from "./data"; // Import bookTypes
import axios from "axios";
import { AuthContext } from '../../contexts/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from "../../components/Nav";

const years = [];
for (let year = 2000; year <= new Date().getFullYear() + 1; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

function Publication() {

  const Navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      Navigate('/signin')
    }
  }, [])

  const [formData, setFormData] = useState({});

  const location = useLocation()
  useEffect(() => {
    setFormData(location?.state?.data)
    console.log(location?.state?.data)
  }, [])

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
      const response = await axios.post('/api/user/form/publication', { formData }, { withCredentials: true });
      console.log(response)
    } catch (error) {
      if (error.response) {
        console.log("something went wrong")
        //toast
      }
    }
  }

  return (
    <>
    <Nav />
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <div className="w-full p-8">
        <h1 className="font-sans font-semibold text-4xl">Publication Details</h1>
        
        <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="flex justify-end mt-4">
            <Button className="w-1/6" color="primary" size="md" type="submit">Save</Button>
          </div>
          <Input
            label="Book Name"
            name="bookName"
            placeholder="Book Name"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          />
          <Input
            label="ISBN"
            name="isbn"
            placeholder="Enter ISBN"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          />
          <Select
            name="type"
            label="Type"
            placeholder="Select Type"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          >
            {bookTypes.map(type => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Publication Year"
            name="publication year"
            placeholder="Select Year"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          >
            {years.map(year => (
              <SelectItem key={year.value} value={year.value}>
                {year.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Month"
            name="month"
            placeholder="Select Month"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          >
            {months.map(month => (
              <SelectItem key={month.value} value={month.value}>
                {month.label}
              </SelectItem>
            ))}
          </Select>
          <Autocomplete
            label="Year"
            name="year"
            placeholder="Select Year"
            defaultItems={years}
            onSelect={handleUserInput}
            className="mb-4"
          >
            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
          </Autocomplete>
          
        </form>
      </div>
    </div>
  </>
  );
}

export default Publication;
