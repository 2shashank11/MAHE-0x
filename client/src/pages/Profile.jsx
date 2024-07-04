import React, { useContext, useState, useEffect } from 'react'
import Nav from '../components/Nav'
import PersonalDetails from '../components/PersonalDetails'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Profile() {

  const { authUser, setAuthUser } = useContext(AuthContext)

  const Navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      Navigate('/signin')
    }
    // console.log(authUser)
  }, [])

  const [formData, setFormData] = useState(authUser)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSaveProfile(e) {
    e.preventDefault()
    console.log(formData)
    try {
      const response = await axios.patch(`/api/user/update-profile/${authUser._id}`, formData)
      console.log(response)
      setAuthUser(formData)
    } catch (error) {
      console.log(error)
    }
    
  }


  return (
    <>
      <Nav />
      <PersonalDetails authUser={authUser} formData={formData} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile}/>
    </>
  )
}

export default Profile