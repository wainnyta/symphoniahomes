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
import { HomepageHero } from '../components/Homepage.Hero';
import { HomepageWhyUs } from '../components/Homepage.WhyUs';
import Navbar from '../components/layout/Navbar';

const Index = () => (
  <>
    <div style={styles.header}>
      <div style={styles.content}>
        <Container maxWidth="1600px" margin="auto">
          <Navbar
            bgColor="transparent"
            textColor="white"
            ctaBackgroundColor="teal.400"
            ctaColor="white"
            ctaBorderColor="teal.400"
            bottomBordered={true}
          />
          <HomepageHero bgColor="transparent" />
        </Container>
      </div>
    </div>
    <Container maxW="1600px" margin="auto">
      {/* <HomepageWhyUs /> */}
    </Container>
  </>
);

const backgroundURL = '/images/ProjectCapulet/10-Kitchen2.jpg';
const styles = {
  header: {
    backgroundImage: `url(${backgroundURL})`,
    minHeight: '80vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    align: 'center',
  },
  container: {
    width: '80%',
    margin: 'auto',
  },
};

export default Index;
