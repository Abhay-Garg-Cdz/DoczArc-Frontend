import {React,useContext, useEffect} from "react";

import Card from "./Card";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const DocCards = ({documents}) => {
const navigate =   useNavigate()
const{loading,setLoading} = useContext(AppContext);

  return (
    <div className="w-[90%] flex flex-col justify-center text-black">
      <div className="mx-auto ">
      <button onClick={(event)=>{
        event.preventDefault();
        navigate('/addDocument');
      }} className=" mx-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Add Document
  </span>
</button>
      
       
      </div>
      {
        !documents[0]?(<div className="text-black text-center justify-center  text-5xl mt-16 mx-auto">Looks like you have no docs. uploaded yet</div>):(<div className="grid grid-cols-3 px-4">
        {
         !loading &&(
           documents.map((doc,index)=>{
             return (
               <Card key={index} doc={doc} ></Card>
             )
           })
         )
        }
       </div>)
      }
      
      
    </div>
  );
};

export default DocCards;
