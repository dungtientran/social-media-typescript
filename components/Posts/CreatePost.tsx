'use client';
import React, { useState, useEffect } from 'react';
import { FcAddImage, FcVideoCall } from 'react-icons/fc';
import Model from '../Model/Model';
import CreatePostModel from './CreatePostModel';


interface CreatePostProps {
    user: {
        name: string,
        avatar: string
    }
}

const CreatePost = ({ user }: CreatePostProps) => {

    const [isOpenModelPost, setIsOpenModelPost] = useState<boolean>(false);
    const [titlePost, setTitlePost] = useState<string>('');
    const openModelPost = (item: boolean) => setIsOpenModelPost(item);

    useEffect(() => {
        isOpenModelPost ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    }, [isOpenModelPost]);

    return (
        <div className='p-3 bg-bg-header-light rounded-lg '>

            <div className='flex gap-3'>
                <div className='w-[10%]'>
                    <div className='w-16 h-16 border-[2px] rounded-lg'>
                        <img
                            src='https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/333154586_884252436137925_7857236621616118064_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=3koxmelI8dIAX9xCBwf&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRgLiGKlQTh1i7RXeGH3iK770YQIg5Xj-_PaSoI-2w8RA&oe=643288CF'
                            alt=""
                            className='w-full h-full object-cover rounded-lg'
                        />
                    </div>
                </div>
                <div className='w-[90%]'>
                    <div onClick={() => setIsOpenModelPost(true)}>
                        <textarea
                            name=""
                            id=""
                            cols="10"
                            placeholder={`${user?.name} ơi, Bạn đang nghĩ gì thế`}
                            value={titlePost}
                            className='w-full outline-none bg-[#F0F2F5] rounded-lg p-3 text-white cursor-pointer'
                            onChange={(e) => setTitlePost(e.target.value)}
                        />
                    </div>

                </div>
            </div>

            <div className='flex items-center gap-4'>
                <button className='flex gap-1  py-1 px-4 rounded-lg'>
                    <FcAddImage size={25} />
                    <span>Photo</span>
                </button>
                <button className='flex gap-1 py-1 px-4 rounded-lg'>
                    <FcVideoCall size={25} />
                    <span>Video</span>
                </button>
            </div>




            {isOpenModelPost &&
                <Model title='Tạo bài viết' openModel={openModelPost} >
                    <CreatePostModel user={user} openModel={openModelPost} />
                </Model>
            }

        </div>
    )
}

export default CreatePost