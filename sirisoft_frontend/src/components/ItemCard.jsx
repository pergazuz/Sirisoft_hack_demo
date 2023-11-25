import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";

function ItemCard({ title, description, imageUrl, topBarText, HeartBeat, BedExit }) {
    return (
        <div className="bg-[#F6F6F6] rounded-lg shadow-lg p-4 mb-4 relative flex flex-col w-[470px] h-[260px]">
            <div className="bg-gradient-custom text-white py-1 px-4 rounded-t-lg absolute top-0 left-0 right-0">
                <span>{topBarText}</span>
            </div>

            <div className="flex mt-6">
                <img src={imageUrl} alt={title} className="w-10 h-10 object-cover mb-2" />
                <div className="ml-3">
                    <h2 className="text-md mt-2">{title}</h2>
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
                            <p style={{ display: 'inline' }} className='font-bold text-2xl'>{HeartBeat}</p>
                            <p style={{ display: 'inline' }}> BPM</p>
                        </div>
                    </div>

                    <div className="bg-gradient-custom p-5 rounded-md m-1 flex-1 drop-shadow-xl text-white text-sm">Movement</div>
                </div>
                <div className="flex flex-wrap">
                <div className="bg-gradient-custom-pink px-4 rounded-md m-1 flex-1 drop-shadow-xl text-white text-sm flex flex-col justify-center items-center">
                    Since Bed Exit
                    <p className='text-base font-bold'>{BedExit}</p>
                </div>
                    <div className="bg-white p-5 rounded-md m-1 flex-1 drop-shadow-xl text-[#4138D0] text-sm">
                        Status
                        
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
