import Header from '../Header/Header';
import { ReactNode } from 'react';
import BoxNotification from '../BoxNotification/BoxNotification';

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
      <main>{children}</main>

    </div>
  )
}

export default GlobalLayout