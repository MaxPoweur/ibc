import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Topbar from './Topbar';
import Footer from './Footer';
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { useRouter } from 'next/router';

interface LayoutProps {
   children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
   const { children } = props;
   return (
      <div>
         <Head>
            <title>Identification des Besoins en Compétences des Entreprises</title>
            <meta name="description" content="Description" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Topbar />
         <main className="page-container">
            {children}
         </main>
         <Footer />
      </div>
   );
};

export default Layout;