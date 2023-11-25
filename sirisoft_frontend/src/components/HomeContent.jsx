import React from 'react';
import ItemCard from './ItemCard';

function HomePage() {
  // Define an array of item data
  const items = [
    {
      title: "Pirawit Saeheng",
      description: "This is a sample item card.",
      imageUrl: "/profile_3.png", // Replace with your image path
      topBarText: "325 - KMUTT",
      HeartBeat: "80",
      BedExit: "1 H 21 M"
    },
    {
      title: "Papinwit​  Maneesr",
      description: "This is a sample item card.",
      imageUrl: "/profile_1.png", // Replace with your image path
      topBarText: "308 - CRA",
      HeartBeat: "90",
      BedExit: "3 H 10 M"
    },
    {
      title: "Panupong Kaewkhao",
      description: "This is a sample item card.",
      imageUrl: "/profile_2.png", // Replace with your image path
      topBarText: "307 - PSCM",
      HeartBeat: "95",
      BedExit: "2 H 21 M"
    },
    {
      title: "Natthakit Cheawketwit",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "356 - KMUTT",
      HeartBeat: "110",
      BedExit: "1 H 56 M"
    },
    

  ];

  return (
    <div className="flex flex-wrap justify-between p-10">
      {items.map((item, index) => (
        <div key={index} className="m-2"> 
          <ItemCard
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            topBarText={item.topBarText}
            HeartBeat={item.HeartBeat}
            BedExit={item.BedExit}
          />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
