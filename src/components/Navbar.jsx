import React from 'react'
import '../App.css'
import logo from '/Polygon 1.svg'
import LogIn from './buttons/LogIn'
import SignUp from './buttons/SignUp'
const Navbar = () => {
  return (
    <>
        <div className='flex justify-between bg-[#FFF2E1] p-[60px] h-[120px]'>
            <div className='ml-[100px] mt-[20px]'>
                <img src={logo} alt="" />
                <h1 className='absolute top-[38px] text-4xl ml-[25px]'>Skilline</h1>
            </div>
            <div className='topic mr-[100px] mt-[50px] text-2xl flex'>
                <ul className='flex gap-[70px]'>
                    <li>Home</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Us</li>
                </ul>
                <div className='gap-[20px] flex mt-[-15px] ml-[20px]'>
                    <div>
                        <LogIn/>
                    </div>
                    <div>
                        <SignUp/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar