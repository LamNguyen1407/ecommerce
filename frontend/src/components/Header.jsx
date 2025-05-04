import React from 'react'
import Logo from './Logo'
import { CiSearch} from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-20 shadow-md bg-white'>
        <div className='h-full container items-center flex mx-auto md:px-6 justify-between'>
            
            <div>
                <Link to="/">
                    <Logo w={150} h={50}></Logo>
                </Link>
            </div>

            <div className='hidden md:flex items-center border-2 rounded-md p-2 w-1/4 justify-between'>
                <input className='outline-none' type="text" placeholder='Search product here...' />
                <div >
                    <CiSearch className='h-full w-full text-2xl'  />
                </div>
            </div>

            {/* user cart */}
            <div className='flex items-center gap-6'>
                {/* user */}
                <div className='text-3xl'>
                    <FaCircleUser></FaCircleUser>
                </div>

                {/* cart */}
                <div className='text-3xl relative'>
                    <span><MdShoppingCart /></span>
                    <div className='bg-red-600 text-white w-5 h-5 p-1 rounded-full flex items-center justify-center absolute -top-2 -right-2 '>
                        <p className='text-xs'>0</p>
                    </div>
                </div>

                {/* login */}
                <div>
                    <Link to="/login" className='px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-700'>Login</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header