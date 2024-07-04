import { Button, Input, Select, SelectItem, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { author, choice, months, quartiles } from "./data";
import axios from "axios";
import { AuthContext } from '../../contexts/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from "../../components/Nav";

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
      const response = await axios.post('/api/user/form/journal', { formData }, { withCredentials: true });
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
        <h1 className="font-sans font-semibold text-4xl">Journal Details</h1>
        <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="flex justify-end mt-4 w-full">
            <Button className="w-1/6" color="primary" size="md" type="submit">Save</Button>
          </div>
          <Input
            label="Title"
            name="title"
            placeholder="Title"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          />
          <Input
            label="Journal Name"
            name="journalName"
            placeholder="Journal Name"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          />

          <Select
            label="Quartile"
            name="quartile"
            placeholder="Select Quartile"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          >
            {quartiles.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="WOS"
            name="wos"
            placeholder="Yes / No"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          >
            {choice.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="Authorship"
            name="authorship"
            placeholder="Author / Co-Author"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          >
            {author.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="Month"
            name="month"
            placeholder="Month"
            fullWidth
            onChange={handleUserInput}
            className="mb-4"
          >
            {months.map((month) => (
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
            fullWidth
            onSelect={handleUserInput}
            className="mb-4"
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>

          
        </form>
      </div>
    </div>
  </>
  );
}

export default JournalForm;
