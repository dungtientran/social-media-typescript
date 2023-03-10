'use client';
import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

const Search = () => {
  const [searchText, setSearchText] = useState();

  return (
    <div className='w-full relative'>
        <input 
        type="text" 
        className='bg-text-light outline-none px-4 py-[6px] rounded-md w-full text-orange-light ' 
        placeholder='Tìm kiếm'
        value={searchText}
        // onChange = {(e) => setSearchText(e.target.value)}
        />
        <button className='absolute top-[50%] translate-y-[-50%] right-2 text-orange-light text-hover'><AiOutlineSearch size={24}/></button>
    </div>  
  )
}

export default Search