import { Container } from '@chakra-ui/react';
import { HomepageContact } from '../components/Homepage.Contact';
import { HomepageFooter } from '../components/Homepage.Footer';
import { HomepageGallery } from '../components/Homepage.Gallery';
import { HomepageHero } from '../components/Homepage.Hero';
import { HomepageHowItWorks } from '../components/Homepage.HowItWorks';
import Navbar from '../components/layout/Navbar';

const Index = () => (
  <>
    <body>
      <div style={styles.main}>
        <HomepageHowItWorks />
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <HomepageContact />
      </div>
      <div style={{ backgroundColor: '#fdfdfd' }}>
        <HomepageGallery />
      </div>
      {/* <HomepageWhyUs /> */}
    </body>
    <HomepageFooter />
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
  main: {
    backgroundColor: '#f6f6f6',
  },
};

export default Index;