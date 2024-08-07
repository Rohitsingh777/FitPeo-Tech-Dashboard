
import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export default function Nav() {
  return (
    <>

<nav class="border-gray-200 bg-neutral-800 w-full">

  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
    </div>
    

    <div class="hidden w-full md:block md:w-auto  items-center" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 items-center">
        <li>
         <HomeIcon/>
        </li>
        <li>
<SettingsIcon/>  
        </li>
        <li>

    <NotificationsNoneIcon/>
        </li>
        <li>
        <Avatar alt="User Avatar" src={ 'https://images.pexels.com/photos/27364883/pexels-photo-27364883/free-photo-of-retratos-de-um-jovem-dancarino-e-influencer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' ||''} />   
        </li>
      </ul>
    </div>
  </div>
</nav>



</>
  )
}




