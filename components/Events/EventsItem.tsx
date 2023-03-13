import React, { ReactNode } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
interface EventsItemProps {
    event: ReactNode
}

const EventsItem = ({ event }: EventsItemProps) => {
    return (
        <div className='bg-bg-header-light rounded-lg text-[#3F414D]'>
            <div className='border-b py-3 px-3'>
                <p className='font-semibold'>{event?.title}</p>
            </div>
            <div className='py-1 px-2 '>
                {event?.event?.map((item, index) => (
                    <div className=' py-3 space-y-2'>
                        <div className='flex items-center gap-3 '>
                            <div className='w-10 h-10 overflow-hidden rounded-full border-[2px] flex-none'>
                                <img src={item?.avatar} alt="" className='image-cover' />
                            </div>
                            <div className=''>
                                <p className='text-sm break-words'>{item?.name}</p>
                                <p className='text-xs text-gray-500'>{item?.time || item?.subtitle}</p>
                            </div>
                        </div>
                        {item?.imageBg && (
                            <div className='flex flex-col items-center space-y-3'>
                                <img src={item?.imageBg} alt="" />
                                <button className='text-sm text-orange-light text-hover flex items-center '> <AiOutlineLike size={16}/> Like page</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default EventsItem