
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { NextPage } from 'next';

const inter = Inter({ subsets: ['latin'] })

const  Home:NextPage = () => {
  return (
    <>
     <h1>HomePag</h1>
    </>
  )
}

export default Home;
