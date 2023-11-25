import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, fas } from "@fortawesome/free-solid-svg-icons";


function DetailModal({ item, onClose }) {
    if (!item) return null; // Ensure item is not null
  
    return (
        <div className="bg-[#F6F6F6] rounded-lg shadow-lg p-4 mb-4 absolute flex flex-col w-[1000px] h-[560px]">
            <div className="bg-gradient-custom text-white py-1 px-4 rounded-t-lg absolute top-0 left-0 right-0">
                <span>{item.topBarText}</span>
            </div>

            <div className="flex mt-6">
                <img src={item.imageUrl} alt={item.title} className="w-10 h-10 object-cover mb-2" />
                <div className="ml-3">
                    <h2 className="text-md mt-2">{item.title}</h2>
                </div>
            </div>

            {/* Status Boxes */}
            <div className="mt-2 flex-grow">
                <div className="flex flex-wrap">
                    <div className="bg-gradient-custom p-4 rounded-md m-1 flex-1 drop-shadow-xl text-white text-sm flex flex-col items-start">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faHeartPulse} className="text-[#FDD9FF] bg-black p-1.5 rounded-full text-2xl mr-2" />
                            <span className='mt-[-18px]'>HeartBeat</span>
                        </div>
                        <div className="ml-11 mt-[-20px]">
                            <p style={{ display: 'inline' }} className='font-bold text-2xl'>{item.HeartBeat}</p>
                            <p style={{ display: 'inline' }}> BPM</p>
                        </div>
                    </div>

                    <div className="bg-gradient-custom p-4 rounded-md m-1 flex-1 drop-shadow-xl text-white text-sm flex flex-col items-start">
                        <div className="flex items-center">
                            
                        <img src="/walk.png" alt="Logo" className="h-12 w-12"/>
                            <span className='mt-[-48px] ml-2'>Movement</span>
                        </div>
                        <div className="ml-14 mt-[-20px]">
                        <img src="/walk_level.png" alt="Logo" className='mt-[-10px]'/>
                            <p style={{ display: 'inline' }} className='text-xs '>Last Move: 20m ago</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="bg-gradient-custom-pink px-1 rounded-md m-1 flex-1 drop-shadow-xl text-white text-sm flex flex-col justify-center items-center">
                        Since Bed Exit
                        <p className='text-base font-bold'>{item.BedExit}</p>
                    </div>
                    <div className="bg-white p-2 rounded-md m-1 flex-1 drop-shadow-xl text-[#4138D0] text-sm flex flex-col justify-center items-center">
                        Status
                        <div className="flex justify-around w-full">
                            <div className='text-white text-xs bg-[#FB0000] flex justify-center items-center w-1/2 h-5 rounded-full mr-1'>High HR</div>
                            <div className='text-white text-xs bg-gradient-custom flex justify-center items-center w-1/2 h-5 rounded-full'>VISITOR</div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={onClose}>Back</button>
        </div>
    );
  }


  function HomeContent({ filter }) {


  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Define an array of item data
  const items = [
    {
      title: "Pirawit Saeheng",
      description: "This is a sample item card.",
      imageUrl: "/profile_3.png", // Replace with your image path
      topBarText: "325 - KMUTT",
      HeartBeat: "80",
      BedExit: "1 H 21 M",
      statusHighHR: true,
      statusVisitor: false,
      statusNeedVisitor: true,
      statusNormal: false
    },
    {
      title: "Papinwit​  Maneesr",
      description: "This is a sample item card.",
      imageUrl: "/profile_1.png", // Replace with your image path
      topBarText: "308 - CRA",
      HeartBeat: "90",
      BedExit: "3 H 10 M",
      statusHighHR: true,
      statusVisitor: true,
      statusNeedVisitor: false,
      statusNormal: false
    },
    {
      title: "Panupong Kaewkhao",
      description: "This is a sample item card.",
      imageUrl: "/profile_2.png", // Replace with your image path
      topBarText: "307 - PSCM",
      HeartBeat: "95",
      BedExit: "2 H 21 M",
      statusHighHR: true,
      statusVisitor: true,
      statusNeedVisitor: false,
      statusNormal: false
    },
    {
      title: "Natthakit Cheawketwit",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "356 - KMUTT",
      HeartBeat: "110",
      BedExit: "1 H 56 M",
      statusHighHR: false,
      statusVisitor: false,
      statusNeedVisitor: true,
      statusNormal: true
    },
    

  ];

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredItems = filter === 'all'
    ? items
    : filter === 'critical'
      ? items.filter(item => item.statusHighHR)
      : filter === 'visitNeeded'
        ? items.filter(item => item.statusNeedVisitor)
        : filter === 'par'
          ? items.filter(item => item.statusVisitor)
          : items;

  return (
    <div className="flex flex-wrap justify-between p-10">
      {filteredItems.map((item, index) => (
        <div key={index} className="m-2" onClick={() => handleCardClick(item)}> 
          <ItemCard
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            topBarText={item.topBarText}
            HeartBeat={item.HeartBeat}
            BedExit={item.BedExit}
            statusHighHR={item.statusHighHR}
            statusVisitor={item.statusVisitor}
            statusNeedVisitor={item.statusNeedVisitor}
            statusNormal={item.statusNormal}
          />
        </div>
      ))}
      {isModalOpen && <DetailModal item={selectedItem} onClose={handleCloseModal} />}
    </div>
  );
}

export default HomeContent;
