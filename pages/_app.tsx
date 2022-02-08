import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
//import theme from "../components/theme";
//console.log('theme:', theme)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider >
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
