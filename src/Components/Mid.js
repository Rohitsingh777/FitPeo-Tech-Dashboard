import React from 'react'
import TickPlacementBars from './Table'
import { BarChart } from '@mui/x-charts'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';


export default function Mid() {
  return (
    
    <div className=" w-full h-full bg-black mt-8">

<div className="h-full grid sm:grid-cols-[4fr_2fr] grid-cols-1  gap-4 p-2 ">
<div className=" h-full p-2 rounded-lg bg-neutral-800">
{/* <TickPlacementBars/> */}

<BarChart
      xAxis={
        [{ scaleType: 'band' , data: ['5', '9', '11' ,'13','15','17' ,'19','21','23','25','27'] ,
            gridLines: {
                display: true,
                color: 'black',
                lineWidth: 2,
              },
        }
    ]}
      series={[
        { data: [4, 3, 5, 2, 5, 6, 2, 5, 6, 2, 5]  ,color: '#7095ff' },
        { data: [1, 6, 3, 2, 5, 6, 2, 5, 6, 2, 5] ,color: '#7095ff' },
        { data: [2, 5, 6, 2, 5, 6, 2, 5, 6, 2, 5] ,color: '#7095ff' },
        
      ]}
      borderRadius={10}
      
    />

        </div>
        
<div className=" h-full p-2 rounded-lg  bg-neutral-800 grid grid-flow-row grid-rows-3  pl-8 pr-8 ">
    <div className='w-full flex justify-between items-center'>
        <div  className=' flex flex-row items-center'> 
        <TrackChangesIcon fontSize='large' color='error'/> 
        <p className='ml-4 text-2xl text-white'>Goals</p>
        </div>
      <ArrowForwardIosIcon fontSize='large' color='primary'/>
    </div>
    <div className='w-full flex justify-between items-center  '>
        <div  className=' flex flex-row items-center'> 
        <LunchDiningIcon fontSize='large' color='secondary'/> 
        <p className='ml-4 text-2xl text-white'>Popular Dishes </p>
        </div>
      <ArrowForwardIosIcon fontSize='large' color='primary'/>
    </div>
    <div className='w-full flex justify-between items-center  '>
        <div  className=' flex flex-row items-center'> 
        <FastfoodIcon fontSize='large' color='warning'/> 
        <p className='ml-4 text-2xl text-white'>Menus</p>
        </div>
      <ArrowForwardIosIcon fontSize='large' color='primary'/>
    </div>


        </div>

        </div>
        </div>


  )
}
