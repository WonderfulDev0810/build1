import CustomerInfo from '../components/customerInfo'
import DeliverInfo from '../components/delieverInfo';
import Payment from '../components/Payment';
import Previous from '../components/Previous';
import Table from '../components/Tabel';


const home = () => {
  return (
    <>
      <div className='flex pt-6 pb-6  '>
        <div className='absolute left-7 pl-2 '>
          <h1 className='text-lg font-bold'>ORDER ENTERY</h1><h3 className='text-sm font-thin'>(ORDER NUMBER:123123)</h3>
        </div>
        <div className='absolute right-6 pr-2 p-4'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">NEW ORDER</button>
        </div>
      </div>
      <div className='flex-auto md:justify-center lg:justify-center grid grid-flow-col gap-4 p-4 ml-1 mr-1'>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-1 lg:grid-cols-3">
          <div className='w-full aspect-video'>
            <CustomerInfo />
          </div>
          <div className='w-full aspect-video'>
            <DeliverInfo />
          </div>
          <div className='w-full aspect-video'>
            <Previous />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4 ml-1 mr-1">
        <div className='w-full'>
          <Payment />
        </div>
        <div className='w-full'>
          <Table />
        </div>
      </div>
      <div className='flex absolute right-7 p-4 mb-6'>
        <button class="mb-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          SAVE AS QUOTE
        </button><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button class="mb-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          SAVE ORDER
        </button>
      </div>
    </>
  );
}
export default home;