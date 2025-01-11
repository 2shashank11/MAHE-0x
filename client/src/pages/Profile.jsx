import React, { useContext, useState, useEffect } from 'react'
import Nav from '../components/Nav'
import PersonalDetails from '../components/PersonalDetails'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '@nextui-org/react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

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
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name === "firstName" || name === "middleName" || name === "lastName") {
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
    if(!formData) return
    setIsLoading(true)
    console.log("saving profile")
    console.log(formData)
    try {
      const response = await axios.patch(`/api/user/update-profile/${authUser._id}`, formData)
      console.log(response)
      setAuthUser((prevAuthUser) => ({
        ...prevAuthUser,
        ...formData,
      }));
      toast.success("Profile updated successfully",
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration: 2000,
        }
      );
      setFormData({})
    } catch (error) {
      console.log(error)
      toast.error(String(error.response.data) || String(error),
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration: 2000,
        }
      );
    }
    setIsLoading(false)
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
        {isLoading
          ?
          <div className="flex justify-center items-center h-96 w-full">
            <Spinner size="large" className="" />
          </div>
          :
          <PersonalDetails authUser={authUser} setAuthUser={setAuthUser} formData={formData} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile} />
        }

      </div>
    </>
  )
}

export default Profile