import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export function Forgot() {
  return (
    <div className="flex flex-col items-center justify-center px-24 pt-60">
      <h1 className="font-semibold text-5xl">Forgot Password?</h1>
      <p className="pt-12 font-semibold text-gray-500">
        No worries, we'll reset your password and send you a link to create a
        new one.
      </p>
      <div className="w-full max-w-lg pt-12 text-gray-400">
        <Input
          type="email"
          label="Email"
          color="default"
          variant="bordered"
          defaultValue="prof@manipal.edu"
          placeholder="prof@manipal.edu"
        />
      </div>
      <div className="w-full max-w-lg pt-6">
        <Link to="/forgotpass/checkmail">
          <Button
            variant="solid"
            color="success"
            className="w-full h-12 text-medium text-white font-semibold"
            size="md"
            radius="sm"
            style={{ width: "calc(100%)" }}
          >
            Reset Password
          </Button>
        </Link>
      </div>
      <div className="pt-10">
        <Link to="/login" className="block-w-full">
          <h3 className="font-medium text-slate-400">← Back to Login</h3>
        </Link>
      </div>
    </div>
  );
}

export function CheckMail() {
  return (
    <div className="flex flex-col items-center justify-center px-24 pt-60">
      <h1 className="font-semibold text-5xl">Check your email?</h1>
      <p className="pt-12 font-semibold text-gray-500">
        Enter the OTP sent to your inbox.
      </p>
      <div className="w-full max-w-md pt-6">
        <Input type="enter_otp" label="Enter OTP" />
      </div>
      <div className="w-full max-w-md pt-4">
        <Link to="/forgotpass/checkmail/newpass">
          <Button
            variant="solid"
            color="success"
            className="w-full h-12  text-medium text-white font-semibold"
            size="md"
            radius="sm"
            style={{ width: "calc(100%)" }}
          >
            Proceed
          </Button>
        </Link>
      </div>
      <div className="pt-10">
        <Link to="/login" className="block-w-full">
          <p className="font-medium text-black-600">
            Didn't receive the email?
          </p>
          <p className="font-medium text-purple-600">Click to resend</p>
        </Link>
      </div>
      <div className="pt-10">
        <Link to="/login" className="block-w-full">
          <h3 className="font-medium text-slate-400">← Back to Login</h3>
        </Link>
      </div>
    </div>
  );
}

export function NewPass() {
  return (
    <div className="flex flex-col items-center justify-center px-24 pt-60">
      <h1 className="font-semibold text-5xl">Set new Password.</h1>
      <p className="pt-12 font-semibold text-gray-500">
        Your new password must be different to previously used passwords.
      </p>
      <div className="w-full max-w-md pt-12 text-gray-400">
        <Input
          isRequired
          type="new_password"
          label="New Password"
          defaultValue="prof@manipal.edu"
          description="Password should be mix of A-Z and 0-9 with special characters"
        />
      </div>
      <div className="w-full max-w-md pt-4 text-gray-400">
        <Input
          isRequired
          type="verifynew_password"
          label="Verify Password"
          defaultValue="prof@manipal.edu"
        />
      </div>

      <div className="w-full max-w-md pt-6">
        <Link to="/forgotpass/checkmail">
          <Button
            variant="solid"
            color="success"
            className="w-full h-12 text-medium text-white font-semibold"
            size="md"
            radius="sm"
            style={{ width: "calc(100%)" }}
          >
            Reset Password
          </Button>
        </Link>
      </div>
      <div className="pt-10">
        <Link to="/login" className="block-w-full">
          <h3 className="font-medium text-slate-400">← Back to Login</h3>
        </Link>
      </div>
    </div>
  );
}

export function Passreset() {
  return (
    <div className="flex flex-col items-center justify-center px-24 pt-60">
      <h1 className="font-semibold text-5xl">Password Reset Successfully!</h1>
      <div className="pt-10">
        <Link to="/login" className="block-w-full">
          <Button
            variant="solid"
            color="primary"
            className="font-medium text-slate-400"
          >
            ← Back to Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
