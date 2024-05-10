import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { TextField } from '@mui/material'
import PasswordStrengthBar from 'react-password-strength-bar';

export default function SignUp() {
  const [password, setPassword] = useState();

  return (
    <>
      <Nav />
      <div className='flex flex-col gap-4 justify-center items-center m-auto h-screen'>
        <p className='font-sans font-bold'>Sign up and start learning</p>
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          style={{ width: '384px' }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#000",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2e2e2e",
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "bold",
            },
          }}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ width: '384px' }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#000",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2e2e2e",
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "bold",
            },
          }}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ width: '384px' }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#000",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2e2e2e",
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "bold",
            },
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        
        <PasswordStrengthBar
          password={password}
          style={{
            width: "200px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginRight: "170px"
          }}
          scoreWords={["Too weak", "Could be stronger", "Strong Password", "Very Strong"]}
          scoreWordStyle={{ textAlign: "left", textTransform: "capitalize" }}
        />

        <label className='w-72 mr-20'>
          <input type='checkbox'className='mr-1' />
          Send me special offers, personalized recommendations, and learning tips.
        </label>
        <button className='bg bg-purple-600 w-[384px] h-12 font-sans font-bold text-white'>
          Sign up
        </button>
        <p className=' font-sans text-xs'>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
        <hr />
        <p>Already have an account? <span className='text-p text-purple-900 font-bold font-sans underline'>Login</span></p>
      </div>
    </>
  )
}