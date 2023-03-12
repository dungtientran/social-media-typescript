import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { GrGroup } from 'react-icons/gr';
import { IoIosArrowForward, IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineGroups3 } from 'react-icons/md';


const social = [
  {
    icon: <AiOutlineHome size={24} />,
    name: 'Bảng tin'
  },
  {
    icon: <AiOutlineUser size={24} />,
    name: 'Cá nhân',
    subName: ['Trang cá nhân', 'Ảnh', 'Video']
  },
  {
    icon: <FiUsers size={24} />,
    name: 'Mọi người',
    subName: ['Bạn bè', 'Lời mời kết bạn', 'Lời mời đã gửi']
  },
  {
    icon: <MdOutlineGroups3 size={24} />,
    name: 'Nhóm',
  },
  {
    icon: <IoMdNotificationsOutline size={24} />,
    name: 'Thông báo',
  },
]

const SideBarLeft = () => {

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)

  return (
    <div className='fixed top-0 left-0 mt-[64px] bottom-0 w-[15%] bg-black p-3 text-[#777D74]'>
      <div >

        {/* <h2 className='tracking-normal uppercase'>Social</h2>
        <ul className='space-y-5 p-3 cursor-pointer'>
          {social?.map((item, index) => (
            <li title={item?.name} key={index} className='hover:text-orange duration-1000' onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span>{item?.icon}</span>
                  <span className='font-semibold'>{item?.name}</span>
                </div>
                {item?.subName && (
                  <span ><IoIosArrowForward /></span>
                )}
              </div>
              {item?.subName && (
                <ul className={` ${isOpenSubMenu ? 'flex': 'hidden' } flex-col  pl-9 mt-2 space-y-2  `}>
                  {item?.subName?.map((item, index) => (
                    <li title={item} key={index} className='list-disc'>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul> */}

        <h2 className='tracking-normal uppercase'>Social</h2>
        <aside>




          {social?.map((item, index) => (
            <ul className=''>
              <li title={item?.name} key={index} className='' onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
                {/* <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span>{item?.icon}</span>
                  <span className='font-semibold'>{item?.name}</span>
                </div>
                {item?.subName && (
                  <span ><IoIosArrowForward /></span>
                )}
              </div> */}

                <a href="#" className=''>
                  <span className=''>icon</span>
                  <span className=''>{item?.name}</span>
                  {item?.subName && (
                    <span className=''>-v</span>
                  )}
                </a>


                {item?.subName && (
                  <ul >
                    {item?.subName?.map((item, index) => (
                      <li title={item} key={index} className=''>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </li>
            </ul>
          ))}
        </aside>


      </div>

    </div>
  )
}

export default SideBarLeft