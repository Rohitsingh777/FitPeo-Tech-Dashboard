import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { PieChart } from "@mui/x-charts/PieChart";
import { Hidden, styled } from "@mui/material";
import { useDrawingArea } from "@mui/x-charts";
import Pie from "./Pie";

const data = [
  { value: 70, label: "Done" , color : 'blue' },
  { value: 30, label: "B"  , color : 'hotpink'},
];

const size = {
  // width: 100,
  // height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

export default function Top() {
  return (
    <div className=" w-full h-full">
      <div className=" h-1/6 w-full  bg-black text-3xl text-white font-bold  pl-6 mt-8">
        DASHBOARD
      </div>

      <div className="h-full grid sm:grid-cols-[4fr_2fr] grid-cols-1  gap-2 p-2 ">

        <div className=" h-full p-1 rounded-lg ">
          <div className=" grid sm:grid-cols-4  grid-cols-2  gap-4   p-1 w-full h-full">
            <div className="h-full">
              <Totalcomponent />
            </div>

            <div className="h-full ">
              <Totalcomponent />
            </div>

            <div className="h-full ">
              <Totalcomponent />
            </div>

            <div className="h-full ">
              <Totalcomponent />
            </div>
          </div>
        </div>

        <div className=" h-full rounded-lg p-1">
          <div className=" p-1  w-full h-full  bg-neutral-800 rounded-lg flex">
            <div className=" h-full md:w-4/6  w-2/6  pl-4">
              <div className=" h-1/4 flex  items-center  justify-start ">
                <div className="  h-min text-white ">Net Profit</div>
              </div>
              <div className=" h-1/2 flex  items-center  justify-start md:text-5xl  font-bold text-white">
                $6757
              </div>
              <div className=" h-1/4 flex  items-start  justify-start text-green-400 text-xl font-bold ">
                <ArrowDropUpIcon color="success" /> 3%
              </div>
            </div>
            <div className=" h-full md:w-2/6 w-4/6 bg-neutral-800 flex items-center justify-center p-1">
              <div className="  overflow-hidden  w-full h-full">
                <Pie percentage={70} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function Totalcomponent() {
  return (
    <div className=" h-full w-full p-1 bg-neutral-800   rounded-lg">
      <div className=" w-full h-3/5 ">
        <div className=" p-4 pt-4">
          <ShoppingBagIcon fontSize="large" color="blue" />
          <div className="  w-full flex justify-start  items-end  md:text-xl  text-white">
            Total Orders
          </div>
        </div>
      </div>

      <div className=" w-full flex-grow h-2/5 flex justify-center  items-center md:px-4 px-2">
        <div className=" text-white  w-1/2 md:text-4xl  text-2xl font-bold mr-1 ">75</div>
        <div className=" text-green-400  w-1/2 md:text-xl  font-bold  flex justify-end ">
          <ArrowDropUpIcon color="success" /> 3%
        </div>
      </div>
    </div>
  );
}

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
