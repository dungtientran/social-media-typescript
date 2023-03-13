
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { NextPage } from 'next';
import Story from '../components/Story/Story';
import CreatePost from '../components/Posts/CreatePost';
import Events from '../components/Events/Events';
import Posts from '../components/Posts/Posts';

const inter = Inter({ subsets: ['latin'] })


const listStory = [
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },

]

const Home: NextPage = () => {
  return (
    <div className='h-full'>
      {/* Story */}
      <div className='p-3'>
        <Story listStory={listStory} />
      </div>

      <div className='flex h-screen'>
        <div className='w-3/4 h-full p-3'>
          <CreatePost user={{avatar:'sss', name: 'Trần Dũng' }} />
          <Posts />
        </div>
        <div className='w-1/4 h-full p-3'>
          <Events />
        </div>
      </div>

    </div>
  )
}

export default Home;
