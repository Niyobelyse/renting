import React from 'react'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <hr className=' w-full border-t-1 border-black py-4 opacity-10 mt-24'/>
<div className='px-24  '>    

    <div className='inline-flex text-black '>
        
        <div className=''>
            <div>
                <span to="#" class="items-center">
                  <img src="../logo.png" class="h-8 ml-8 w-24" alt="Flowbite Logo" />
                  <span class="self-center text-medium whitespace-nowrap dark:text-white text-lg">Kigali &nbsp;House &nbsp;Renting</span>
                </span>
            </div>
            <div className='span py-1'><p>On our web site  landlords advertise their rental house and connect with people who are searching for a better home to live</p></div>
            <div className='flex py-2'>
                <span className='text-blue-900'><FaFacebook className=' '/></span>
                <span className='px-2 text-blue-900'><FaWhatsapp className=''/></span>
                <span className='px-2 text-blue-900'><FaInstagram className=''/></span>
                <span className='px-2 text-blue-900'><FaTwitter className=''/></span>
            </div>
            
        </div>
        <div className='border-r-2 border-l-2'>
            <h1 className=' px-24 text-blue-900 font-bold text-lg'>Get In Touch</h1>
            <div>
                <div className=' px-24 py-1'>
                <div className='spancolor py-1 inline-flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-blue-900 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

</span>&nbsp;&nbsp;:<span>&nbsp;&nbsp;0000</span></div><br/>
                <div className='spancolor py-1 inline-flex'><span>< FaPhoneAlt className='span mt-1 text-blue-900'/></span>&nbsp;&nbsp;:<span>&nbsp;&nbsp;0788000000</span></div>
                <div className='spancolor py-1 inline-flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-blue-900 span mt-1 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg></span>&nbsp;&nbsp;:<span>&nbsp;&nbsp;kigalihouserenting@gmail.com</span></div>
                </div>

            </div>
        </div>
        <div className='px-24'>
            <h1 className='font-bold text-blue-900 text-lg'>property city</h1>
            <div>
                <div className='spancolor  py-1 px-8'>
                <div className='py-1'><span>Gasabo</span></div>
                <div className='py-1'><span>Kicukiro</span></div>
                <div className='py-1'><span>Nyarugenge</span></div>
                </div>

            </div>
        </div>
    </div>
    <hr className=' w-3/5 mb-10 border-t-1 border-black text-center  ml-48 opacity-10 mt-6'/>
    
    </div>
    <div className='text-center'>&copy;&nbsp;&nbsp;All Right Reserved By <span  className='text-blue-700 py-8'>Kigali House Renting ltd 2023</span></div>
    
    </>    
  )
}

export default Footer