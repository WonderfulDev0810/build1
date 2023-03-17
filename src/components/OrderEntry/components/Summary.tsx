import React from "react";

const Table = () => {
  return (
    <div>
      <label className="font-bold">Order Summary</label>
      <div className="p-2 rounded bg-gray-100 min-h-[146px]">
        <table className="w-full text-sm table-fixed">
          <tbody className="h-full">
            <tr className=" py-4">
              <td>Order Date</td>
              <td>3/11&nbsp; </td>
              <td>Pickup Date</td>
              <td>3/2&nbsp; </td>
              <td>Extra Miless</td>
              <td>20&nbsp; </td>
            </tr>
            <tr className=" py-4">
              <td>Dumster $</td>
              <td>20&nbsp; </td>
              <td>Days $</td>
              <td>20&nbsp; </td>
              <td>Mileage $</td>
              <td>20&nbsp; </td>
            </tr>
            <tr className=" py-4">
              <td>Shingles $</td>
              <td>20&nbsp; </td>
              <td>Conerete $</td>
              <td>20&nbsp; </td>
              <td>Labor/Misc Cost $</td>
              <td>20&nbsp; </td>
            </tr>
            <tr className=" py-4">
              <td>Sales TAX $</td>
              <td>20&nbsp; </td>
              <td>Total Cost $</td>
              <td>20&nbsp; </td>
              <td>Payments $</td>
              <td>20&nbsp; </td>
            </tr>
            <tr className=" py-4">
              <td>Balance $</td>
              <td>20&nbsp; </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
