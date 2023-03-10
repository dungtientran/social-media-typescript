import React from 'react'
import ProfileHead from '../../components/Profile/ProfileHead'

const Profile = () => {
  return (
    <div className='w-full m-auto h-full py-4'>
        {/* head */}
        <ProfileHead />
        <div className='flex w-full'>
          {/* Tóm tắt */}
          <div className='w-[20%]'>Tóm tắt</div>
          {/* Post */}
          <div className='w-[80%]'>Post</div>
        </div>
    </div>
  )
}

export default Profile