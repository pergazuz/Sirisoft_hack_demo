import React from 'react';
import ItemCard from './ItemCard';

function HomePage() {
  return (
    <div className="flex flex-wrap justify-between p-10">
      <ItemCard
        title="Sample Item"
        description="This is a sample item card."
        imageUrl="/profile.png" // Replace with your image path
        topBarText="325 - KMUTT"
      />
      <ItemCard
        title="Sample Item"
        description="This is a sample item card."
        imageUrl="/profile.png" // Replace with your image path
        topBarText="308 - CRA"
      />
      <ItemCard
        title="Sample Item"
        description="This is a sample item card."
        imageUrl="/profile.png" // Replace with your image path
        topBarText="307 - PSCM"
      />
      <ItemCard
        title="Sample Item"
        description="This is a sample item card."
        imageUrl="/profile.png" // Replace with your image path
        topBarText="356 - KMUTT"
      />
    </div>
  );
}

export default HomePage;
