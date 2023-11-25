import React from 'react';
import NavbarLeft from './NavbarLeft';
import HistoryCard from './HistoryCard';    

  
function HistoryPage() {
    // Example data array
    const historyData = [
      {
        image: "profile.png",
        name: "325 - KMUTT",
        status: "Completed",
        date: "2023-01-01",
        profile_name : "Pirawit Saeheng"
      },
      {
        image: "profile_1.png",
        name: "325 - KMUTT",
        status: "Completed",
        date: "2023-01-01",
        profile_name : "Pirawit Saeheng"
      },
      {
        image: "profile_3.png",
        name: "325 - KMUTT",
        status: "Completed",
        date: "2023-01-01",
        profile_name : "Pirawit Saeheng"
      },
      {
        image: "profile_2.png",
        name: "326 - KMUTT",
        status: "In Progress",
        date: "2023-02-01",
        profile_name : "Pirawit Saeheng"
      },
      
    ];
  
    return (
      <div className="flex h-screen">
        <NavbarLeft />
        <div className="flex-1 flex flex-col bg-[#E3E3E3]">
          <div className="px-10 pt-10 flex flex-col">
            <div className="text-black text-3xl font-bold py-2 px-2  rounded-full">
              History
            </div>
            <div className="mt-4">
              {historyData.map((item, index) => (
                <HistoryCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default HistoryPage;
  