// import '@/styles/globals.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalLayout from '../components/Layout/GlobalLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout >
      <Component {...pageProps} />
    </GlobalLayout>
  )
}
