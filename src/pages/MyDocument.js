import React from "react";
import { useEffect,useContext,useState} from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DocCards from "../Components/DocCards";
import axios from 'axios'
import toast from 'react-hot-toast';
import AppContext from "../context/AppContext";



const MyDocument = () => {
  const navigate =   useNavigate()

  
const {userName,isLogin,setLoading} = useContext(AppContext);
const[documents,setDocuments] = useState([]);
  const fetchDocumentList = async()=>{
    const response  = await axios.post("http://localhost:3500/api/v1/getDocumentList",{
      userName: userName,
    },{
      headers: {
        "Content-Type": "application/json"
      }
    })
  
    
  
    if(response.data.success === true){
     setDocuments(response.data.documents);
    }
    else if(response.status === 203){
      toast.error(response.data.message); 
      return;
    }
  }
  useEffect(()=>{
    if(isLogin){
    setLoading(true);
    fetchDocumentList()
    setLoading(false);}
    else{
      navigate('/login')
    }
  },[])

  return (
    <div className="w-screen h-[100%] bg-black text-white flex flex-col">
      <div>
        <Navbar className=""></Navbar>
      </div>
      
      <div className="w-[70%]  mx-auto bg-white h-[100vh] rounded-3xl my-5 text-black flex flex-col ">
        <div className="w-[90%] h-[85%]   my-10 items-center p-2  mx-auto  justify-center rounded-xl  ">
          
          <DocCards documents={documents}></DocCards>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
      
    </div>
  );
};

export default MyDocument;
