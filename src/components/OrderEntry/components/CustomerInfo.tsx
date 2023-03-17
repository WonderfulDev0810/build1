import { FaUserCircle, FaUserPlus } from 'react-icons/fa'

const CustomerInfo = () => {
  // const onChange = (string:val) => {
  //   return val;
  // };
  return (
    <div className="panel">
      <div className="panel-header flex justify-between items-center">
        <h3 className="font-bold flex items-center"><FaUserCircle className='w-6 h-6 mr-1' />Customer</h3>
        <div className="text-right">
          <button className="btn-icon bg-orange-500 hover:bg-orange-700"><FaUserPlus className='w-4 h-4' /></button>
        </div>
      </div>
      <div className="panel-body space-y-2">
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
        <div className="mt-2">
          <label>Customer Notes</label>
          <textarea
            className="block w-full"
            rows={8}
            placeholder="Note any additional info related to the customer..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
