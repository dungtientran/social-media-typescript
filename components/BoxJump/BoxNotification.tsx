import React from 'react';

interface BoxNotificationProps{
    keyBox: string | null
}

const BoxNotification = ({keyBox}:BoxNotificationProps ) => {
  return (
    <div className='p-3 absolute top-[120%]'>
      {keyBox}
    </div>
  )
}

export default BoxNotification
