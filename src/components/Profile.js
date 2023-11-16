import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

function Profile() {
  return (
    <div className='flex flex-col mx-5'>
        <div className='flex flex-row justify-between my-3 items-center'>
            <h2 className='text-2xl font-bold'>Profile</h2>
            <button className='border mr-[1px] p-2 border-solid border-gray-600 rounded-[100%]'>
                <FaArrowLeft />
            </button>
        </div>

        <form className='flex-col'>
            <div className='mb-6'>
                <label
                htmlFor='openAIKey'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your Open AI Key
                </label>
                <input 
                id = "openAIKey"
                name = "openAIKey"
                type = "text"
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg'
                placeholder='sk-...1234'
                required
                />
            </div>

            <div className='mb-6'>
                <label
                htmlFor='resume'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Your Resume
                </label>
                <textarea
                    id="resume"
                    name = "resume"
                    rows={8}
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg'
                    placeholder='Paste your resume here...'
                    ></textarea>
            </div>

            <div className='mb-6 text-center'>
                <button 
                type='submit'
                className='border-2 border-solid border-blue-500 text-blue-500 text-lg'
                >
                    Save
                </button>
            </div>
        </form>
    </div>
  )
}

export default Profile