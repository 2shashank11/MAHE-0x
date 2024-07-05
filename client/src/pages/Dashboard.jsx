import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Dash from '../components/Dash'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '@nextui-org/react'


function Dashboard() {
  
  const {authUser} = useContext(AuthContext)
  
  const Navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      Navigate('/signin')
    }
  }, [])

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
      <Dash />
    </>
  )
}

export default Dashboard