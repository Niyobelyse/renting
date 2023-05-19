
import React from 'react'


const Managerdashbord = () => {

  return (
    <>
    
      <div className='px-24'><span className='font-bold text-2xl'>Hello,</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-blue-500 text-2xl'>Manager</span></div>
      
    
<div className='inline-flex w-screen'>
    <div className=' grid grid-rows-2 w-3/5'>
      <div className='h-40 grid grid-cols-2'>
        <div className='grid grid-cols-3'>
          <div className='bg-green-400 px-10'>1</div>
          <div className='bg-yellow-200 px-10'>2</div>
          <div className='bg-blue-300 text-black px-10'>3</div>
        </div>
        <div className='bg-black  ml-60 text-white'>test</div>
      </div>
      <div className='bg-blue-300 h-40'>hello</div> 
    </div>
    <div className='w-1/5 bg-blue-300'>hello</div>
</div>
    </>
  )
}

export default Managerdashbord