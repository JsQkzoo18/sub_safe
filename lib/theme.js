import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("silver_p", "black_p")(props),
    },
    button: {
      _focus: {
        outline: "none",
      },
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("primaryLight", "primaryDark")(props),
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  text: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#88ccca",
  grayLight: "#8995a1",
  grayMedium: "#B0AAAE",
  grayDark: "#232227",
  blueDark: "#070607",
  brownDark: "#58443A",
  redDark: "#DF3029",
  pinkBright: "#FC195A",
  tealDark: "#3DA87D",
  tealBright: "#05E591",
  purpleDark: "#5034C8",
  csGreen: "green",

  // /* colores light */
  silver_p: "#E2E3E8",
  // pink: "#FE164E",
  // /* colores night */
  // black_p: "#131419",
  // black_s: "#1C1C24",
  // black_t: "#2D2D3A",
  // red: "#E24444",

  /* brand colors */
  /* light */
  primaryLight: "#B83481",
  primaryBG: "#E2E3E8",

  /* dark */

  primaryDark: "#F6AD55",
  black_p: "#131419",
  black_s: "#1C1C24",
  black_t: "#2D2D3A",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
