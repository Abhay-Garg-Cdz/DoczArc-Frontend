import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { FileStack } from "lucide-react";
const Navbar = () => {
  const { isLogin, setIsLogin } = useContext(AppContext);
  return (
    <div className="h-[10vh] mt-4 bg-black  p-4 gap-64 shadow-[-1px_1px_10px_3px_#4299e1] flex flex-row px-5 mx-auto items-center justify-around rounded-xl  text-white text-xl  w-[60%]">
      <div className="  flex flex-row">
        <Link to="/">
          <img className="h-[50px]  w-[50px]" src={logo} alt="" />
        </Link>
        <div className=" items-center mt-3 px-0 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
          <Link to="/">DoczArc</Link>
        </div>
      </div>

      <div className="">
        {isLogin ? (
          <button className="border-slate-950 px-4 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-blue-300/[0.8] hover:shadow-lg">
            <div>
              <Link className="flex flex-row  " to="/docs">
                <FileStack size={32}></FileStack>
                
                  My Documents
               
              </Link>
            </div>
          </button>
        ) : (
          <div className=""></div>
        )}
      </div>
      <div className="">
        {isLogin ? (
          <button
            className="px-4 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-blue-300/[0.8] hover:shadow-lg"
            onClick={(event) => {
              event.preventDefault();
              setIsLogin(false);
            }}
          >
            {" "}
            <Link to="/">Logout</Link>
          </button>
        ) : (
          <button className="px-4 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-blue-300/[0.8] hover:shadow-lg">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
