import Link from 'next/link';
import React, { useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import BoxNotification from '../BoxNotification/BoxNotification';
import NavBar from './NavBar';
import Search from './Search';

const Header = () => {
    const [isOpenBoxSearch, setIsOpenBoxSearch] = useState(false);


    return (
        <div className='fixed top-0 left-0 right-0 bg-bg-header-light px-4 shadow-sm'>
            <div className='flex items-center justify-between py-1'>
                <div className='flex items-center gap-3'>
                    <span className=' lg:hidden text-hover duration-500 cursor-pointer text-base'><SlMenu /></span>
                    <Link href='/' className='flex items-center gap-2'>
                        <div className='w-10 h-10  md:w-14 md:h-14 '>
                            <img src='https://cdn-icons-png.flaticon.com/512/9940/9940550.png' alt="" className='image-cover' />
                            {/* <span><GiMoebiusTriangle size={30}/></span> */}
                        </div>
                        <h1 className='text-3xl hidden sm:block text-orange-light'>SocialV</h1>
                    </Link>
                    <span className=' hidden lg:block text-hover duration-500 cursor-pointer text-base'><SlMenu /></span>
                </div>
                <div className='hidden lg:block w-[24%] relative' >
                    <Search />
                    {isOpenBoxSearch && <BoxNotification />}
                </div>
                <div className='flex gap-6 items-center'>
                    <div className='hidden lg:block'>
                        <NavBar />
                    </div>
                    <div title='Tài khoản' className='flex items-center gap-1 cursor-pointer'>
                        <div className=' w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden '>
                            <img
                                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/326208745_815142056740560_3310644866093694202_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_v4wVhMKGcIAX_PrznR&_nc_ht=scontent.fhan17-1.fna&oh=00_AfACehk649YwOS8jagfuhLwQ87SQfA_bs4Mkk9g3mbTwbw&oe=6410317F"
                                alt=""
                                className='image-cover'
                            />
                        </div>
                        <div className='hidden lg:block text-xs'>
                            <p>Trần Dũng</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t p-2 w-full lg:hidden'>
                <NavBar />
            </div>
          

        </div>
        
    )
}

export default Header