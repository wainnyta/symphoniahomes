import {
  Grid,
  Box,
  Container,
  Heading,
  Text,
  Center,
  Flex,
} from '@chakra-ui/react';
import { FaMapSigns } from 'react-icons/fa';

const WorkWithUsItem = ({
  icon,
  title,
  description,
  borderRight,
  borderBottom,
  noPaddingTop,
}) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      px={6}
      pb={10}
      pt={noPaddingTop ? 0 : 50}
      borderRightWidth={borderRight ? 1 : 0}
      borderBottomWidth={borderBottom ? 1 : 0}
      borderColor="gray.200"
    >
      <FaMapSigns size="70" color="#32312F" />
      <Heading as="h4" fontSize={22} pt={5} fontWeight="500" color="#32312F">
        We have a plan,<br></br>even if you don't
      </Heading>
      <Text pt={5}>
        Not sure where to start or what to do? No problem. We'll guide you
        through the entire process.
      </Text>
    </Flex>
  );
};

export const HomepageWhyUs = ({}) => (
  <Container
    maxW={{ xl: '1500px', base: '100%' }}
    marginX="auto"
    mt={{ xl: -100, base: 100 }}
    mb={100}
    textAlign="center"
    backgroundColor="#F6F6F6"
    py={100}
    borderRadius={25}
  >
    <Heading as="h1" pb={100}>
      Why work with us?
    </Heading>

    <Grid
      templateColumns="repeat(auto-fill, minmax(240px, 450px))"
      gap={0}
      px={50}
      alignItems="center"
      alignContent="center"
      textAlign="center"
    >
      <WorkWithUsItem
        borderRight={true}
        borderBottom={true}
        noPaddingTop={true}
      />
      <WorkWithUsItem
        borderRight={true}
        borderBottom={true}
        noPaddingTop={true}
      />
      <WorkWithUsItem borderBottom={true} noPaddingTop={true} />
      <WorkWithUsItem borderRight={true} borderBottom={true} />
      <WorkWithUsItem borderRight={true} borderBottom={true} />
      <WorkWithUsItem borderBottom={true} />
      <WorkWithUsItem borderRight={true} />
      <WorkWithUsItem borderRight={true} />
      <WorkWithUsItem />
    </Grid>
  </Container>
);
