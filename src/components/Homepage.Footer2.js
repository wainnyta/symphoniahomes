import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { AppButton } from './AppButton';
import GridImageGallery from './GridImageGallery';

export const HomepageFooter2 = () => {
  return (
    <footer>
      <Box backgroundColor="#3F4651" py="3rem">
        <Flex maxWidth="1600px" margin="auto" justifyContent="space-around">
          <Image
            src="/images/undraw_build_your__home_csh6.svg"
            maxW="20rem"
            px="10px"
          />
          <Box maxW="700px" px="10px">
            <Text
              as="h1"
              color="white"
              fontSize="2.5rem"
              fontWeight="700"
              alignSelf="flex-start"
            >
              Ready to give us a try?
            </Text>
            <Text color="white" fontSize="1.3rem" pt="1rem">
              Request your free, fair & no-obligation offer with us now. Our
              team will contact you within 48 hours. Rather text or email?
              That's okay with us too!
            </Text>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
};
