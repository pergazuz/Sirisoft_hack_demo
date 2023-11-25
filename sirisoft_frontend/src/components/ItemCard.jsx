import React from 'react';

function ItemCard({ title, description, imageUrl, topBarText }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4 relative flex w-1/2 h-2/3"> {/* Added flex for layout */}
      <div className="bg-gradient-custom text-white py-1 px-4 rounded-t-lg absolute top-0 left-0 right-0">
        <span>{topBarText}</span>
      </div>
      
      <div className='mt-6'>
      <img src={imageUrl} alt={title} className="w-10 h-10 object-cover mb-2" />
      <div className="ml-3">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
}

export default ItemCard;
