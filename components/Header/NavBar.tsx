import Link from 'next/link';
import React from 'react';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TbMessageCircle } from 'react-icons/tb';



const NavBar = () => {
    return (
        <div className='flex gap-6 w-full justify-between'>
            <Link title='Trang chủ' className='cursor-pointer text-orange-light text-hover' href='/'><AiOutlineHome size={22}/></Link>
            <span title='Lời mời kết bạn' className='cursor-pointer text-orange-light text-hover' ><BsPeople size={22}/></span>
            <span title='Thông báo' className='cursor-pointer text-orange-light text-hover' ><IoMdNotificationsOutline size={22}/></span>
            <span title='Tin nhắn' className='cursor-pointer text-orange-light text-hover' ><TbMessageCircle size={22}/></span>
        </div>
    )
}
 export default NavBar