import React from 'react';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center fixed top-0 left-0 z-[-1]">
        <div className="gradient-wrapper" />
      </div>
      <NextNProgress options={{ showSpinner: false }} />
      <Navbar>
        <div className="h-full w-full overflow-hidden">
          <AnimatePresence exitBeforeEnter={false} initial={false}>
            <motion.div
              transition={{ type: 'linear', duration: 0.3 }}
              className="h-full w-full overflow-auto"
              key={router.pathname}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Navbar>
    </>
  );
}

export default MyApp;
