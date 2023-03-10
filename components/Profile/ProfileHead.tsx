import React from 'react'

const ProfileHead = () => {
  return (
    <div className='flex flex-col h-[40vh] gap-4 relative bg-bg-header-light'>
      {/* avatar */}
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[130px] h-[130px] overflow-hidden rounded-full '>
        <img
          src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/333154586_884252436137925_7857236621616118064_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=3koxmelI8dIAX9xCBwf&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRgLiGKlQTh1i7RXeGH3iK770YQIg5Xj-_PaSoI-2w8RA&oe=643288CF"
          alt=""
          className='image-cover'
        />
      </div>

    </div>
  )
}

export default ProfileHead