import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  xs: '200px',
  sm: '350px',
  md: '700px',
  lg: '900px',
  xl: '1200px',
  xxl: '1440px',
});

const theme = extendTheme({
  colors: {
    myblack: {
      50: '#a1a6ae',
      100: '#8e949e',
      200: '#7b828e',
      300: '#68717d',
      400: '#555f6d',
      500: '#424d5d',
      600: '#353e4a',
      700: '#2e3641',
      800: '#282e38',
      900: '#14171c',
    },
  },
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
  components: {
    Button: {
      variants: {
        appdark: ({ colorScheme = 'teal', fontSize, fontWeight }) => ({
          height: '50px',
          lineHeight: '1.2',
          px: '1rem',
          bg: `${colorScheme}.500`,
          fontSize: fontSize || '1rem',
          fontWeight: fontWeight || 500,
          color: 'white',
          _hover: {
            bg: `${colorScheme}.600`,
            color: 'white',
            fontWeight: 'semibold',
          },
        }),
        appOutline: (props) => ({
          color: `${props.colorScheme}.500`,
          borderWidth: '1px',
          borderColor: `${props.colorScheme}.300`,
          _hover: {
            borderColor: props.setHover
              ? `${props.colorScheme}.700`
              : `${props.colorScheme}.300`,
            color: props.setHover
              ? `${props.colorScheme}.800`
              : `${props.colorScheme}.500`,
          },
        }),
      },
    },
  },
});

export default theme;
