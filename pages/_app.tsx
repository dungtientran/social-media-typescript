// import '@/styles/globals.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalLayout from '../components/Layout/GlobalLayout';
import { Provider } from 'react-redux'
import { store } from '../store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store} >
      <GlobalLayout >
        <Component {...pageProps} />
      </GlobalLayout>
    </Provider>
  )
}
