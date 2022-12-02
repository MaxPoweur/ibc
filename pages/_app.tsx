import '../assets/styles/globals/_reset.scss';
import '../assets/styles/globals/_fonts.scss';
import 'antd/dist/antd.min.css';
import '../assets/styles/globals/app.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';
import { DataProvider } from '../contexts/data/useDataContext';

function App({ Component, pageProps }: AppProps) {
   return (
         <DataProvider>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </DataProvider>
   );
}

export default App;
