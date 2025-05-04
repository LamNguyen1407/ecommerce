import React, { useEffect, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Login = () => {

  const [showPassword,setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
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
    <section id='login'>
      <div className='mx-auto container p-4'>

        <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
            <div className='w-20 h-20 mx-auto'>
              <img src={loginIcons} alt="" />
            </div>
          
            <form onSubmit={onSubmitHandle} className='flex flex-col gap-7'>

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
                
                <Link to="/forgot-password" className='w-fit hover:underline hover:text-red-400 ml-auto'>
                      Forgot password
                </Link>
              
              </div>
              
      


              <button type='submit' className=' mx-auto bg-red-500 hover:bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 duration-200'>Login</button>
            </form>

            <div className='flex justify-center'>
              <p className='my-5'>Dont't have account ? <Link className='hover:text-red-400 hover:underline' to="/sign-up">Sign up</Link></p>
            </div>


        </div>

      </div>
    </section>
  )
}

export default Login