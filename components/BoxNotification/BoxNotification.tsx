import React from 'react';
import Search from '../Header/Search';
import { AiOutlineClose } from 'react-icons/ai';

const BoxNotification = () => {
    return (
        <div className='w-full h-full animate-jumpDown shadow-md rounded-lg absolute bottom-0 top-0 lg:top-full mt-3 left-0 right-0 bg-bg-header-light '>
            <div className='flex items-center justify-between px-3 border-b border-border-rgba py-2 lg:hidden'>
                <div className='w-[50%] '>
                    <Search />
                </div>
                <span className='text-gray-500 cursor-pointer'><AiOutlineClose size={20} /></span>
            </div>
            <div className='overflow-y-auto bg-bg-header-light'>
                {/* Tìm kiếm gần đây */}
                <div className='flex items-center justify-between py-2 px-2'>
                    <p className='font-semibold pl-3'>Tìm kiếm gần đây</p>
                    <p className='text-sm text-gray-500'>Clear all</p>
                </div>
                {/* item search */}
                <div className='flex items-center justify-between hover:bg-text-light duration-500 py-2 px-3 border-b border-border-rgba'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-12 h-12 rounded-full overflow-hidden'>
                            <img
                                src=""
                                alt=""
                                className='image-cover'
                            />
                        </div>
                        <div>
                            <p>Trần Dũng</p>
                        </div>
                    </div>
                    <span className='text-gray-500 cursor-pointer'><AiOutlineClose size={18} /></span>
                </div>

                <div className='flex items-center justify-between hover:bg-text-light duration-500 py-2 px-3 border-b border-border-rgba'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-12 h-12 rounded-full overflow-hidden'>
                            <img
                                src=""
                                alt=""
                                className='image-cover'
                            />
                        </div>
                        <div>
                            <p>Trần Dũng</p>
                        </div>
                    </div>
                    <span className='text-gray-500 cursor-pointer'><AiOutlineClose size={18} /></span>
                </div>

                <div className='flex items-center justify-between hover:bg-text-light duration-500 py-2 px-3 border-b border-border-rgba'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-12 h-12 rounded-full overflow-hidden'>
                            <img
                                src=""
                                alt=""
                                className='image-cover'
                            />
                        </div>
                        <div>
                            <p>Trần Dũng</p>
                        </div>
                    </div>
                    <span className='text-gray-500 cursor-pointer'><AiOutlineClose size={18} /></span>
                </div>

                <div className='flex items-center justify-between hover:bg-text-light duration-500 py-2 px-3 border-b border-border-rgba'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-12 h-12 rounded-full overflow-hidden'>
                            <img
                                src=""
                                alt=""
                                className='image-cover'
                            />
                        </div>
                        <div>
                            <p>Trần Dũng</p>
                        </div>
                    </div>
                    <span className='text-gray-500 cursor-pointer'><AiOutlineClose size={18} /></span>
                </div>


                {/* Gợi ý */}

                <div className='flex items-center justify-between py-2 px-2'>
                    <p className='font-semibold pl-3'>Gợi ý</p>
                </div>
                <div className='flex items-center justify-between hover:bg-text-light duration-500 py-2 px-3 border-b border-border-rgba'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-12 h-12 rounded-full overflow-hidden'>
                            <img
                                src=""
                                alt=""
                                className='image-cover'
                            />
                        </div>
                        <div>
                            <p>Trần Dũng</p>
                        </div>
                    </div>
                    <span className='text-gray-500 cursor-pointer'><AiOutlineClose size={18} /></span>
                </div>
            </div>
        </div>
    )
}

export default BoxNotification