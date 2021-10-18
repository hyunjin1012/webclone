import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Layout from '../components/layout'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

function MyApp({ Component, pageProps }) {
  config.autoAddCss = false;
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
