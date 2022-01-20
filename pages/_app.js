// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import "../scss/global.scss";
import Theme from "../components/Theme/Theme";
import Fonts from "../components/Theme/Fonts";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Theme cookies={pageProps.cookies}>
      <Fonts />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Theme>
  );
}

export default MyApp;
