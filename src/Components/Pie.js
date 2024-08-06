import React from 'react';

const Pie = ({ percentage }) => {
  const radius = 50; // Adjust radius as needed
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  const cxcy = 70 ;
  return (
    <svg width={140} height={ 140}>
      <circle cx={cxcy} cy={cxcy} r={radius}   strokeWidth="1" />
      <circle
        cx={cxcy}
        cy={cxcy}
        r={radius}
        fill="transparent"
        stroke="blue" // Replace with your desired color
        strokeWidth="10"
        strokeDasharray={strokeDasharray}
        strokeLinecap="round"
      />
       <text
        x={cxcy}
        y={60}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
          fontSize="20px"
      >
        {percentage}%
       
      </text>
      <text
        x={cxcy}
        y={75}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
         fontSize="7px"
      >
        Goal 
      </text>
      
      <text
        x={cxcy}
        y={85}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
         fontSize="7px"
      >
        Completed 
      </text>
      <text
        x={cxcy}
        y={130}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
         fontSize="7px"
      >
        *The values here has been rounded off 
      </text>
    </svg>
  );
};

export default Pie;
