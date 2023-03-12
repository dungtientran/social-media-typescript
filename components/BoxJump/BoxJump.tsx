import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import BoxSearch from './BoxSearch';

interface BoxJumpProps {
    keyBox: string
}

const BoxJump = ({keyBox}: BoxJumpProps) => {
    const dispatch = useAppDispatch();
    return (
        <div className='w-full h-screen lg:min-h-[300px] lg:max-h-[380px] animate-jumpDown shadow-md rounded-lg absolute top-0 lg:top-full mt-3 left-0 right-0 bg-bg-header-light z-30'>
           {keyBox === 'search' &&  <BoxSearch />}
        </div>
    )
}

export default BoxJump