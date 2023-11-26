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
              <img src="/profile_zoom.png" alt={item.title} className="w-full h-full object-cover" />
          </div>

          {/* Centering the button */}
          <div className="flex justify-center items-center mt-[-30px]">
              <button onClick={onClose} className='bg-gradient-custom w-20 h-10 rounded-full text-white'>Back</button>
          </div>
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
      statusNormal: false,
      RespiratoryRate: "20 BPM"
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
      statusNormal: false,
      RespiratoryRate: "30 BPM"
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
      statusNormal: false,
      RespiratoryRate: "23 BPM"
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
      statusNormal: true,
      RespiratoryRate: "29 BPM"
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
