import React from 'react'
import '../App.css'
import hero from '/hero.svg'
import google from '/google.svg'
import netflix from '/netflix.svg'
import bnb from '/airbnb.svg'
import amazon from '/amazon.svg'
import facebook from '/facebook.svg'
import grab from '/grab.svg'

const Hero = () => {
  return (
    <>
      <div className='flex bg-[#FFF2E1] gap-[250px]'>
        <div className='ml-[100px] mt-[300px]'>
          <p className='text-[54px] text-[#2F327D]'>Studying Online is now <br /> much easier</p>
          <p className='text-[24px] mt-[20px]'>Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>
          <div>
            <button className='w-[220px] h-[80px] rounded-[80px] bg-[#F48C06] text-white mt-[40px]'>Join for free</button>
            <button className='w-[220px] h-[80px] rounded-[80px] bg-none text-black mt-[40px] border-white'>Join for free</button>
          </div>
        </div>
        <div>
          <img className='w-[650px] ' src={hero} alt="hero" />
        </div>
      </div>
      <div className='mt-[100px]'>
            <div>
              <p className='text-[#696984] text-center text-[28px]'>Trusted by 5,000+ Companies Worldwide</p>
            </div>
            <div className='flex gap-[70px] justify-center mt-[50px]'>
              <img src={google} alt="google" />
              <img src={netflix} alt="netflix" />
              <img src={bnb} alt="bnb" />
              <img src={amazon} alt="amazon" />
              <img src={facebook} alt="facebook" />
              <img src={grab} alt="grab" />
            </div>
          </div>
    </>
  )
}

export default Hero