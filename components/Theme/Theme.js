import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "../../lib/theme";

/**
 * The `Theme` component is a wrapper component that takes in a `children` prop and a `cookies` prop.
 *
 * The `cookies` prop is either a string or an object.
 *
 * If it's a string, it's assumed to be a cookie name and the `cookieStorageManager` function is used
 * to get the cookie value.
 *
 * If it's an object, it's assumed to be a `localStorage` object and the `localStorageManager` function
 * is used to get the cookie value.
 *
 * The `colorModeManager` function is used to get the current color mode.
 *
 * The `ChakraProvider` component is used to provide the theme and the `colorModeManager` function to
 * the `Theme` component.
 *
 * The `Theme` component then returns the `children` prop and the `ChakraProvider` component.
 *
 * The `ChakraProvider` component is used
 * @returns The ChakraProvider component.
 */
export default function Theme({ cookies, children }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

/**
 * This function is called by Next.js to get the data that will be passed to the page.
 *
 * It's called on the server side, and it's passed the request object.
 *
 * The request object contains the cookies that the user sent with the request.
 *
 * Next.js will pass the cookies to the page as props.
 * @returns The props object is being returned.
 */
export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
