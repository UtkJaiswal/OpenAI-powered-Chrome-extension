import React from 'react'
import { VscGear } from "react-icons/vsc";
import { ROUTES } from '../utils/routes';


function Generator({ setPage, resume, setResume, openAIKey, setOpenAIKey }) {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row justify-between mx-5 my-3 items-center'>
            <button className='border-2 border-solid border-blue-500 text-blue-500 text-lg'>
                Generate
            </button>

            <h2 className='text-2xl font-bold'>LinkedIn Cover Letter Generator</h2>

            <button onClick={()=>{
                setPage(ROUTES.PROFILE)
            }} className='border mr-[1px] p-2 border-solid border-gray-600 rounded-[100%]'>
                <VscGear />
            </button>
        </div>

        <div className='flex mx-5'>
            <textarea
            rows={12}
            className='w-full'
            placeholder='Generated Cover Letter'
            />
        </div>
    </div>
  )
}

export default Generator