const { HomepageFooter } = require('../components/Homepage.Footer');
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HomepageContact } from '../components/Homepage.Contact';
import Navbar from '../components/layout/Navbar';

/*****************************
 *
 * MAIN ENTRANCE
 *
 *****************************/
const ContactUs = () => {
  return (
    <>
      <header>
        <Box maxW="1600px" margin="auto" marginBottom="2rem">
          <Navbar
            bgColor="transparent"
            textColor="black"
            ctaBackgroundColor="teal.400"
            ctaColor="white"
            ctaBorderColor="teal.400"
            bottomBordered={true}
            focus="contact"
          />
        </Box>
        <Divider />
      </header>
      <body>
        <Box bg="white" paddingTop="5rem">
          <Box maxW="1550px" marginX="auto">
            <Heading
              color="myblack.600"
              textAlign="center"
              fontFamily="fantasy"
            >
              Let's Get In Touch!
            </Heading>
          </Box>
        </Box>
        <Box maxW="1550px" marginX="auto" mt="200px" mb="100px">
          <HomepageContact />
        </Box>
      </body>
      <HomepageFooter />
    </>
  );
};

export default ContactUs;
