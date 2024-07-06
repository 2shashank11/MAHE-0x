import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import axios from 'axios'

export function VerifyEmail({ email, handleVerifyEmailAndSentOTP, handleEmailChange, setFormState }) {

  // async function handleVerifyEmailAndSentOTP(e) {
  //   e.preventDefault()
  //   console.log(email)

  //   try {
  //     const response = await axios.post('/api/forgot-password/send-otp', { email })
  //     console.log(response)
  //     if (response.status == 200) { setFormState("verifyOTP") }
  //     if (response.error) {
  //       console.log(response.error.data)
  //     }
  //   } catch (error) {
  //     console.log(error.response)
  //   }
  // }

  return (

    <form onSubmit={handleVerifyEmailAndSentOTP}>
      <div className="flex flex-col items-center justify-center px-24 pt-60">
        <h1 className="font-semibold text-5xl">Forgot Password?</h1>
        <p className="pt-12 font-semibold text-gray-500">
          No worries, we'll reset your password and help you create a
          new one.
        </p>

        <div className="w-full max-w-lg pt-12 text-gray-400">
          <Input
            onChange={handleEmailChange}
            required
            type="email"
            label="Email"
            color="default"
            variant="bordered"
            placeholder="prof@manipal.edu"
          />
        </div>
        <div className="w-full max-w-lg pt-6">

          <Button
            type="submit"
            variant="solid"
            color="success"
            className="w-full h-12 text-medium text-white font-semibold"
            size="md"
            radius="sm"
            style={{ width: "calc(100%)" }}
          >
            Reset Password
          </Button>
        </div>

        <div className="pt-10">
          <Link to="/signin" className="block-w-full">
            <h3 className="font-medium text-slate-400">← Back to Signin</h3>
          </Link>
        </div>
      </div>
    </form>
  );
}


export function VerifyOTP({ email, otp, handleVerifyEmailAndSentOTP, handleOTPChange, setFormState }) {

  async function handleVerifyOTP(e) {
    e.preventDefault()
    console.log("VERIFYOTP", email, otp)
    try {
      const response = await axios.post('/api/forgot-password/verify-otp', { email, otp })
      //loading
      if (response.status == 200) { setFormState("passwordReset") }
      console.log(response)
      if (response.error) {
        console.log(response.error.data)
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  function handleResendOTP(e) {
    handleVerifyEmailAndSentOTP(e)
  }

  return (
    <form onSubmit={handleVerifyOTP}>
      <div className="flex flex-col items-center justify-center px-24 pt-60">
        <h1 className="font-semibold text-5xl">Check your email?</h1>
        <p className="pt-12 font-semibold text-gray-500">
          Enter the OTP sent to your inbox.
        </p>
        <div className="w-full max-w-md pt-6">
          <Input required type="number" label="Enter OTP" name="otp" onChange={handleOTPChange} />
        </div>
        <div className="w-full max-w-md pt-4">
          <Button
            type="submit"
            variant="solid"
            color="success"
            className="w-full h-12  text-medium text-white font-semibold"
            size="md"
            radius="sm"
            style={{ width: "calc(100%)" }}
          >
            Proceed
          </Button>
        </div>
        <div className="pt-10">
          <Link to="/signin" className="block-w-full">
            <p className="font-medium text-black-600">
              Didn't receive the email?
            </p>
            <p className="font-medium text-purple-600" onClick={handleResendOTP}>Click to resend</p>
          </Link>
        </div>
        <div className="pt-10">
          <Link to="/signin" className="block-w-full">
            <h3 className="font-medium text-slate-400">← Back to Signin</h3>
          </Link>
        </div>
      </div>
    </form>
  );
}

export function PasswordReset({ email, setFormState }) {

  const [password, setPassword] = useState({})

  function handlePasswordChange(e) {
    setPassword({ ...password, [e.target.name]: e.target.value })
  }

  async function handlePasswordReset(e) {
    e.preventDefault()
    console.log("PASSWORD RESET", email, password)
    if (password.newPassword !== password.confirmPassword) {
      console.log("Passwords doesnot match")
      //toast
      return;
    }
    else {
      try {
        const response = await axios.post('/api/reset-password', { email, newPassword: password.newPassword, confirmPassword: password.confirmPassword })
        console.log(response)
        if (response.status == 200) { setFormState("resetSuccessful") }
      } catch (error) {
        console.log(error.response)
      }
    }
  }

  return (
    <form onSubmit={handlePasswordReset}>
      <div className="flex flex-col items-center justify-center px-24 pt-60">
        <h1 className="font-semibold text-5xl">Set new Password.</h1>
        <p className="pt-12 font-semibold text-gray-500">
          Your new password must be different to previously used passwords.
        </p>
        <div className="w-full max-w-md pt-12 text-gray-400">
          <Input
            onChange={handlePasswordChange}
            name="newPassword"
            required
            isRequired
            type="text"
            label="New Password"
            description="Password should be mix of A-Z and 0-9 with special characters"
          />
        </div>
        <div className="w-full max-w-md pt-4 text-gray-400">
          <Input
            onChange={handlePasswordChange}
            name="confirmPassword"
            required
            isRequired
            type="text"
            label="Verify Password"
          />
        </div>

        <div className="w-full max-w-md pt-6">
          <Button
            type="submit"
            variant="solid"
            color="success"
            className="w-full h-12 text-medium text-white font-semibold"
            size="md"
            radius="sm"
            style={{ width: "calc(100%)" }}
          >
            Reset Password
          </Button>
        </div>
        <div className="pt-10">
          <Link to="/signin" className="block-w-full">
            <h3 className="font-medium text-slate-400">← Back to Signin</h3>
          </Link>
        </div>
      </div>
    </form>
  );
}

export function ResetSuccessful() {
  return (
    <div className="flex flex-col items-center justify-center px-24 pt-60">
      <h1 className="font-semibold text-5xl">Password Reset Successfully!</h1>
      <div className="pt-10">
        <Link to="/signin" className="block-w-full">
          <Button
            // onClick={(e) => { e.preventDefault() }}
            variant="solid"
            color="primary"
            className="font-medium text-slate-400"
          >
            ← Back to Signin
          </Button>
        </Link>
      </div>
    </div>
  );
}
