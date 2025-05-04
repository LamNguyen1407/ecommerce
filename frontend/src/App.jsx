import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/Footer'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Header></Header>
      <main className='min-h-[calc(100vh-100px)]'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/sign-up' element={<Signup></Signup>}></Route>
      </Routes>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App