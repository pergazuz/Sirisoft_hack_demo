import React from 'react';
import ItemCard from './ItemCard';

function HomePage() {
  // Define an array of item data
  const items = [
    {
      title: "Sample Item 1",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "325 - KMUTT",
    },
    {
      title: "Sample Item 2",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "308 - CRA",
    },
    {
      title: "Sample Item 3",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "307 - PSCM",
    },
    {
      title: "Sample Item 4",
      description: "This is a sample item card.",
      imageUrl: "/profile.png", // Replace with your image path
      topBarText: "356 - KMUTT",
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
          />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
