import React from "react";

const OrderNotes = () => {
  return (
    <div>
      <label>Order Notes</label>
      <textarea
        className="block w-full h-[146px]"
        placeholder="Note any additional info related to the order..."
      ></textarea>
    </div>
  );
};

export default OrderNotes;
