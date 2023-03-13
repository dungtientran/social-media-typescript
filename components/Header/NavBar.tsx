import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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
    const [isOpenNotify, setIsOpenNotift] = useState(false);
    const router = useRouter();
    const notifyRef = React.useRef<HTMLLIElement>(null);

    // useEffect(() => {

    //     let hadleClickOusideDot = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //         if (!notifyRef?.current?.contains(e.target as any)) {
    //             // setIsOpenNotift(true)
    //             console.log(1);
    //         }else{
    //             console.log(2);
    //         }
    //     }
    //     window.addEventListener('mousedown', hadleClickOusideDot as any)
    //     return () => {
    //         document.removeEventListener('mousedown', hadleClickOusideDot as any)
    //     }
    // }, []);
    const handleClickNavItem = (item: string | undefined, index:number) => {
        if (item) {
            router.push(item)
        }
         if(index === 1) {
            dispatch(openBoxSearch(true))
         }
    }

    return (
        <ul className='flex gap-6 w-full justify-between relative'>
            {/* <Link title='Trang chủ' className='cursor-pointer text-orange-light text-hover' href='/'><AiOutlineHome size={22} /></Link>

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
            {isOpenNotify && <BoxNotification keyBox={isOpenNotify} />} */}

            {nav?.map((item, index) => (
                <li
                    onClick={() => handleClickNavItem(item?.patch, index)}
                    key={index} title={item?.title}
                    className={`cursor-pointer relative text-orange-light text-hover ${index === 1 && 'lg:hidden'}`}
                    ref={notifyRef}
                >
                    <span>{item?.icon}</span>
                    {index !== 0 && (
                        <div>
                            {isOpenNotify && <BoxNotification keyBox={item?.title} />}

                        </div>
                    )}
                </li>
            ))}

        </ul>
    )
}
export default NavBar