import React, { useEffect, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Signup = () => {

  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",

  })

  const handleOnChange = (e) =>{
    const {name, value} = e.target;
    setData((prev) =>{
      return{
      ...prev,
      [name]: value
      }
    })
  }

  const onSubmitHandle = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    console.log(data)
  },[data])

  return (
    <section id='signup'>
      <div className='mx-auto container p-4'>

        <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
              <div>
                <img src={loginIcons} alt="" />
              </div>
            
            <form className='cursor-pointer'>
                <label>
                <input type="file" className='hidden' />
                <div className='text-xs opacity-80 bg-slate-200 py-4 text-center absolute bottom-0 w-full'>
                    Upload
                </div>
                </label>
    
            </form>

            </div>
          
            <form onSubmit={onSubmitHandle} className='flex flex-col gap-5'>

            <div className='flex flex-col gap-1'>
                <label>Name:</label>
                <div className='bg-slate-100 p-2 rounded-md'>
                  <input onChange={handleOnChange} className='h-full w-full outline-none' type="text" name="name" id="" placeholder='Enter name' required />
                </div>
              </div> 

              <div className='flex flex-col gap-1'>
                <label>Email:</label>
                <div className='bg-slate-100 p-2 rounded-md'>
                  <input onChange={handleOnChange} className='h-full w-full outline-none' type="email" name="email" id="" placeholder='Enter email' required />
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <label>Password:</label>
                <div className='bg-slate-100 p-2 rounded-md flex'>
                  <input onChange={handleOnChange} className='h-full w-full outline-none' type={!showPassword ? "password" : "text"} name="password" id="" placeholder='Enter password' required />
                  <span className='cursor-pointer mt-1' onClick={() => setShowPassword((prev) => !prev)}>
                    {
                    !showPassword ?
                    <FaEye />
                      :
                    <FaEyeSlash />
                    }
                  </span>
                </div>
              
              </div>

              <div className='flex flex-col gap-1'>
                <label>Confirm Password:</label>
                <div className='bg-slate-100 p-2 rounded-md flex'>
                  <input onChange={handleOnChange} className='h-full w-full outline-none' type={!showConfirmPassword ? "password" : "text"} name="confirmPassword" id="" placeholder='Enter confirm password' required />
                  <span className='cursor-pointer mt-1' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    {
                    !showConfirmPassword ?
                    <FaEye />
                      :
                    <FaEyeSlash />
                    }
                  </span>
                </div>
                
                <Link to="/forgot-password" className='w-fit hover:underline hover:text-red-400 ml-auto'>
                      Forgot password
                </Link>
              
              </div>
              
      


              <button type='submit' className=' mx-auto bg-red-500 hover:bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 duration-200'>Sign up</button>
            </form>

            <div className='flex justify-center'>
              <p className='my-5'>Have an account ? <Link className='hover:text-red-400 hover:underline' to="/login">Login</Link></p>
            </div>


        </div>

      </div>
    </section>
  )
}

export default Signup