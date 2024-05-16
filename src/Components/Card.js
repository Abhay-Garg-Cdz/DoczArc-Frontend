import React from "react";

const Card = ({ card }) => {
  return (
    <div className=" bg-gray-300 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] m-10  text-2xl w-[250px] h-[150px] rounded-2xl flex flex-col hover:bg-gray-600 transition-all">
      
      <div className="text-yellow-400  ml-16 mt-16 ">
        {card.name}
      </div>
    </div>
  );
};

export default Card;
