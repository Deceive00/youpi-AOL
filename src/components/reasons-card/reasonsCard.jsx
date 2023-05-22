import React from 'react';

const ReasonsCard = ({ img, description, color, colorInside }) => {
  return (
    <div className={`m-6 bg-${color} w-[25vw] h-[43vh] flex justify-center rounded-3xl`}>
      <div className="w-[90%] m-auto">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <div className={`bg-${colorInside} py-3 flex justify-center w-[90%] rounded-3xl`}>
              <img src={img} alt="reasons-image" className="w-[90%] px-[20%]"/>
            </div>
          </div>
          <div className="flex justify-center">
            <p className='text-white w-[90%] h-auto text-4xl font-serif font-extrabold mt-8'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonsCard;
