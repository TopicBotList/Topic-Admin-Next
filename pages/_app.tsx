import React from "react";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "../components/Static/Navbar";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />
      <Head>
        <title>TopicList - Administrative Panel</title>
        <link
          rel="icon"
          href="https://cdn.topiclist.xyz/images/png/TopicList5.png"
        />
      </Head>
      <Navbar>
        <div className="h-full w-full overflow-hidden">
          <AnimatePresence>
            <motion.div
              transition={{ type: "linear", duration: 0.3 }}
              className="h-full w-full overflow-auto"
              key={router.pathname}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
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
