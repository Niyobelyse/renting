import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <hr className=' w-full border-t-1 border-black py-4 mt-6 opacity-10'/>
<div className='px-24 h-52'>    

    <div className='grid grid-cols-3 gap-3 text-black px-3'>
        
        <div className='border-'>
            <div>
                <Link to="#" class="items-center">
                  <img src="../logo.png" class="h-8 ml-8 w-24" alt="Flowbite Logo" />
                  <span class="self-center text-medium whitespace-nowrap dark:text-white text-lg">Kigali &nbsp;House &nbsp;Renting</span>
                </Link>
            </div>
            <div className='span py-1'><p>On our web site  landlords advertise their rental house and connect with people who are searching for a better home to live</p></div>
            <div className='flex py-2'>
                <span className=''><FaFacebook className='spancolor'/></span>
                <span className='px-2'><FaWhatsapp className='spancolor'/></span>
                <span className='px-2'><FaInstagram className='spancolor'/></span>
                <span className='px-2'><FaTwitter className='spancolor'/></span>
            </div>
            
        </div>
        <div>
            <h1 className=' px-24 font-bold'>Get In Touch</h1>
            <div>
                <div className=' px-24 py-2'>
                <div className='spancolor py-1 inline-flex'><span>< FaEnvelope className='span mt-1'/></span>&nbsp;&nbsp;:<span>&nbsp;&nbsp;0000</span></div>
                <div className='spancolor py-1 inline-flex'><span>< FaPhoneAlt className='span mt-1'/></span>&nbsp;&nbsp;:<span>&nbsp;&nbsp;0788000000</span></div>
                <div className='spancolor py-1 inline-flex'><span>< FaEnvelope className='span mt-1'/></span>&nbsp;&nbsp;:<span>&nbsp;&nbsp;kigalihouserenting@gmail.com</span></div>
                </div>

            </div>
        </div>
        <div>
            <h1 className=' px-24 font-bold'>property city</h1>
            <div>
                <div className='spancolor px-24 py-2'>
                <div className='py-1'><span>Gasabo</span></div>
                <div className='py-1'><span>Kicukiro</span></div>
                <div className='py-1'><span>Nyarugenge</span></div>
                </div>

            </div>
        </div>
    </div>
    </div>
    </>    
  )
}

export default Footer