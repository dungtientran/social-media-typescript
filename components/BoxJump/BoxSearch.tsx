import React from 'react'
import { useAppDispatch } from '../../store/hooks';
import { openBoxSearch } from '../../store/reducers/boxJumpReducer';
import Search from '../Header/Search'
import { AiOutlineClose } from 'react-icons/ai';
const BoxSearch = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className='flex items-center justify-between px-3 border-b border-border-rgba py-2 lg:hidden'>
                <div className='w-[50%] '>
                    <Search />
                </div>
                <span onClick={() => dispatch(openBoxSearch(false))} className='text-gray-500 cursor-pointer'><AiOutlineClose size={20} /></span>
            </div>
            <div className='bg-bg-header-light'>
                {/* Tìm kiếm gần đây */}
                <div className='flex items-center justify-between py-2 px-2'>
                    <p className='font-semibold pl-3'>Tìm kiếm gần đây</p>
                    <p className='text-sm text-gray-500'>Clear all</p>
                </div>
                {/* item search */}
                <div className='max-h-[250px] overflow-hidden'>
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

                    <div className='flex items-center justify-between hover:bg-text-light duration-500 py-2 px-3 border-b border-border-rgba '>
                        <div className='flex gap-3 items-center'>
                            <div className='w-12 h-12 rounded-full overflow-hidden r'>
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
                </div>


                {/* Gợi ý */}

                <div className='py-2 px-2' >
                    <p className='font-semibold pl-3'>Gợi ý</p>
                    <div className='flex'>
                        <div className=' hover:bg-text-light duration-500 py-2 px-3 border-b border-border-rgba'>
                            <div className='flex flex-col items-center'>
                                <div className='w-10 h-10 rounded-full overflow-hidden'>
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
                        </div>
                        <div className=' hover:bg-text-light duration-500 py-2 px-3 border-b border-border-rgba'>
                            <div className='flex flex-col items-center'>
                                <div className='w-10 h-10 rounded-full overflow-hidden'>
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
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxSearch
