import { React, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import Navbar from "../Components/Navbar";
import toast from 'react-hot-toast';


const AddDocument = () => {
  const { userName } = useContext(AppContext);
  
  const navigate = useNavigate();
  const [document, setDocument] = useState({
    userName: userName,
    document_name: "Aadhar Card",
    file: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setDocument({
      ...document,
      [event.target.name]: event.target.value,
    });
  };
  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    document.file = file;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:3500/api/v1/addDocument",
        document,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        navigate("/docs");
      } else if (response.status === 203) {
        toast.error(response.data.message);
      }
      // console.log(response)
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
    console.log(document)
  };

  return (
    <div className="bg-black w-full h-[100vh]">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div className="  mx-auto flex flex-col w-[50%] border-2 border-neutral-600 items-center justify-between mt-[4%] max-w-md   rounded-none md:rounded-2xl p-4 md:p-8  bg-black ">
          <h2 className="font-bold text-xl text-neutral-200 ">Add Document</h2>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Add Document
                </label>
                <select
                  className=" flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                  id="document"
                  value={document.document_name}
                  name="document_name"
                  onChange={handleChange}
                >
               <option name='document' value='Aadhar Card'>Aadhar Card</option>
               <option name='document' value='Pan Card'>Pan Card</option>
               <option name='document' value='Voter Id Card'>Voter Id Card</option>
               <option name='document' value='Passport Card'>Passport Card</option>
               <option name='document' value='Driving License'>Driving License</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Upload Document
                </label>
                <input
                  className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                  id="file"
                  name="file"
                  onChange={handleFileUpload}
                  type="file"
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
              Add &rarr;
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDocument;
