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
} from '@chakra-ui/react';
import { Hero } from '../components/Hero';
import { HomepageHero } from '../components/layout/HomepageHero';
import Navbar from '../components/layout/Navbar';

const Index = () => (
  <Flex direction="column" bg="white" minHeight="100vh">
    <Navbar bgColor="gray.600" textColor="white" ctaColor="white" />
    <HomepageHero />
  </Flex>
);

export default Index;
