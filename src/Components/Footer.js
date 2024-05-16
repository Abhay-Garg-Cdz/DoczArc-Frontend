import React from 'react'
import {Twitter,Youtube,Instagram,Facebook} from 'lucide-react'

const Footer = () => {
  return (
    <div className='h-[10vh] bg-black   flex flex-row px-5 mx-auto items-center rounded-2xl justify-center  text-white text-2xl  w-[70%]'>
      
         <div className='ml-10 text-white '>
          About Us
         </div>

         <div className='ml-20'>
          Pricing
         </div>
        <div className='justify-end ml-96 gap-8 flex flex-row'>
        <Twitter size={32} strokeWidth={2} />
        <Youtube size={32} strokeWidth={2} />
        <Instagram size={32} strokeWidth={2} />
        <Facebook size={32} strokeWidth={2} />
        </div>
    </div>
  )
}

export default Footer