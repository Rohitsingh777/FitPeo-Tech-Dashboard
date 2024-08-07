import React from 'react'
import Top from './Top'
import Mid from './Mid'
import Bottom from './Bottom'
import Nav from './Nav'

export default function Board() {
  return (
    <>
    {/* <Nav/> */}
    <div  className=' w-full bg-black  '>
        <div className=' w-full flex justify-center align-middle items-center md:h-48 '>
            <Top/>
        </div>
        <div className=' w-full flex justify-center align-middle  items-center md:mt-8 mt-4 md:h-72'>
            <Mid/>
        </div>
   
        <div className=' w-full flex justify-center align-middle md:min-h-96 items-center'>
    <Bottom/>
        </div>
    </div>
    </>
  )
}
