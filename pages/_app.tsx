import MusicProvider from 'context/MusicContext';
import type { AppProps } from 'next/app';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MusicProvider>{getLayout(<Component {...pageProps} />)}</MusicProvider>
  );
}

export default MyApp;
