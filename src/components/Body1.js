import React from 'react'
import { Link } from 'react-router-dom'
import { FaBath, FaBed, FaStar } from "react-icons/fa";




const Home = () => {
  return (
    <>
      
   


   <div className='Bodyimage'>
    <p className="text-center py-24 font-bold text-3xl">Find your dream home in Kigali </p>
    <div className=' bg-white inline-flex px-8 ml-24 w-4/5  h-24 border rounded-lg '>
        <div className=' px-8 mt-4'><select className=' font-bold outline-none text-lg'><option>Location</option></select><p>select the area</p></div>
        <div className='px-8 mt-4'><select className=' font-bold outline-none text-lg'><option >Type of property</option></select><p>select the area</p></div>
        <div className='px-8 mt-4'><select className=' font-bold outline-none text-lg'><option>Bedrooms</option></select><p>select the area</p></div>
        <div className='px-8 mt-4'><select className=' font-bold outline-none text-lg'><option>Bathrooms</option></select><p>select the area</p></div>
        <div className='px-8 mt-4'><select className=' font-bold outline-none text-lg'><option>Pricerange</option></select><p>select the area</p></div>
        <div className='mt-4'><input type="text" placeholder="Search.." className=' bodybutton border-rounded  w-32 h-11'></input></div>

    </div>
   </div>
   <div className=' px-24 grid grid-cols-2'>
      <div className='mt-4'>
        <span className='links'>Find a property</span><br/>
        <span className='links'>Browse your House</span>
      </div>
      <div className='ml-auto mt-4 mr-16'>
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





<div className='grid grid-cols-3 gaps-4  py-11 px-24'>
<div>
  
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


<div>
  
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






<div>
  
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




<div className='grid grid-cols-3 gaps-4  py-11 px-24'>

<div>
  
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












<div>
  
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


<div>
  
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
<div className='text-2xl font-bold text-center py-3 mr-24'>Testmonials</div>
<div className='text-2xl font-bold text-center py-3 mr-24'>Our happy clients</div>
<div className='grid grid-cols-3 px-24 mt-10'>
<div className='w-80 bg-white border-r-2 border-l-2 border-b-2 border-gray-200'>
    <div>
        <div className='px-28 py-2'><img src='../testmonial1.png' className='text-center w-16 rounded-full h-16 bg-gray-200'  alt='testmonial1'/></div>
        <div className='text-center py-2'>Dorcelle Uwamaliya</div>
        <div className='inline-flex ml-28'><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/></div>
    </div>
    <div className='px-3 py-2'>Best Real Estate Company i have ever Deal with. very Professional , Experienced and Helpful Agent. Highly Recommended </div>
</div>
<div className='w-80 bg-white border-r-2 border-l-2 border-b-2 border-gray-200'>
    <div>
        <div className='px-28 py-2'><img src='../testmonial1.png' className='text-center w-16 rounded-full h-16 bg-gray-200'  alt='testmonial1'/></div>
        <div className='text-center py-2'>Dorcelle Uwamaliya</div>
        <div className='inline-flex ml-28'><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/></div>
    </div>
    <div className='px-3 py-2'>Best Real Estate Company i have ever Deal with. very Professional , Experienced and Helpful Agent. Highly Recommended </div>
</div>
<div className='w-80 bg-white border-r-2 border-l-2 border-b-2 border-gray-200'>
    <div>
        <div className='px-28 py-2'><img src='../testmonial1.png' className='text-center w-16 rounded-full h-16 bg-gray-200'  alt='testmonial1'/></div>
        <div className='text-center py-2'>Dorcelle Uwamaliya</div>
        <div className='inline-flex ml-28'><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/><FaStar className='px-1'/></div>
    </div>
    <div className='px-3 py-2'>Best Real Estate Company i have ever Deal with. very Professional , Experienced and Helpful Agent. Highly Recommended </div>
</div>
</div>



    

   </>

   
  )
}

export default Home