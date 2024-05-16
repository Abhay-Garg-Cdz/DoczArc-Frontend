import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DocCards from "../Components/DocCards";

const MyDocument = () => {
  return (
    <div className="w-screen h-[100%] bg-black text-white flex flex-col">
      <div>
        <Navbar className=""></Navbar>
      </div>
      
      <div className="w-[70%]  mx-auto bg-white h-[100vh] rounded-3xl my-5 text-black flex flex-col ">
        <div className="w-[90%] h-[85%]   my-10 items-center p-2  mx-auto  justify-center rounded-xl  ">
          
          <DocCards></DocCards>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyDocument;
