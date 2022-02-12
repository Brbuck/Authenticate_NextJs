import Layout from "../Components/layout";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";

import Header from "../Components/Header";
import AuthProvider from "../Context/auth";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  );
}
