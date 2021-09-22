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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { FaHandHolding, FaHandHoldingHeart, FaHandshake } from 'react-icons/fa';

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
            <Heading color="myblack.600" textAlign="center">
              Let's Get In Touch!
            </Heading>
          </Box>
        </Box>
        <Box maxW={{ xl: '70vw', base: '90%' }} marginX="auto" pt="30px">
          <Text bgColor="orange.100" paddingY="15px" paddingX="10px">
            👋 &nbsp;&nbsp;Hello! If you're an&nbsp; <b>investor</b>&nbsp;and
            would like to receive future deals from us, please feel free to
            <span>
              <a href="mailto:symphoniahomes@gmail.com">
                &nbsp;<u>email</u>
              </a>
            </span>
            &nbsp;us, give us a{' '}
            <span>
              <a href="tel:+12045888329">
                &nbsp;<u>call</u>
              </a>
            </span>
            , or use the form below to keep in touch!
          </Text>
        </Box>
        <Box maxW="1550px" marginX="auto" mt="230px" mb="100px">
          <HomepageContact />
        </Box>
      </body>
      <HomepageFooter />
    </>
  );
};

export default ContactUs;
