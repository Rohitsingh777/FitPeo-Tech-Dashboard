import React from "react";
import CommentSection from "./Comments";
import DataTable, { createTheme } from "react-data-table-component";
import { Orders } from "./data/Orders";

export default function Bottom() {


    const getStatusColor = (status) => {
        switch (status) {
          case 'Delivered':
            return 'green';
          case 'Cancelled':
            return 'red';
          case 'Pending':
            return '#ffff00a6';
          default:
            return 'gray';
        }
      };
    
  createTheme(
    "darker",
    {
         title : {
            fontsize : 500
         },
      text: {
        primary: "white",
        secondary: "#2aa198",
      },
      background: {
        default: "#262626",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#0006",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  const columns = [
    {
      name: "Customer",
      selector: (row) => row.Customer,
      sortable: true,
    },
    {
      name: "Order no",
      selector: (row) => row["Order No."],
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.Amount,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) =>(
        <div style={{
          backgroundColor: getStatusColor(row.Status),
          padding: '5px',
          borderRadius: '5px',
          color:'#ffffffba'

        }}>
          {row.Status}
        </div>
      ),
      sortable: true,
    },
    
  ];

  return (
    <div className=" w-full h-full bg-black mt-8 md:max-h-96 ">
      <div className="h-full grid sm:grid-cols-[4fr_2fr] grid-cols-1  gap-4 p-2 ">
        <div className=" h-full p-2 rounded-lg bg-neutral-800">
        
          <DataTable
          title="Recent Orders"
            columns={columns}
            data={Orders}
            //   pagination
            style={{ backgroundColor: "blue" }}
            defaultSortFieldId={1}
            theme="darker"
          />
        </div>

        <div className=" h-full md:max-h-96  p-2 rounded-lg  bg-neutral-800   pl-8 pr-8 ">
          <CommentSection /> 
        </div>
      </div>
    </div>
  );
}
