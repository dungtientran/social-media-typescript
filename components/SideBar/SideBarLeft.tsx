import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { GrGroup } from 'react-icons/gr';
import { IoIosArrowForward, IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineGroups3 } from 'react-icons/md';
import { useAppSelector } from '../../store/hooks';


const social = [
  {
    icon: <AiOutlineHome size={20} />,
    name: 'Bảng tin'
  },
  {
    icon: <AiOutlineUser size={20} />,
    name: 'Cá nhân',
    subName: ['Trang cá nhân', 'Ảnh', 'Video']
  },
  {
    icon: <FiUsers size={20} />,
    name: 'Mọi người',
    subName: ['Bạn bè', 'Lời mời kết bạn', 'Lời mời đã gửi']
  },
  {
    icon: <MdOutlineGroups3 size={20} />,
    name: 'Nhóm',
  },
  {
    icon: <IoMdNotificationsOutline size={20} />,
    name: 'Thông báo',
  },
]

const SideBarLeft = () => {

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const {isOpenSideBar} = useAppSelector(state => state.sideBarLeft);

  return (
    <div className={`fixed top-0 left-0 mt-[64px] bottom-0 bg-bg-header-light p-3 sidebar-left text-[#777D74] duration-500 ${!isOpenSideBar ? 'w-[220px]': 'w-[70px]'}`}>
      <div >
        <h2 className='tracking-normal uppercase'>Social</h2>
        <ul className='space-y-5 p-3 cursor-pointer'>
          {social?.map((item, index) => (
            <li title={item?.name} key={index} className= 'flex items-center gap-3 hover:text-orange duration-500 relative   ' onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
              {/* <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span>{item?.icon}</span>
                  <span className={`font-semibold  ${!isOpenSideBar && 'hidden'}`}>{item?.name}</span>
                </div>
                {item?.subName && (
                  <span className={`${!isOpenSideBar && 'hidden'}`}><IoIosArrowForward /></span>
                )}
              </div> */}
              <div className='z-20'>
                <span>{item?.icon}</span>
              </div>
              <div className={`flex items-center justify-between w-full duration-500 ${isOpenSideBar && 'text-[0px] '}`}>
                <p>{item?.name}</p>
                {item?.subName && (
                  <span className={`${!isOpenSideBar && ''}`}><IoIosArrowForward /></span>
                )}
              </div>



              {/* {item?.subName && (
                <ul className={` ${isOpenSubMenu ? 'flex': 'hidden' } flex-col  pl-9 mt-2 space-y-2  `}>
                  {item?.subName?.map((item, index) => (
                    <li title={item} key={index} className='list-disc'>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
        </ul>

    

      </div>

    </div>
  )
}

export default SideBarLeft