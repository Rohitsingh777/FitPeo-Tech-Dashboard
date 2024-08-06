import React from 'react'
import Top from './Top'
import Mid from './Mid'
import Bottom from './Bottom'

export default function Board() {
  return (
    <div  className=' w-scren h-screen  bg-black'>
        <div className=' w-full h-1/4 flex justify-center align-middle items-center'>
            <Top/>
        </div>
        <div className=' w-full h-1/2 flex justify-center align-middle  items-center mt-8'>
            <Mid/>
        </div>
   
        <div className=' w-full flex justify-center align-middle  items-center'>
    <Bottom/>
        </div>
    </div>
  )
}
