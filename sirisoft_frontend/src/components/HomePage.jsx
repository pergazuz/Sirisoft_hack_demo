import React from 'react';
import HomeContent from './HomeContent'; // Import the HomeContent component
import NavbarTop from './NavbarTop'; // Import the NavbarTop component
import NavbarLeft from './NavbarLeft'; // Import the NavbarLeft component


function HomePage() {
  const [filter, setFilter] = React.useState('all');

  const handleFilterChange = (newFilter) => {
    console.log("Filter changing to:", newFilter); // Debugging line
    setFilter(newFilter);
  };

  return (
    <div className="flex h-screen">
      <NavbarLeft />
      <div className="flex-1 flex flex-col bg-[#E3E3E3]">
        <NavbarTop onFilterChange={handleFilterChange} />
        <HomeContent filter={filter} />
      </div>
    </div>
  );
}

export default HomePage;
