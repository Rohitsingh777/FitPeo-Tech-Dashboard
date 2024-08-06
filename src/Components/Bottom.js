import React from 'react'
import CommentSection from './Comments'

export default function Bottom() {
  return (
   
    <div className=" w-full h-full bg-black mt-8">

<div className="h-full grid sm:grid-cols-[4fr_2fr] grid-cols-1  gap-4 p-2 ">
<div className=" h-full p-2 rounded-lg bg-neutral-800">


        </div>
        
<div className=" h-full p-2 rounded-lg  bg-neutral-800   pl-8 pr-8 ">
    <CommentSection/>
        </div>

        </div>
        </div>

  )
}
