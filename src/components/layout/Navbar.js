import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Spacer,
  Divider,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { isBrowser, isMobile, isTablet } from 'react-device-detect';

const MenuItems = ({ textColor, children, href }) => (
  <Link href={href}>
    <a>
      <Text
        fontFamily="fantasy"
        fontSize="lg"
        mt={{ base: 4, md: 0 }}
        mr={10}
        display="block"
        color={textColor || 'gray.800'}
      >
        {children}
      </Text>
    </a>
  </Link>
);

const Navbar = ({
  bgColor,
  textColor,
  ctaColor,
  ctaBorderColor,
  ctaBackgroundColor,
  bottomBordered,
  ...otherProps
}) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => {
    setShow(!show);
    // console.log('handleclicked');
  };

  return (
    <>
      <Flex
        as="nav"
        wrap="wrap"
        paddingX={isBrowser ? '1.2rem' : '1.2rem'}
        bg={bgColor || 'white'}
        color="white"
        pt={10}
        {...otherProps}
        direction="row"
      >
        <Flex align="center" mr={5} alignSelf="center" flexDirection="row">
          <Heading
            as="h1"
            size="lg"
            letterSpacing={'-.1rem'}
            flexDirection="column"
            color={textColor || 'gray.900'}
          >
            Symphonia
          </Heading>
          <Text ml={2} fontFamily="fantasy" color={textColor || 'gray.900'}>
            {' '}
            homes
          </Text>
        </Flex>
        <Spacer />
        <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
          {/* <svg
            fill={textColor || 'gray.900'}
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg> */}
          <HamburgerIcon color={textColor || 'gray.900'} />
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
        >
          <MenuItems textColor={textColor} href="/">
            Home
          </MenuItems>
          <MenuItems textColor={textColor} href="/portfolio">
            Portfolio
          </MenuItems>
          <MenuItems textColor={textColor} href="#">
            Our Story
          </MenuItems>
          <MenuItems textColor={textColor} href="#">
            Contact Us
          </MenuItems>
          <Box
            display={{ sm: show ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, md: 0 }}
          >
            <Button
              bg={ctaBackgroundColor || 'transparent'}
              border="1px"
              mt="-1"
              color={ctaColor || 'gray.900'}
              borderColor={ctaBorderColor || 'white'}
              fontSize={15}
            >
              Get your Free Quote
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
