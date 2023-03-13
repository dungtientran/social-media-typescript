import React from 'react';
interface StoryItemProps {
    image: string,
    name: string
}

const StoryItem = ({ image, name }: StoryItemProps) => {
    return (
        <div className='story-item ' >
            <div className='w-14 h-14 rounded-full overflow-hidden'>
                <img src={image} alt={name} className='image-cover' />
            </div>
            <div>
                <p className='text-sm font-semibold duration-700'>{name}</p>
            </div>
        </div>
    )
}

export default StoryItem