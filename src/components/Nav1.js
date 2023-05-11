import React from 'react'

const Nav1 = () => {
  return (
    <div>
        <div className='px-10 grid grid-cols-2 h-16 mx-14'>
  <div>
  <span to="#" class="">
        <img src="../logo.png" class="h-8 ml-8 w-24" alt="Logo" />
        <span class=" text-medium  dark:text-white text-lg">Kigali &nbsp;House &nbsp;Renting</span>
  </span>
  </div>

 <div className='mt-4 inline-flex  ml-auto'>

  <div className=''>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-black font-bold mt-3 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
</div>
  <select className='px-2 ml-4 outline-none bg-white border-none '>
 
    <option className=''>English</option>
    <option>Kinyarwanda</option>
   

  </select>
 </div>
 <div>
    
 </div>
</div> 
<hr/>
    </div>
  )
}

export default Nav1