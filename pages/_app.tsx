import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PageHeader from '../components/PageHeader';
import UseableSpace from '../components/UseableSpace';
import PageFooter from '../components/PageFooter';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseableSpace>
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </UseableSpace>
  );
}

export default MyApp;
