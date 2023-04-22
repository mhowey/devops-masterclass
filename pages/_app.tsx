import "@root/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { defaultTheme } from "../styles/themes/defaultTheme";
// import { CacheProvider } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomeRoute = router.route === "/";
  return (
    <>
      <Navigation />
      <div id="mainWrapper">
        {/* <Component {...pageProps} /> */}
        {/* <CacheProvider value={{}}> */}
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        {/* </CacheProvider> */}
      </div>
    </>
  );
}
