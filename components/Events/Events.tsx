import React from 'react';
import EventsItem from './EventsItem';

const events = [
    {
        title: 'Events',
        event: [
            {
                avatar: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s4.jpg',
                name: 'Web Workshop',
                time: '1 hour ago'
            },
            {
                avatar: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/s5.jpg',
                name: 'Fun Events and Festivals',
                time: '1 hour ago'
            },
        ]
    },
    {
        title: 'Upcoming Birthday',
        event: [
            {
                avatar: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/01.jpg',
                name: 'Anna Sthesia',
                time: 'Today'
            },
            {
                avatar: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/02.jpg',
                name: 'Paul Molive',
                time: 'Tomorrow'
            },
        ]
    },
    {
        title: 'Suggested Pages',
        event: [
            {
                avatar: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/42.png',
                name: 'Iqonic Studio',
                subtitle: 'Lorem Ipsum',
                imageBg: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/small/img-1.jpg'
            },
            {
                avatar: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/42.png',
                name: 'Cakes & Bakes',
                subtitle: 'Lorem Ipsum',
                imageBg: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/small/img-2.jpg'
            },
        ]
    },
]

const Events = () => {
    return (
        <div className=' h-full rounded-md space-y-3 w-full'>
            {events?.map((item, index) => (
                <EventsItem key={index} event = {item} />
            ))}
        </div>
    )
}

export default Events