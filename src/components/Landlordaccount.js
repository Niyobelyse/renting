import React from 'react'

const Landlordaccount = () => {
  return (
    <>
    
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative px-10">
        <div class="absolute inset-y-0 left-0 flex items-center pl-14 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute ml-72 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

    <div class="relative overflow-x-auto py-24 px-8">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    No
                </th>
                <th scope="col" class="px-6 py-3">
                    Profile
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Contact
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Houses
                </th>
                <th scope="col" class="px-6 py-3">
                    Apartments
                </th>
                <th scope="col" class="px-6 py-3">
                    Offices
                </th>
                <th scope="col" class="px-6 py-3">
                    Total properties
                </th>
            </tr>
        </thead>
        <tbody>
            
      

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

<td class="px-4 py-1">
    1
</td>
<td class="px-4 py-1">
<img src="../avatar.jpg" className="text-center w-70 rounded-full h-16 bg-gray-200" alt="avatar"/>
</td>
<td class="px-4 py-1">
    Niyo Belyse
</td>
<td class="px-4 py-1">
    0786769456
</td>
<td class="px-4 py-1">
    ganzabelyse@gmail.com
</td>
<td class="px-4 py-1">
    20
</td>
<td class="px-4 py-1">
    1
</td>
<td class="px-4 py-1">
    0
</td>
<td class="px-4 py-1">
    21
</td>
</tr>

        </tbody>
    </table>
</div>
    
    </>
  )
}

export default Landlordaccount