import React, { ReactNode } from 'react';
import StoryItem from './StoryItem';
interface StoryProps {
  listStory: ReactNode
}

const Story = ({ listStory }: StoryProps) => {
  return (
    <div className='flex py-6 px-16 items-center justify-between overflow-hidden bg-bg-header-light rounded-md'>
      {listStory?.map((item, index) => (
        <StoryItem key={index} image={item?.image} name={item?.name} />
      ))}
    </div>
  )
}

export default Story