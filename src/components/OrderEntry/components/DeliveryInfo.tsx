import React from 'react';
import { FaInstalod } from 'react-icons/fa'

const DeliveryInfo = () => {
  // const onChange = (string:val) => {
  //   return val;
  // };
  return (
    <div className="panel">
      <div className="panel-header">
        <h3 className="font-bold flex items-center"><FaInstalod className="w-6 h-6 mr-1" />Delivery Contact & Info</h3>
      </div>
      <div className="panel-body space-y-2">
        <div className='space-y-2'>
          <div className="form-control">
            <div>
              <label>Phone Number</label>
            </div>
            <div className="input-inline">
              <input type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className="form-control">
            <div>
              <label className="">Custom Name</label>
            </div>
            <div className="input-inline">
              <input type="text" placeholder="Custom Name" />
            </div>
          </div>
          <div className="form-control">
            <div>
              <label>Email Address</label>
            </div>
            <div className="input-inline">
              <input type="text" placeholder="Email Address" />
            </div>
          </div>
          <div className="form-control">
            <div>
              <label>Billing Address</label>
            </div>
            <div className="input-inline">
              <input type="text" className="" placeholder="Billing Address" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className='space-y-2'>
            <div className='form-control'>
              <div className="input-block">
                <input type="text" placeholder="Dumpester Size" className="" />
              </div>
            </div>
            <div className='form-control'>
              <div className="input-block">
                <input type="text" placeholder="Day Rental" className="" />
              </div>
            </div>
            <div className="form-control">
              <div className="input-block">
                <input type="text" placeholder="Miles One Way" className="w-2/3" />
              </div>
            </div>
            <div className="form-control">
              <div className="input-block">
                <input type="text" placeholder="SQ. of Shingles" />
              </div>
            </div>
          </div>
          <div className='space-y-2'>
            <div className="form-control">
              <div className="input-block">
                <input type="text" placeholder="Concrete (Tons)" />
              </div>
            </div>
            <div className="form-control">
              <div className="input-block">
                <input type="text" placeholder="Labor / Misc" />
              </div>
            </div>
            <div className="form-control">
              <div className="input-block">
                <input type="text" placeholder="Delivery Date" />
              </div>
            </div>
            <div className="form-control">
              <div className="input-block">
                <input type="text" placeholder="Morning or Afternoon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
