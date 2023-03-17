import React, { useState } from "react";
import { FaHistory, FaRegCheckSquare, FaRegCopy, FaRegFile, FaRegFileAlt } from 'react-icons/fa';
interface Order {
  type: string;
  date: string;
  no: string;
  distance: string;
}

const ORDER_MOCK_DATA: Order[] = [
  { type: 'Quote', date: '03/05/2023', no: '5682', distance: 'ANYSTREET' },
  { type: '', date: '02/25/2023', no: '5681', distance: 'ANYSTREET' },
  { type: '', date: '02/15/2023', no: '5680', distance: 'ANYSTREET' },
  { type: '', date: '02/05/2023', no: '5679', distance: 'ANYSTREET' },
  { type: '', date: '01/05/2023', no: '5678', distance: 'ANYSTREET' },
]

const PreviousOrders = () => {
  const [orders] = useState<Order[]>(ORDER_MOCK_DATA);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3 className="font-bold flex items-center"><FaHistory className="w-6 h-6 mr-1" />Previous Orders</h3>
      </div>
      <div className="panel-body space-y-2">
        {orders.map(({ type, date, no, distance }, i) => (
          <div key={`order-item-${i}`} className="flex justify-between items-center gap-1">
            <div className="flex items-center">
              <span className="w-4 mr-1 flex-none" title={type}>{type === 'Quote' ? <FaRegFileAlt className="w-4 h-4" /> : <FaRegCheckSquare className="w-4 h-4" />}</span>
              <span>{`${date}-${no}-${distance}`}</span>
            </div>
            <button className="btn-text text-orange-500"><FaRegCopy className="w-4 h-4" /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousOrders;
