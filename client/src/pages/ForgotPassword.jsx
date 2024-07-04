import React, { useState } from 'react'
import { VerifyEmail, VerifyOTP, PasswordReset, ResetSuccessful } from '../components/ForgotPasswordComponents';
import axios from 'axios'

function ForgotPassword() {

    const [formState, setFormState] = useState("verifyEmail")

    const [email, setEmail] = useState("")
    const [otp, setOTP] = useState("")

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleOTPChange(e) {
        setOTP(e.target.value)
    }

    async function handleVerifyEmailAndSentOTP(e) {
        e.preventDefault()
        console.log(email)

        try {
            const response = await axios.post('/api/forgot-password/send-otp', { email })
            console.log(response)
            if (response.status == 200) { setFormState("verifyOTP") }
            if (response.error) {
                console.log(response.error.data)
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    function renderForm() {
        switch (formState) {
            case "verifyEmail":
                return <VerifyEmail
                    email={email}
                    handleEmailChange={handleEmailChange}
                    handleVerifyEmailAndSentOTP={handleVerifyEmailAndSentOTP}
                    setFormState={setFormState}
                />
            case "verifyOTP":
                return <VerifyOTP
                    email={email}
                    otp={otp}
                    handleOTPChange={handleOTPChange}
                    handleVerifyEmailAndSentOTP={handleVerifyEmailAndSentOTP}
                    setFormState={setFormState}
                />
            case "passwordReset":
                return <PasswordReset
                    email={email}
                    setFormState={setFormState}
                />
            case "resetSuccessful":
                return <ResetSuccessful
                    setFormState={setFormState}
                />
        }
    }

    return (
        <>
            {renderForm()}
        </>

    )
}

export default ForgotPassword