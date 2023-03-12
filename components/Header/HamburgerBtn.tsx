import React, { useState } from 'react'

interface HamburgerBtnProps {
    isOpen: boolean
}

const HamburgerBtn = ({isOpen}:HamburgerBtnProps ) => {

    // const [isOpen, setIsOpen] =useState(false);

  return (
    <div  className='btn-open-sidebar'>
      <div className='w-[28px] h-full relative overflow-hidden'>
        <span className={`btn-line-open-sidebar ${isOpen ? 'line-one-active' : 'line-one'}`}></span>
        <span className={`btn-line-open-sidebar ${isOpen ? 'line-two-active' : 'line-two'}`}></span>
        <span className={`btn-line-open-sidebar ${isOpen ? 'line-three-active' : 'line-three'}`}></span>
      </div>
    </div>
  )
}

export default HamburgerBtn
