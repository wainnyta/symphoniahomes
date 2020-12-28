import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Container,
  Stack,
  Flex,
  AspectRatio,
  Image,
} from '@chakra-ui/react';
import { Hero } from '../components/Hero';
import { HomepageHero2 } from '../components/layout/HomepageHero2';
import Navbar from '../components/layout/Navbar';

const Index = () => (
  <Flex direction="column" bg="white" minHeight="100vh">
    <Navbar
      bgColor="gray.900"
      textColor="white"
      ctaColor="white"
      bottomBordered={true}
    />
    {/* <Navbar /> */}
    <HomepageHero2 bgColor="gray.900" />
  </Flex>
);

export default Index;
