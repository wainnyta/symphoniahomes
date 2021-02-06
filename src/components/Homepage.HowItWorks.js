import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const StepItem = ({ image, title, description }) => {
  return (
    <Flex
      marginX={{ xl: '1rem', md: '5rem', base: '1rem' }}
      paddingX={{ xl: '2rem', md: '0rem', base: '2rem' }}
      textAlign={{ xl: 'center', md: 'left', base: 'center' }}
      borderWidth="1px"
      borderColor="gray.50"
      width={{ xl: '100%' }}
      direction={{ xl: 'column', md: 'row', base: 'column' }}
      alignItems="center"
      paddingY={{ xl: '1rem', md: '1rem', base: '1rem' }}
      marginY={{ xl: 0, md: '1rem', base: '1rem' }}
      backgroundColor="white"
      borderRadius="1rem"
      //boxShadow="5px 2px 10px 5px #f4f4f4"
    >
      <Box minW={{ md: '40%', xl: '0rem' }} padding={{ xl: '1rem', xs: 0 }}>
        <img src={image} alt={title} />
        {/* // <Image
        //   src={image}
        //   alt={title}
        //   padding={{ xl: '1rem', xs: '0' }}
        //   maxH={'13rem'}
        //   minH="13rem"
        // /> */}
      </Box>

      <Box
        minW={{ md: '60%', xl: '0rem' }}
        paddingX={{ xl: '0', md: '2rem', base: '0' }}
        paddingY="1rem"
      >
        <Flex direction={{ xl: 'column', md: 'column', base: 'column' }}>
          <h3
            style={{ fontSize: '1.8rem', fontWeight: '500', color: '#3E3E3E' }}
          >
            {title}
          </h3>
          <Text color="gray.600" paddingY={{ base: '1rem' }}>
            {description}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export const HomepageHowItWorks = () => {
  return (
    <Box
      pb={{ base: '20rem' }}
      pt={{ base: '7rem' }}
      maxW="1600px"
      marginX="auto"
    >
      <Flex mb={{ base: '3rem' }} textAlign="center" justifyContent="center">
        <Heading as="h1" size="2xl">
          How It&nbsp;
        </Heading>
        <Heading
          as="h1"
          size="2xl"
          color="teal.500"
          fontFamily="fantasy"
          pt={{ xl: '0.6rem', base: '0.5rem' }}
        >
          Works
        </Heading>
      </Flex>
      <Flex
        direction={{ xl: 'row', base: 'column' }}
        justifyContent="space-between"
        paddingX={{ xl: '3rem' }}
      >
        <StepItem
          title="Step 1"
          image="/images/terms.png"
          description={
            <Text>
              Fill out the form or contact us at
              <br />
              204-588-8329 or info@symphoniahomes.com.
            </Text>
          }
        />
        <StepItem
          title="Step 2"
          image="/images/event.png"
          description="We will set up an appointment with you for a walk-through at your earliest convenient time."
        />
        <StepItem
          title="Step 3"
          image="/images/gift.png"
          description="We will present you with a free, fair, and no obligation written offer if your property is determined to fit into our investment portfolio."
        />
        <StepItem
          title="Step 4"
          image="/images/undraw_ethereum_desire_wy1b.png"
          description="Once the sale is finalized, take the sale proceeds and move on with the next chapter of your life with more financial freedom and peace of mind."
        />
      </Flex>
    </Box>
  );
};
