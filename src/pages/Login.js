import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {

const {user, logIn} = UserAuth()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')
  try{
    await logIn(email, password)
    navigate('/')
  }catch(error){
    console.log(error)
    setError('Wrong email or password')
  }
}
  return (
    <>
      <div className='w-full h-screen'>
      <img 
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://images.unsplash.com/photo-1643208589889-0735ad7218f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' alt='pic'/>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[20px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
              <form 
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'>
                <input 
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email'/>
                <input 
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='currenr-password'/>
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                  Sign In
                </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type="checkbox"/>
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600 pr-8'>New to MOVIES?</span>
                <Link to='/signup'>Sign Up</Link>
              </p>
              </form>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Login