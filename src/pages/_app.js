import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../theme';
import 'swiper/swiper-bundle.min.css';
import '../../src/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
