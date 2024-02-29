import React from 'react'
import { Link } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react'; 

export default function SignUp() {
  return (
    <div className='min-height-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-500
               via-lime-500 to-yellow-500 rounded-lg text-white'>Neeta's</span>
            <span className='px-1'>Blog</span>
        </Link>
        <p className='text-sm mt-5'>
          This project is a work in progress. Please sign up with either your email or password.
        </p>
        </div>
        {/*right*/}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value="Username"/>
              <TextInput
                type='text'
                placeholder='Username'
                id='username'/>
            </div>
            <div>
              <Label value="Email"/>
              <TextInput
                type='text'
                placeholder='email@email.com'
                id='email'/>
            </div>
            <div>
              <Label value="Password"/>
              <TextInput
                type='text'
                placeholder='Password'
                id='password'/>
            </div>
            <Button gradientDuoTone='greenToBlue' type="submit">
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>
              Have an account?
            </span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
        
      </div>
    
    </div>
  )
}
