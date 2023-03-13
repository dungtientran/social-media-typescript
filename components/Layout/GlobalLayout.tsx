import Header from '../Header/Header';
import { ReactNode } from 'react';
import BoxNotification from '../BoxJump/BoxJump';
import SideBarLeft from '../SideBar/SideBarLeft';
import SideBarRight from '../SideBar/SideBarRight';
import { useAppSelector } from '../../store/hooks';

interface GlobalLayoutProps {
  children: ReactNode
}



const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const { isOpenBoxSearch } = useAppSelector(state => state.boxNotification)

  return (
    <div>
      <Header />
      {/* <div className='lg:hidden'>
        {isOpenBoxSearch && <BoxNotification />}
      </div> */}

      <div className='mt-[64px] h-screen hidden lg:block'>
        <SideBarLeft />
        <main className='w-[55%] m-auto'>
          {children}
        </main>
        <SideBarRight />
      </div>


    </div>
  )
}

export default GlobalLayout