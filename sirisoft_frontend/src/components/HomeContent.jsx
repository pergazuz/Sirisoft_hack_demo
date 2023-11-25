import React from 'react';
import ItemCard from './ItemCard';

function HomePage() {
  // Define an array of item data
  const items = [
    {
      title: "Panupong Kaewkhao",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "325 - KMUTT",
      HeartBeat: "80",
    },
    {
      title: "Panupong Kaewkhao",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "308 - CRA",
      HeartBeat: "90",
    },
    {
      title: "Panupong Kaewkhao",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "307 - PSCM",
      HeartBeat: "95",
    },
    {
      title: "Panupong Kaewkhao",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "356 - KMUTT",
      HeartBeat: "110",
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
          />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
