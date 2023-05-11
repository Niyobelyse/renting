import React from 'react'
import Nav1 from './Nav1'
import { Link } from 'react-router-dom'
import { FaBath, FaBed } from "react-icons/fa";
import Footer from '../Footer';

const Dashbord = () => {
  return (
    <>
    <div className='Dashbord'>
      <Nav1/>
      <div className='inline-flex py-12'>
        <div className=' w-1/4'>
          <div className='py-4 px-14'><span><img src='../testmonial1.png' alt='userdashbordimage' className='w-16 h-16 rounded-full bg-black '/></span><span className=''>Morgan joe</span></div>
          <div className='py-1 inline-flex'><span className='px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
  
            
            </span><span>Home</span></div>
          <div className='py-1 inline-flex'><span className='px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707L2 6.207V12.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z"/></svg>
          </span><span>Your Rental</span></div>
          <div className='py-1 inline-flex'><span className='px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/><path d="M16 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/></g></svg>
          </span><span>Post New Rental</span></div>
          <div className='py-1 inline-flex'><span className='px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1z"/></svg>
          </span><span>Contact Us</span></div>
          <div className='py-1 inline-flex'><span className='px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m13.5 7.5l-3 3.25m3-3.25l-3-3m3 3H4m4 6H1.5v-12H8"/></svg>
          </span><span>Logout</span></div>

        </div>
        <div>
         
          <div>
          <div className='px-80'><p className='text-center text-xl '>Welcome to our property rental platform! List your property today and connect with potential renters effortlessly. Happy renting</p></div>
          <div className='grid grid-cols-3 py-10 gap-2'>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
      <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
      </Link>
      <div class="p-5">
          <Link to="#">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
          </Link>
  
      </div>
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  </span>
          <span className='mr-4'>Gacuriro</span>
          </div>
          <div className='inline-flex px-3 py-2 '>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  </span>
          <span>Apartment</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><FaBed/></span>
          <span>2</span>&nbsp;
          <span className='mr-4'>Bedrooms</span>
          </div>
          <div className='inline-flex px-3 py-2'>
          <span className='px-1'><FaBath/></span>
          <span>2</span>&nbsp;
          <span>Bathrooms</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1 text-lg font-bold'>250000frw</span>
  
          </div>
          <div className='inline-flex px-11 '>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
  </span>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  </span>
          </div>
         
         
      </div>
      <div>
      <span></span>
      <span></span>
      </div>
  </div>
  <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
      <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
      </Link>
      <div class="p-5">
          <Link to="#">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
          </Link>
  
      </div>
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  </span>
          <span className='mr-4'>Gacuriro</span>
          </div>
          <div className='inline-flex px-3 py-2 '>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  </span>
          <span>Apartment</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><FaBed/></span>
          <span>2</span>&nbsp;
          <span className='mr-4'>Bedrooms</span>
          </div>
          <div className='inline-flex px-3 py-2'>
          <span className='px-1'><FaBath/></span>
          <span>2</span>&nbsp;
          <span>Bathrooms</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1 text-lg font-bold'>250000frw</span>
  
          </div>
          <div className='inline-flex px-11 '>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
  </span>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  </span>
          </div>
         
         
      </div>
      <div>
      <span></span>
      <span></span>
      </div>
  </div>
  
  
  <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
      <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
      </Link>
      <div class="p-5">
          <Link to="#">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
          </Link>
  
      </div>
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  </span>
          <span className='mr-4'>Gacuriro</span>
          </div>
          <div className='inline-flex px-3 py-2 '>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  </span>
          <span>Apartment</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><FaBed/></span>
          <span>2</span>&nbsp;
          <span className='mr-4'>Bedrooms</span>
          </div>
          <div className='inline-flex px-3 py-2'>
          <span className='px-1'><FaBath/></span>
          <span>2</span>&nbsp;
          <span>Bathrooms</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1 text-lg font-bold'>250000frw</span>
  
          </div>
          <div className='inline-flex px-11 '>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
  </span>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  </span>
          </div>
         
         
      </div>
      <div>
      <span></span>
      <span></span>
      </div>
  </div>
  </div>



          <div className='grid grid-cols-3 gap-4 py-10'>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
      <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
      </Link>
      <div class="p-5">
          <Link to="#">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
          </Link>
  
      </div>
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  </span>
          <span className='mr-4'>Gacuriro</span>
          </div>
          <div className='inline-flex px-3 py-2 '>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  </span>
          <span>Apartment</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><FaBed/></span>
          <span>2</span>&nbsp;
          <span className='mr-4'>Bedrooms</span>
          </div>
          <div className='inline-flex px-3 py-2'>
          <span className='px-1'><FaBath/></span>
          <span>2</span>&nbsp;
          <span>Bathrooms</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1 text-lg font-bold'>250000frw</span>
  
          </div>
          <div className='inline-flex px-11 '>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
  </span>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  </span>
          </div>
         
         
      </div>
      <div>
      <span></span>
      <span></span>
      </div>
  </div>
  <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
      <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
      </Link>
      <div class="p-5">
          <Link to="#">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
          </Link>
  
      </div>
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  </span>
          <span className='mr-4'>Gacuriro</span>
          </div>
          <div className='inline-flex px-3 py-2 '>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  </span>
          <span>Apartment</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><FaBed/></span>
          <span>2</span>&nbsp;
          <span className='mr-4'>Bedrooms</span>
          </div>
          <div className='inline-flex px-3 py-2'>
          <span className='px-1'><FaBath/></span>
          <span>2</span>&nbsp;
          <span>Bathrooms</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1 text-lg font-bold'>250000frw</span>
  
          </div>
          <div className='inline-flex px-11 '>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
  </span>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  </span>
          </div>
         
         
      </div>
      <div>
      <span></span>
      <span></span>
      </div>
  </div>
  
  
  <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
      <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
      </Link>
      <div class="p-5">
          <Link to="#">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
          </Link>
  
      </div>
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  </span>
          <span className='mr-4'>Gacuriro</span>
          </div>
          <div className='inline-flex px-3 py-2 '>
          <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  </span>
          <span>Apartment</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1'><FaBed/></span>
          <span>2</span>&nbsp;
          <span className='mr-4'>Bedrooms</span>
          </div>
          <div className='inline-flex px-3 py-2'>
          <span className='px-1'><FaBath/></span>
          <span>2</span>&nbsp;
          <span>Bathrooms</span>
          </div>
         
         
      </div>
  
  
      <div className='grid grid-cols-2  px-4'>
          <div className='inline-flex py-2'>
          <span className='px-1 text-lg font-bold'>250000frw</span>
  
          </div>
          <div className='inline-flex px-11 '>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
  </span>
          <span className='px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  </span>
          </div>
         
         
      </div>
      <div>
      <span></span>
      <span></span>
      </div>
  </div>
  </div>
          </div>
        </div>
      </div>  
    </div>
    <Footer/>
    </>
  )
}

export default Dashbord