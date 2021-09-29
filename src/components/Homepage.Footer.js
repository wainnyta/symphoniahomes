import { Box, Flex, Text, Image, IconButton, Divider } from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AppButton } from './AppButton';
import GridImageGallery from './GridImageGallery';
import { isBrowser, isMobile, isTablet } from 'react-device-detect';
import { MdLink } from 'react-icons/md';

export const HomepageFooter = () => {
  return (
    <footer>
      <Box backgroundColor="#3F4651">
        <Flex py="3rem" justifyContent="center">
          <IconButton
            colorScheme="teal"
            aria-label="Facebook"
            icon={<FaFacebookF />}
            isRound="true"
            disabled={true}
          />
          <IconButton
            colorScheme="teal"
            aria-label="Instagram"
            icon={<FaInstagram />}
            isRound="true"
            marginX="2rem"
            onClick={() =>
              window.open('https://www.instagram.com/symphoniahomes/')
            }
          />
          <IconButton
            colorScheme="teal"
            aria-label="Twitter"
            icon={<FaTwitter />}
            isRound="true"
            disabled={true}
          />
        </Flex>

        <Flex
          direction={isBrowser ? 'row' : 'column'}
          justifyContent="center"
          alignItems={isBrowser ? null : 'center'}
        >
          <Text color="gray.100" px="5px">
            &copy; {new Date().getFullYear()} Symphonia Homes Inc.
          </Text>
          {isBrowser && (
            <Text color="gray.100" px="5px">
              {' '}
              |{' '}
            </Text>
          )}
          <Text color="gray.100" px="5px">
            204.588.8329
          </Text>
        </Flex>
        <Flex justifyContent="center" px="5px" pb="2rem" pt="10px">
          <Text color="gray.400" fontSize="0.8rem">
            <i>
              Website developed by{' '}
              <a
                href="https://www.linkedin.com/in/wainny-ta-a5715359/"
                target="_blank"
                className="footer-link"
              >
                Wainny
              </a>{' '}
              @ SymphoniaHomes
            </i>
          </Text>
        </Flex>
      </Box>
      <style jsx>{`
        .footer-link {
          color: rgb(170, 208, 205, 1);
        }
        .footer-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

const styles = {
  aStyle: {},
};
