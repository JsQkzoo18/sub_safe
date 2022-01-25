// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import "../scss/global.scss";
import Theme from "../components/Theme/Theme";
import Fonts from "../components/Theme/Fonts";
import { AnimatePresence } from "framer-motion";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps, router }) {
  return (
    <Theme cookies={pageProps.cookies}>
      <ThemeEditorProvider>
        <Fonts />
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
          <Toaster />
        </AnimatePresence>
      </ThemeEditorProvider>
    </Theme>
  );
}

export default MyApp;
