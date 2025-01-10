import React, { useContext, useState, useEffect } from 'react'
import Nav from '../components/Nav'
import PersonalDetails from '../components/PersonalDetails'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '@nextui-org/react'
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
    
    if(name==="firstName" || name==="middleName" || name==="lastName") {
      setFormData((prevData) => ({
        ...prevData,
        name: {
          ...prevData.name,
          [name]: value,
        },
      }))
      return
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSaveProfile() {
    // e.preventDefault()
    console.log("saving profile")
    console.log(formData)
    try {
      const response = await axios.patch(`/api/user/update-profile/${authUser._id}`, formData)
      console.log(response)
      setAuthUser(formData)
    } catch (error) {
      console.log(error)
    }
    
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authUser) {
      setLoading(false);
    }
  }, [authUser]);
  
  if (loading) {
    return <>
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
      </div>
    </>
  }

  return (
    <>
      <Nav />
      <div className='h-screen'>
      <PersonalDetails authUser={authUser} setAuthUser={setAuthUser} formData={formData} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile}/>

      </div>
    </>
  )
}

export default Profile