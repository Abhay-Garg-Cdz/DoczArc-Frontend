import React from 'react'

const OurPromises = () => {
  return (
    <div className='flex flex-col bg-black text-white rounded-xl bg-gradient-to-r from-gray-300 to-gray-500 p-10 mt-5 '>
        <div className='text-4xl ml-[40%] text-black'>
            Our Promises
        </div>
        <div className='flex flex-row gap-5 justify-evenly mt-6  py-8 '>
            <div className='flex flex-col bg-white rounded-3xl text-center text-black w-auto px-10  py-4'>
                <div className='text-3xl  flex p-5'>Connectivity</div>
                <div className='text-2xl'>
                    <ul>
                        <li className='p-1  mb-2'>High Connectivity</li>
                        <li className='p-1 mb-2'>Responsive UI</li>
                        <li className='p-1 mb-2'>Access Anytime</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col bg-white rounded-3xl text-center text-black w-auto px-10 py-4 '>
                <div className='text-3xl mx-auto flex p-5'>Security</div>
                <div className='text-2xl'>
                    <ul>
                        <li className='p-1 mb-2'>Secure Login</li>
                        <li className='p-1 mb-2'>Secure Storage</li>
                        <li className='p-1 mb-2'>Provides Secured Access</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col bg-white rounded-3xl text-black text-center w-auto px-10 py-4'>
                <div className='text-3xl  flex p-5'>Flexibility</div>
                <div className='text-2xl'>
                    <ul>
                        <li className='p-1 mb-2'>-----------------</li>
                        <li className='p-1 mb-2'>-----------------</li>
                        <li className='p-1 mb-2'>-----------------</li>
                    </ul>
                </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default OurPromises