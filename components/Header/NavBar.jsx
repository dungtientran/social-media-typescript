import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TbMessageCircle } from 'react-icons/tb';
import { useAppDispatch } from '../../store/hooks';
import { openBoxSearch } from '../../store/reducers/boxJumpReducer';
import BoxNotification from '../BoxJump/BoxNotification';

const nav = [
    {
        icon: <AiOutlineHome size={22} />,
        patch: '/',
        title: 'Trang chủ'
    },
    {
        icon: <AiOutlineSearch size={22} />,
        title: 'Tìm kiếm'
    },
    {
        icon: <BsPeople size={22} />,
        title: 'Lời mời kết bạn'
    },
    {
        icon: <IoMdNotificationsOutline size={22} />,
        title: 'Thông báo'
    },
    {
        icon: <TbMessageCircle size={22} />,
        title: 'Tin nhắn'
    },
]


const NavBar = () => {
    const dispatch = useAppDispatch();
    const [isOpenNotify, setIsOpenNotift] = useState(null);

    const handleClickNavItem = (item) => {
        console.log(item);
    }

    return (
        <ul className='flex gap-6 w-full justify-between relative'>
            <Link title='Trang chủ' className='cursor-pointer text-orange-light text-hover' href='/'><AiOutlineHome size={22} /></Link>

            <li onClick={() => dispatch(openBoxSearch(true))} title='Tìm kiếm' className='lg:hidden cursor-pointer text-orange-light text-hover' ><AiOutlineSearch size={22} /></li>
            <li onClick={() => setIsOpenNotift('requestfriend')} title='Lời mời kết bạn' className='cursor-pointer text-orange-light text-hover' >
                <BsPeople size={22} />
            </li>
            <li onClick={() => setIsOpenNotift('notification')} title='Thông báo' className='cursor-pointer text-orange-light text-hover' >
                <IoMdNotificationsOutline size={22} />
            </li>
            <li onClick={() => setIsOpenNotift('messenger')} title='Tin nhắn' className='cursor-pointer text-orange-light text-hover' >
                <TbMessageCircle size={22} />
            </li>
            {isOpenNotify && <BoxNotification keyBox={isOpenNotify} />}

        </ul>
    )
}
export default NavBar