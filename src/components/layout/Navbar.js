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
} from '@chakra-ui/react';

import Link from 'next/link';
import { CgMenuGridO } from 'react-icons/cg';

const MenuItems = ({ textColor, children, href }) => (
  <Link href={href}>
    <a>
      <Text
        fontFamily="fantasy"
        fontSize="lg"
        mt={{ base: 4, lg: 0 }}
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
  isTransparent,
  ...otherProps
}) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <Flex
        as="nav"
        wrap="wrap"
        paddingX={'1.2rem'}
        bg={bgColor || 'white'}
        color="white"
        pt={10}
        {...otherProps}
        direction="row"
      >
        <Link href="/">
          <a>
            <Flex align="center" mr={5} alignSelf="center" flexDirection="row">
              {false && (
                <Image w="150px" src="/images/Logo/logo_transparent.png" />
              )}
              {true && (
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
              )}
            </Flex>
          </a>
        </Link>

        <Spacer />
        <Box display={{ base: 'block', lg: 'none' }} onClick={handleToggle}>
          <CgMenuGridO color={textColor || 'gray.900'} fontSize="2rem" />
        </Box>

        <Box
          display={{ base: show ? 'block' : 'none', lg: 'flex' }}
          width={{ base: 'full', lg: 'auto' }}
          alignItems="center"
        >
          <MenuItems textColor={textColor} href="/">
            Home
          </MenuItems>
          <MenuItems textColor={textColor} href="/portfolio">
            Portfolio
          </MenuItems>
          <MenuItems textColor={textColor} href="/about">
            Our Story
          </MenuItems>
          <MenuItems textColor={textColor} href="#">
            Contact Us
          </MenuItems>
          <Box
            display={{ sm: show ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, lg: 0 }}
          >
            <Button
              bg={ctaBackgroundColor || 'transparent'}
              border="1px"
              mt={{ xl: -1, base: 0 }}
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
