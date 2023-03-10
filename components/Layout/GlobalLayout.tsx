import Header from '../Header/Header';
import { ReactNode } from 'react';
import BoxNotification from '../BoxNotification/BoxNotification';
import SideBarLeft from '../SideBar/SideBarLeft';
import SideBarRight from '../SideBar/SideBarRight';

interface GlobalLayoutProps {
  children: ReactNode
}



const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div>

      <Header />

      <div className='lg:hidden'>
        {/* <BoxNotification /> */}
      </div>


      <div className='flex justify-between mt-[64px] h-screen'>
        <SideBarLeft />
        <main className='w-[55%]'>{children}</main>
        <SideBarRight />
      </div>


    </div>
  )
}

export default GlobalLayout