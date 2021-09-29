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
  Image,
  IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CgMenuGridO } from 'react-icons/cg';
import { IoCall } from 'react-icons/io5';
import { MdCall } from 'react-icons/md';
import { useState, useEffect } from 'react';

const MenuItems = ({ textColor, children, href, isFocus }) => (
  <span>
    <Text
      fontFamily="Merriweather"
      mt={{ base: 4, lg: 0 }}
      mr={10}
      display="block"
      color={textColor || 'gray.700'}
      fontWeight={isFocus ? 'bold' : '100'}
    >
      <a
        className={isFocus ? 'navbar-links navbar-link-active' : 'navbar-links'}
        href={isFocus ? '#' : href}
      >
        {children}
      </a>
    </Text>

    <style jsx>{`
      .navbar-links {
        font-size: 1rem;
      }
      .navbar-links:hover {
        text-decoration: underline;
      }
      .navbar-link-active:hover {
        text-decoration: none;
      }
      .navbar-link-active {
        font-size: 1rem;
        font-weight: bolder;
        cursor: auto;
        pointer-events: none;
      }
    `}</style>
  </span>
);

const Navbar = ({
  bgColor,
  textColor,
  ctaColor,
  ctaBorderColor,
  ctaBackgroundColor,
  bottomBordered,
  isTransparent,
  focus,
  ...otherProps
}) => {
  const [show, setShow] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const getStickyClass = () => {
    let stickyClass = '';
    if (scrolled) {
      stickyClass = isTransparent
        ? 'sticky dark-overlay'
        : 'sticky light-overlay';
    }
    return stickyClass;
  };

  return (
    <div class={getStickyClass()}>
      <Flex
        as="nav"
        wrap="wrap"
        paddingX={'1.2rem'}
        bg={bgColor || 'white'}
        color="white"
        pt={scrolled ? '0px' : '35px'}
        pb={scrolled ? '0px' : '0px'}
        {...otherProps}
        direction="row"
      >
        <Link href="/">
          <a>
            <Flex align="center" mr={5} alignSelf="center" flexDirection="row">
              {isTransparent && (
                <Image
                  class={scrolled ? 'sticky-logo' : 'logo'}
                  pl="0rem"
                  w="250px"
                  src="/images/Logo/whiteLogo_8.png"
                />
              )}
              {!isTransparent && (
                <Image
                  class={scrolled ? 'sticky-logo' : 'logo'}
                  pl="0rem"
                  w="250px"
                  src="/images/Logo/blackLogo_8.png"
                />
              )}
              {/* {!isTransparent && (
                <>
                  <Heading
                    as="h1"
                    size="lg"
                    letterSpacing={'-.1rem'}
                    flexDirection="column"
                    color={textColor || 'gray.900'}
                  >
                    Symphonia
                  </Heading>
                  <Text
                    ml={2}
                    fontFamily="fantasy"
                    color={textColor || 'gray.900'}
                  >
                    {' '}
                    homes
                  </Text>
                </>
              )} */}
            </Flex>
          </a>
        </Link>

        <Spacer />
        <Box
          display={{ base: 'block', lg: 'none' }}
          onClick={handleToggle}
          pt={{ base: scrolled ? '8px' : '20px', lg: '0px' }}
        >
          <CgMenuGridO color={textColor || 'gray.900'} fontSize="2rem" />
        </Box>

        <Box
          display={{ base: show ? 'block' : 'none', lg: 'flex' }}
          width={{ base: 'full', lg: 'auto' }}
          alignItems="center"
        >
          <MenuItems
            textColor={textColor}
            href="/"
            isFocus={focus && focus == 'home'}
          >
            Home
          </MenuItems>
          <MenuItems
            textColor={textColor}
            href="/portfolio"
            isFocus={focus && focus == 'portfolio'}
          >
            Portfolio
          </MenuItems>
          {/* <MenuItems
            textColor={textColor}
            href="/about"
            isFocus={focus && focus == 'about'}
          >
            Our Story
          </MenuItems> */}
          <MenuItems
            textColor={textColor}
            href="/contact_us"
            isFocus={focus && focus == 'contact'}
          >
            Contact Us
          </MenuItems>
          <Box
            display={{ sm: show ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, lg: 0 }}
          >
            <Button
              colorScheme="teal"
              bg={ctaBackgroundColor || 'transparent'}
              border="1px"
              mt={{ xl: -1, base: 0 }}
              color={ctaColor || 'gray.900'}
              borderColor={ctaBorderColor || 'white'}
              fontSize={15}
              leftIcon={<MdCall size={20} />}
              onClick={() => (window.location.href = 'tel:+12045888329')}
              fontFamily="Merriweather"
            >
              Call Now 204-588-8329
            </Button>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
