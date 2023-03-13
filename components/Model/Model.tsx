import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

interface ModelProps {
    title: string,
    openModel: any,
    children: any
}


const Model = ({ title, openModel, children }:ModelProps) => {
    return (
        <div
            className='bg-black-rgba fixed top-0 left-0 bottom-0 w-full h-screen z-50 flex items-center justify-center'
            onClick={() => openModel()}
        >
            <div
                className='min-w-[600px] max-h-[95vh] box  m-auto overflow-y-auto scrollChatAll bg-bg-header-light rounded-lg'
                onClick={(e) => e.stopPropagation()}
            >
                <div className=' flex items-center justify-center py-4 border-b relative'>
                    <span
                        className='text-xl font-semibold'
                    >
                        {title || 'Loading'}
                    </span>
                    <span
                        className='absolute right-4 text-gray-500 bg-[#E4E6EB] rounded-full cursor-pointer'
                        onClick={() => openModel()}
                    >
                        <MdOutlineCancel size={30} />
                    </span>
                </div>
                <div className='flex flex-col items-center justify-center h-full p-3'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Model