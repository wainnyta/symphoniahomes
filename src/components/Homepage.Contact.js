import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdCall, MdMessage } from 'react-icons/md';
import { HomepageForm } from './Homepage.Form';

const ContactButton = ({ children, icon, onClick }) => {
  return (
    <Box
      onClick={onClick}
      as="button"
      height="50px"
      lineHeight="1.2"
      px="1rem"
      my="0.3rem"
      minW={{ md: '350px', base: '100%' }}
      fontSize="1rem"
      fontWeight="500"
      color="gray.100"
      _hover={{
        borderWidth: '1px',
        borderColor: 'teal.500',
        borderRadius: '0.5rem',
        fontWeight: 'semibold',
        color: 'white',
        bg: '#4D596D',
      }}
      _active={{
        bg: 'transparent',
        transform: 'scale(0.98)',
        borderWidth: 0,
      }}
    >
      <Flex alignItems="center" wrap="wrap">
        {icon}
        {children}
      </Flex>
    </Box>
  );
};

export const HomepageContact = () => {
  return (
    <Center margin="auto">
      <Flex
        w={{ md: '80vw', base: '90vw' }}
        marginTop="-10rem"
        backgroundColor="gray.600"
        paddingX={{ xl: '4rem', base: '0rem' }}
        justifyContent="space-between"
        borderRadius="1rem"
        direction={{ xl: 'row', base: 'column' }}
        // borderWidth="1px"
        borderRadius="15px"
        boxShadow="0 0 8px 0 rgba(68,67,67,.5)"
        style={{ position: 'relative' }}
      >
        <Image
          src="/images/undraw_gift1_red.svg"
          position="absolute"
          top={{ xl: '-3rem', base: '-3rem' }}
          left={{ xl: '-3rem', base: '-2rem' }}
          width={{ xl: '130px', base: '100px' }}
          style={{
            transform: 'rotate(-20deg)',
          }}
        />
        <Box
          w={{ xl: '30%', base: '90%' }}
          maxW="750px"
          marginX={{ base: '1rem' }}
          paddingY={{ xl: '5rem', base: '2rem' }}
          style={{ zIndex: 1 }}
        >
          <Flex
            direction="column"
            justifyContent="space-between"
            height="100%"
            alignItems="flex-start"
          >
            <Box flexGrow="1"></Box>
            <Box flexGrow={{ xl: '2.5', base: 1 }}>
              <Text
                fontFamily="Merriweather"
                fontWeight="700"
                fontSize="1.5rem"
                color="white"
                alignSelf={{ xl: 'flex-start', base: 'center' }}
                textAlign={{ xl: 'left', base: 'center' }}
              >
                Have a house to sell?
              </Text>
              {/* <Text textColor="gray.400" fontSize="0.98rem" mt="0.5rem">
                Fill out the form and our team will contact you within 24 hours.
              </Text> */}
              <Text
                textColor="gray.300"
                fontSize="1rem"
                fontWeight="400"
                mt="1.2rem"
              >
                If you know someone who needs selling a house and think
                Symphonia Homes may be the right fit for them, <b>refer</b> to
                us and earn up to
                <b> $1,000 reward</b> upon successful purchase.
              </Text>
            </Box>
            <Flex
              direction="column"
              mt={{ base: '2rem' }}
              alignSelf={{ base: 'flex-start' }}
              flexGrow={{ xl: '1', base: null }}
            >
              {/* <Button
                variant="link"
                textColor="white"
                leftIcon={<FaPhoneAlt />}
                iconSpacing="2rem"
                size="lg"
                //backgroundColor="transparent"
                style={{}}
              >
                +1 (204) 588 - 8329
              </Button> */}

              <ContactButton
                onClick={() => {
                  window.location.href = 'tel:+12045888329';
                }}
                icon={
                  <MdCall
                    color="#6dd0cd"
                    style={{ marginRight: '1rem' }}
                    fontSize="1.7rem"
                  />
                }
              >
                +1 (204) 588 - 8329
              </ContactButton>
              <ContactButton
                onClick={() => {
                  window.location.href = 'sms:+12045888329';
                }}
                icon={
                  <MdMessage
                    color="#6dd0cd"
                    style={{ marginRight: '1rem' }}
                    fontSize="1.7rem"
                  />
                }
              >
                +1 (204) 588 - 8329 <i>&nbsp; (SMS)</i>
              </ContactButton>
              <ContactButton
                onClick={() => {
                  window.location.href = 'mailto:symphoniahomes@gmail.com';
                }}
                icon={
                  <EmailIcon
                    color="#6dd0cd"
                    style={{ marginRight: '1rem' }}
                    fontSize="1.7rem"
                  />
                }
              >
                symphoniahomes@gmail.com
              </ContactButton>
            </Flex>
            <Box
              mt={{ base: '2rem' }}
              ml="1rem"
              alignSelf={{ xl: 'flex-start', base: 'center' }}
              display={{ base: 'none', xl: 'block' }}
            >
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
                marginX="3rem"
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
            </Box>
            <Box flexGrow="1"></Box>
          </Flex>
        </Box>
        <Box
          w={{ xl: '70%', base: '100%' }}
          maxW="750px"
          margin={{ base: 'auto' }}
        >
          <HomepageForm />
        </Box>
        <Box
          mt={{ base: '2rem' }}
          pb={{ base: '5rem' }}
          alignSelf={{ base: 'center' }}
          display={{ xl: 'none', base: 'block' }}
        >
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
            marginX="3rem"
          />
          <IconButton
            colorScheme="teal"
            aria-label="Twitter"
            icon={<FaTwitter />}
            isRound="true"
            disabled={true}
          />
        </Box>
      </Flex>
    </Center>
  );
};
