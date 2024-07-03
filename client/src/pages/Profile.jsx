import React, {useContext, useEffect} from 'react'
import Nav from '../components/Nav'
import PersonalDetails from '../components/PersonalDetails'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const Navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      Navigate('/signin')
    }
  }, [])

  return (
    <>
      <Nav />
      <PersonalDetails />
    </>
  )
}

export default Profile