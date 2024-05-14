import React from 'react'
import { TextField } from '@mui/material'
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate= useNavigate();
  
  const handleSignup = ()=>{
          navigate('/Pages/SignUp')
  }
  return (
    <div>
      
      <div className='flex flex-col gap-3 justify-center items-center m-auto h-screen'>
        <p className='font-sans font-bold mr-36'>Log into your Udemy account</p>
       <div className='w-[384px] border border-black h-10 p-5 flex items-center font-bold font-sans'>
        <img src="../src/images/google.png" className='object-contain w-7 mr-2 p-0'/>
        Continue with Google
       </div>
       <div className='w-[384px] border border-black h-10 p-5 flex items-center font-bold font-sans'>
        <img src="../src/images/communication_15047435.png" className='object-contain w-7 mr-2 p-0'/>
        Continue with Facebook
       </div>
       <div className='w-[384px] border border-black h-10 p-5 flex items-center font-bold font-sans'>
        <img src="../src/images/apple-logo_747.png" className='object-contain w-7 mr-2 p-0'/>
        Continue with Apple
       </div>
      

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
        
    

        <button className='bg bg-purple-600 w-[384px] h-12 font-sans font-bold text-white'>
          Login
        </button>
        <span className='text-p text-purple-900 font-bold font-sans underline'> Or Forgot Password</span>
        <hr />
        <p>Don't have an account? <span className='text-p text-purple-900 font-bold font-sans underline' onClick={handleSignup}><button>Sign up</button></span></p>
        <span className='text-p text-purple-900 font-bold font-sans underline'> Log in with your organization</span>

      </div>
    </div>
  )
}
