import { React, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {

  const navigate = useNavigate();
  const [passwordChangeData, setPasswordChangeData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setPasswordChangeData({
      ...passwordChangeData,
      [event.target.name]: event.target.value,
    });
  };

  

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response  = await axios.post("http://localhost:3500/api/v1/forgot-password",passwordChangeData,{
      headers: {
        "Content-Type": "application/json"
      }
    })
    
    if(response.status === 201) {
      toast.success("Password Changed Successfully")
      navigate("/login");
    }
    else if(response.status ===203){
      toast.error(response.data.message);
    }
    // console.log(response)
    } catch (error) {
      console.log(error)
    }

  };


 


  return (
    <div className="bg-black w-full h-[100vh]">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div className="  mx-auto flex flex-col w-[50%] border-2 border-neutral-600 items-center justify-between mt-[4%] max-w-md   rounded-none md:rounded-2xl p-4 md:p-8  bg-black ">
          <h2 className="font-bold text-xl text-neutral-200 ">Forgot Password</h2>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email ID
                </label>
                <input
                  className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email Id"
                  type="email"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  New Password
                </label>
                <input
                  className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="*************"
                  type="password"
                />
                
              </div>
            </div>
           
            <button
              className="  bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900
         to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium 
         shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
         dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Change Password &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
