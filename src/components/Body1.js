import React from 'react'
import { Link } from 'react-router-dom'
import { FaBath, FaBed, FaStar } from "react-icons/fa";
import Selectarea from './Selectarea';
import Properttype from './Properttype';
import Bedrooms from './Bedrooms';
import Bathrooms from './Bathrooms';
import Pricerange from './Pricerange';





const Home = () => {
  

  return (
    <>
      
   


   <div className='Bodyimage'>
     <div  class="animate__animated animate__bounce animate__repeat-2 text-center pt-48  font-bold text-4xl text-white">Find your dream Rental in Kigali</div>
     <div className=' border-r-2 border-l-2 bg-white border-b-2 border-gray-200 mt-16 inline-flex px-12 w-5/5 mx-24 h-24  mb-8 rounded-lg '>
        
        <div className=' px-2 py-4 mt-2'><span className='text-black font-bold'>Location</span><Selectarea className='px-4'/></div>
        <div className='px-4 py-4 mt-2'><span className='text-black font-bold'>Type of property</span><Properttype/></div>
        <div className='px-2 py-4 mt-2'><span className='text-black font-bold'>Bedrooms</span><Bedrooms/></div>
        <div className='px-2 py-4 mt-1'><span className='text-black font-bold'>Bathrooms</span><Bathrooms/></div>
        <div className='px-4 py-4 mt-2'><span className='text-black font-bold'>Pricerange</span><Pricerange/></div>
        <div className='mt-1 py-4 '><label class=" relative inline-flex">
  
  <input class=" bg-blue-900 w-28 rounded-md  py-2 placeholder:text-white shadow-sm outline-none placeholder:px-2 h-12" placeholder="Search" type="text" name="search"/>
  <span class="absolute inset-y-0  text-white flex items-center px-20">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
  </span>
</label></div>
</div>
   </div>
   <div className=' px-24 grid grid-cols-2 gaps-3 mx-2 w-5/5'>
      <div className='mt-4'>
        <span className='links'>Find a property</span><br/>
        <span className='links'>Browse your House</span>
      </div>
      <div className='ml-auto mt-4 '>
        <Link to='#' className=' px-2'>Apartment</Link>
        <Link to='#' className='links px-2'>House</Link>
        <Link to='#' className='links px-2'>Office</Link>
        <Link to='#' className='links px-2'>
            <select>
                <option>ViewAll</option>
                <option></option>
            </select>
        </Link>
      </div>
   </div>





<div className='grid grid-cols-3  py-11 px-20'>

  
<div class="max-w-1xl px-8 bg-white  rounded-lg dark:border-gray-700">
    <Link to="#">
    <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
    </Link>
<div className='border'>
<div class="p-5">
        <Link to="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
        </Link>

    </div>
    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</span>
        <span className='mr-4'>Gacuriro</span>
        </div>
        <div className='inline-flex px-3 py-2 '>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</span>
        <span>Apartment</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><FaBed/></span>
        <span>2</span>&nbsp;
        <span className='mr-4'>Bedrooms</span>
        </div>
        <div className='inline-flex px-3 py-2'>
        <span className='px-1 text-blue-900'><FaBath/></span>
        <span>2</span>&nbsp;
        <span>Bathrooms</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-lg font-bold text-blue-900'>250000frw</span>

        </div>
        <div className='inline-flex px-11 '>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
</span>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
</span>
        </div>
       
       
    </div>
</div>

</div>



<div class="max-w-1xl px-8 bg-white  rounded-lg dark:border-gray-700">
    <Link to="#">
    <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
    </Link>
<div className='border'>
<div class="p-5">
        <Link to="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
        </Link>

    </div>
    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</span>
        <span className='mr-4'>Gacuriro</span>
        </div>
        <div className='inline-flex px-3 py-2 '>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</span>
        <span>Apartment</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><FaBed/></span>
        <span>2</span>&nbsp;
        <span className='mr-4'>Bedrooms</span>
        </div>
        <div className='inline-flex px-3 py-2'>
        <span className='px-1 text-blue-900'><FaBath/></span>
        <span>2</span>&nbsp;
        <span>Bathrooms</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-lg font-bold text-blue-900'>250000frw</span>

        </div>
        <div className='inline-flex px-11 '>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
</span>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
</span>
        </div>
       
       
    </div>
</div>

</div>





<div class="max-w-1xl px-8 bg-white  rounded-lg dark:border-gray-700">
    <Link to="#">
    <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
    </Link>
<div className='border'>
<div class="p-5">
        <Link to="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
        </Link>

    </div>
    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</span>
        <span className='mr-4'>Gacuriro</span>
        </div>
        <div className='inline-flex px-3 py-2 '>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</span>
        <span>Apartment</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><FaBed/></span>
        <span>2</span>&nbsp;
        <span className='mr-4'>Bedrooms</span>
        </div>
        <div className='inline-flex px-3 py-2'>
        <span className='px-1 text-blue-900'><FaBath/></span>
        <span>2</span>&nbsp;
        <span>Bathrooms</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-lg font-bold text-blue-900'>250000frw</span>

        </div>
        <div className='inline-flex px-11 '>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
</span>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
</span>
        </div>
       
       
    </div>
</div>

</div>
</div>




















<div className='grid grid-cols-3  py-11 px-20'>

  
<div class="max-w-1xl px-8 bg-white  rounded-lg dark:border-gray-700">
    <Link to="#">
    <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
    </Link>
<div className='border'>
<div class="p-5">
        <Link to="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
        </Link>

    </div>
    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</span>
        <span className='mr-4'>Gacuriro</span>
        </div>
        <div className='inline-flex px-3 py-2 '>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</span>
        <span>Apartment</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><FaBed/></span>
        <span>2</span>&nbsp;
        <span className='mr-4'>Bedrooms</span>
        </div>
        <div className='inline-flex px-3 py-2'>
        <span className='px-1 text-blue-900'><FaBath/></span>
        <span>2</span>&nbsp;
        <span>Bathrooms</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-lg font-bold text-blue-900'>250000frw</span>

        </div>
        <div className='inline-flex px-11 '>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
</span>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
</span>
        </div>
       
       
    </div>
</div>

</div>



<div class="max-w-1xl px-8 bg-white  rounded-lg dark:border-gray-700">
    <Link to="#">
    <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
    </Link>
<div className='border'>
<div class="p-5">
        <Link to="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
        </Link>

    </div>
    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</span>
        <span className='mr-4'>Gacuriro</span>
        </div>
        <div className='inline-flex px-3 py-2 '>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</span>
        <span>Apartment</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><FaBed/></span>
        <span>2</span>&nbsp;
        <span className='mr-4'>Bedrooms</span>
        </div>
        <div className='inline-flex px-3 py-2'>
        <span className='px-1 text-blue-900'><FaBath/></span>
        <span>2</span>&nbsp;
        <span>Bathrooms</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-lg font-bold text-blue-900'>250000frw</span>

        </div>
        <div className='inline-flex px-11 '>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
</span>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
</span>
        </div>
       
       
    </div>
</div>

</div>





<div class="max-w-1xl px-8 bg-white  rounded-lg dark:border-gray-700">
    <Link to="#">
    <img class="rounded-t-lg" src="../img1.jpg" alt="imgs1" />
    </Link>
<div className='border'>
<div class="p-5">
        <Link to="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Live luxury in this Gacuriro Apartment</h5>
        </Link>

    </div>
    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</span>
        <span className='mr-4'>Gacuriro</span>
        </div>
        <div className='inline-flex px-3 py-2 '>
        <span className='px-1 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</span>
        <span>Apartment</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-blue-900'><FaBed/></span>
        <span>2</span>&nbsp;
        <span className='mr-4'>Bedrooms</span>
        </div>
        <div className='inline-flex px-3 py-2'>
        <span className='px-1 text-blue-900'><FaBath/></span>
        <span>2</span>&nbsp;
        <span>Bathrooms</span>
        </div>
       
       
    </div>


    <div className='grid grid-cols-2  px-4'>
        <div className='inline-flex py-2'>
        <span className='px-1 text-lg font-bold text-blue-900'>250000frw</span>

        </div>
        <div className='inline-flex px-11 '>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
</span>
        <span className='px-4 text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
</span>
        </div>
       
       
    </div>
</div>

</div>
</div>
<div className='text-4xl font-bold text-center py-3 mr-24'>Testmonials</div>
<div className='text-4xl font-bold text-center py-3 mr-24'>Our happy clients</div>
<div className='grid grid-cols-3 px-24 mt-10'>
<div className='w-5/5 mx-8 bg-white border-r-2 border-l-2 border-b-2 border-gray-200'>
    <div className=''>
        <div className='px-28 py-2'><img src='../testmonial1.png' className='text-center w-16 rounded-full h-16 bg-gray-200'  alt='testmonial1'/></div>
        <div className='text-center py-2'>Dorcelle Uwamaliya</div>
        <div className='inline-flex ml-28'><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/></div>
    </div>
    <div className='px-3 py-2'>Best Real Estate Company i have ever Deal with. very Professional , Experienced and Helpful Agent. Highly Recommended </div>
</div>
<div className='w-5/5  mx-8  bg-white border-r-2 border-l-2 border-b-2 border-gray-200'>
    <div>
        <div className='px-28 py-2'><img src='../testmonial1.png' className='text-center w-16 rounded-full h-16 bg-gray-200'  alt='testmonial1'/></div>
        <div className='text-center py-2'>Dorcelle Uwamaliya</div>
        <div className='inline-flex ml-28'><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/></div>
    </div>
    <div className='px-3 py-2'>Best Real Estate Company i have ever Deal with. very Professional , Experienced and Helpful Agent. Highly Recommended </div>
</div>
<div className='w-5/5  mx-8  bg-white border-r-2 border-l-2 border-b-2 border-gray-200'>
    <div>
        <div className='px-28 py-2'><img src='../testmonial1.png' className='text-center w-16 rounded-full h-16 bg-gray-200'  alt='testmonial1'/></div>
        <div className='text-center py-2'>Dorcelle Uwamaliya</div>
        <div className='inline-flex ml-28'><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/></div>
    </div>
    <div className='px-3 py-2'>Best Real Estate Company i have ever Deal with. very Professional , Experienced and Helpful Agent. Highly Recommended </div>
</div>
</div>


<div className=' bg-blue-900  w-5/5 mx-32 h-60 mt-14 mb-6 justify-center'>
    <h3 className='font-bold text-white text-lg text-center py-4'> would you like to share your feedback?</h3>
<div className='mx-72'>
<input type="text" placeholder='Type your message here...' className=" mb-2 placeholder:text-black w-96 px-2 rounded-md py-4 bg-white outline-none "/><br></br>
<label class=" relative inline-flex">
  
  <input class="mb-2 bg-white w-96 rounded-md py-4 px-2 shadow-sm outline-none placeholder:text-black" placeholder="Your Email" type="text" name="search"/>
  <span class="absolute inset-y-0  flex items-center px-20">
   <button type='submit' className='ml-52 mb-1 text-white text-lg rounded-sm  w-20 h-8 bg-blue-900'>Send</button>
  </span>
</label>
</div>
   

        

</div>



    

   </>

   
  )
}

export default Home