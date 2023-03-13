import React from 'react';

interface BoxNotificationProps{
    keyBox: string | null,
}

const BoxNotification = ({keyBox}:BoxNotificationProps ) => {

  return (
    <div className='p-3 absolute top-[120%] bg-black text-white'>
      {keyBox}
    </div>
  )
}

export default BoxNotification
