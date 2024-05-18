import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";

const Card = ({ doc }) => {
  const{userName} =useContext(AppContext);

  const handleGet = async(event)=>{
    event.preventDefault();
     
    
  }
  
  return (
    <div className=" bg-gray-500 m-10  text-2xl w-[250px] h-[150px] rounded-2xl flex flex-col gap-4 hover:bg-gray-600 transition-all">
      
      <div className="text-black  ml-16 mt-16 ">
        {doc}
      </div>
      <div className="text-black text-center mx-auto rounded-lg btn ">
      <button onClick={handleGet} className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
  Download
</button>
      </div>
    </div>
  );
};

export default Card;
