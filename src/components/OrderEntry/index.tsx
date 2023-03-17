import React from "react";

import { FaSwatchbook, FaShippingFast, FaUser, FaCalendar, FaUsers, FaChartBar, FaCog, FaListUl, FaPlus, FaSave, FaFile } from 'react-icons/fa'

import CustomerInfo from "./components/CustomerInfo";
import DeliveryInfo from "./components/DeliveryInfo";
import OrderNotes from "./components/OrderNotes";
import Payments from "./components/Payments";
import PreviousOrders from "./components/PreviousOrders";
import Summary from "./components/Summary";

const OrderEntry = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-[80px] border-b border-b-1 flex items-center p-4 justify-between">
        <div className="flex items-center">
          <FaShippingFast className="w-12 h-12 mr-1" /><h1 className="">Order Management</h1>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="flex items-center"><FaUser className="w-4 h-4 mr-1" /> admin</span>
          <a href='#'>Logout</a>
        </div>
      </div>
      <div className="flex">
        <div className="hidden lg:block w-[240px] border-r border-r-1 p-4 text-xl text-[#333]">
          <ul className="space-y-2">
          <li><a className="flex items-center" href=""><FaSwatchbook className="w-7 h-7 mr-2" />Order Entry</a></li>
          <li><a className="flex items-center" href=""><FaListUl className="w-7 h-7 mr-2" />Orders</a></li>
          <li><a className="flex items-center" href=""><FaCalendar className="w-7 h-7 mr-2" />Calendar</a></li>
          <li><a className="flex items-center" href=""><FaChartBar className="w-7 h-7 mr-2" />Reports</a></li>
          <li><a className="flex items-center" href=""><FaUsers className="w-7 h-7 mr-2" />Users</a></li>
          <li><a className="flex items-center" href=""><FaCog className="w-7 h-7 mr-2" />Settings</a></li>
          </ul>
        </div>
        <div className="flex-1 p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="md:text-xl font-bold flex items-center">
                <FaSwatchbook className="w-6 h-6 md:w-7 md:h-7 mr-1" /> Order Entry <small className="ml-1 md:ml-2 font-normal">(Order No: 123123)</small>
              </h1>
            </div>
            <div className="">
              <button className="btn-danger"><FaPlus className="w-4 h-4 mr-1"/> Create<span className="hidden sm:inline ml-1"> New ...</span></button>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="xl:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomerInfo />
              <DeliveryInfo />
            </div>
            <div className="xl:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Payments />
              <PreviousOrders />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="xl:col-span-1">
              <OrderNotes />
            </div>
            <div className="xl:col-span-1">
              <Summary />
            </div>
          </div>
          <div className="flex justify-center p-2">
            <button className="btn-info"><FaFile className="w-4 h-4 mr-1" />Save As Quote</button>
            <button className="ml-2 btn-primary"><FaSave className="w-4 h-4 mr-1" />Save Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEntry;
