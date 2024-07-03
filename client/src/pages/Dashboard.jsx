import React, { useContext, useEffect } from 'react'
import Nav from '../components/Nav'
import Dash from '../components/Dash'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  
  const Navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      Navigate('/signin')
    }
  }, [])



  return (
    <>
      <Nav />
      <Dash />
    </>
  )
}

export default Dashboard