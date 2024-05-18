import React from "react";
import Footer from "../Components/Footer";
import image from "../assets/images/vault.jpg";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import OurPromises from "./OurPromises";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-[100%] bg-black text-white flex flex-col">
      <div>
        <Navbar className=""></Navbar>
      </div>
      <div className="w-[70%]  mx-auto  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] my-5 text-black flex flex-col  rounded-3xl ">
        {/* section-1 */}
        <div className="h-[500px] p-4 relative ">
          <img className="rounded-xl h-[450px] w-full " src={image} alt="" />
          <div className=" text-6xl -bottom-1 text-white absolute left-24 flex right-32  bg-black rounded-2xl  py-4 px-0 items-center  justify-center ">
            Store Your Documents Online
          </div>
        </div>
        {/* section-2 */}
        <div className="p-4 ml-36 ">
          <div className="flex flex-col w-[80%]  bg-black text-white rounded-xl bg-gradient-to-r from-gray-500 to-gray-300 p-10 mt-5 ">
            <div className="text-3xl  text-black p-2">
              <div className="py-3 ml-10">
                Welcome to our secure document vault!{" "}
              </div>
              <div className="w-[60%] ml-10">
                Safeguard your important files with us!
              </div>
              <button onClick = {()=>navigate('/signup')} className=" ml-80 mt-4 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                Get Started &rarr;
              </button>
            </div>
          </div>
        </div>
        {/* section-3 */}
        <div className="p-4">
          <OurPromises className=""></OurPromises>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
