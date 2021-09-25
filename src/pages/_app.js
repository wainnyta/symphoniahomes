import '@fontsource/open-sans';
import '@fontsource/raleway';
import '@fontsource/inter';
import '@fontsource/lato';
import '@fontsource/merriweather';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../theme';
import 'swiper/swiper-bundle.min.css';
import '../../src/styles.css';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM_TAG,
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
