import React from 'react';

function HistoryCard({ data }) {
    return (
      <div className="bg-[#F6F6F6] rounded-lg shadow-lg p-4 mb-4 relative flex w-full h-[150px]">
        <div className="bg-gradient-custom text-white py-1 px-4 rounded-t-lg absolute top-0 left-0 right-0">
          <span>{data.name}</span>
        </div>
        <div className="flex items-center p-2 mb-[-26px]">
          <img src={data.image} alt={data.name} className="h-20 w-20 rounded-full mr-4" />
          <div className="flex-grow">
            <div>{data.profile_name}</div>
          </div>
          <div className="flex-grow ml-6">
            <div>Type of activity: Movement</div>
          </div>
          <div className="flex items-center text-[#4C43D6] font-bold py-2 px-6 ml-4 rounded-full border-2 border-[#4C43D6]">
            <div className='mr-2'>Status  </div>
            <div className='text-white text-xs bg-[#FB0000] flex justify-center items-center w-24 h-5 rounded-full ml-1 mr-1'>High HR</div>
            <div className='text-white text-xs bg-gradient-custom flex justify-center items-center w-24  h-5 rounded-full'>VISITOR</div>
          </div>
          <div className="flex-grow ml-10">
            <div>Date Time: {data.date}</div>
          </div>
        </div>
      </div>
    );
}

export default HistoryCard;
