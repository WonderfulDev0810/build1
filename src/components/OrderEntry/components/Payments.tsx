import React from "react";

import { FaBookOpen, FaCreditCard, FaDollarSign, FaEdit, FaRegTrashAlt } from 'react-icons/fa'

interface Payment {
  date: string;
  type: string;
  amount: number;
}

const Payments = () => {
  const payments: Payment[] = [
    { date: "3/11/2023", type: "Cash", amount: 153 },
    { date: "3/12/2023", type: "Card", amount: 200 },
    { date: "3/13/2023", type: "Card", amount: 300 }
  ];
  return (
    <div className="panel">
      <div className="panel-header">
        <h3 className="font-bold flex items-center"><FaBookOpen className="w-6 h-6 mr-1" />Payments</h3>
      </div>
      <div className="panel-body">
        {payments.map(({ date, type, amount }, i) => (
          <div key={`payment-item-${i}`} className="flex justify-between items-center gap-1">
            <div className="flex items-center">
              <span className="w-4 mr-1 flex-none" title={type}>{type === 'Cash' ? <FaDollarSign className="w-4 h-4" /> : <FaCreditCard className="w-4 h-4" />}</span>
              <div className="flex gap-x-1">
                <span>{date}</span>
                <span className="text-right w-20">${amount.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex">
              <button className="btn-text text-blue-500"><FaEdit className="w-4 h-4" /></button>
              <button className="btn-text ml-1 text-red-500"><FaRegTrashAlt className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;
