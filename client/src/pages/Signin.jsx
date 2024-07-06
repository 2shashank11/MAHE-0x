import React, { useState, useContext, useEffect } from "react";
import { Card, CardBody, Image, Button, Input } from "@nextui-org/react";
import PasswordButtons from "../components/PasswordButtons";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";


export default function Signin() {

  const Navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      Navigate('/user/dashboard')
    }
  }, [])

  const { setIsLoggedIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUserSignin = async (e) => {
    e.preventDefault();
    // console.log(formData);

    try {
      const response = await axios.post('/api/signin', { formData }, { withCredentials: true })
      console.log(response)
      localStorage.setItem("isLoggedIn", true)
      toast.success('Logged in successfully!',
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration: 2000,
        }
      );
      setIsLoggedIn(true)
      Navigate('/user/dashboard')

    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log(error.response.data)
        }
        else {
          console.log("Something went wrong")
        }
      }
    }
  };

  return (
    <div className="px-24 pt-20 min-h-screen flex flex-col">
      <h1 className="font-sans font-semibold text-7xl">Sign In</h1>
      <div className="flex flex-col md:flex-row gap-8 pt-10">
        <Card className="py-4" isBlurred shadow="sm">
          <CardBody className="overflow-hidden py-2">
            <Image
              alt="learners"
              className="object-cover rounded-xl w-96 h-96"
              src={"/signupcoverpage.png"}
            />
          </CardBody>
        </Card>

        <div className="flex flex-1 justify-center items-center">
          <form onSubmit={handleUserSignin} className="w-1/2">

            <div className="flex flex-col gap-8 p-4 w-full">
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-4">Email</h2>
                <Input
                  required
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="prof@manipal.edu"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-4">Password</h2>
                <PasswordButtons handlePasswordInput={(e) => handleInputChange(e)} />
              </div>
              <Button type="submit" variant="solid" color="success" className="mt-4 w-1/4">
                Sign In
              </Button>
              <Link to="/forgot-password" className="text-blue-500">Forgot Password...?</Link>
              <Link to="/signup" className="text-blue-500">Don't have an account? Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
