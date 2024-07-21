// pages/_app.tsx

import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import '../styles/responsive.css';
import type {AppProps} from 'next/app';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
