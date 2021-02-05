import { Box, Flex, Text, Image, IconButton, Divider } from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AppButton } from './AppButton';
import GridImageGallery from './GridImageGallery';

export const HomepageFooter = () => {
  return (
    <footer>
      <Box>
        <Flex backgroundColor="#3F4651" py="3rem" justifyContent="center">
          <IconButton
            colorScheme="teal"
            aria-label="Facebook"
            icon={<FaFacebookF />}
            isRound="true"
          />
          <IconButton
            colorScheme="teal"
            aria-label="Instagram"
            icon={<FaInstagram />}
            isRound="true"
            marginX="2rem"
          />
          <IconButton
            colorScheme="teal"
            aria-label="Twitter"
            icon={<FaTwitter />}
            isRound="true"
          />
        </Flex>

        <Flex backgroundColor="#3F4651" justifyContent="center" pb="2rem">
          <Text color="gray.100" px="5px">
            &copy; {new Date().getFullYear()} Symphonia Homes Inc.
          </Text>
          <Text color="gray.100" px="5px">
            {' '}
            |{' '}
          </Text>
          <Text color="gray.100" px="5px">
            204.588.8329
          </Text>
        </Flex>
      </Box>
    </footer>
  );
};
