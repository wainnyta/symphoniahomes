import { Container } from '@chakra-ui/react';
import { HomepageContact } from '../components/Homepage.Contact';
import { HomepageFooter } from '../components/Homepage.Footer';
import { HomepageForm } from '../components/Homepage.Form';
import { HomepageGallery } from '../components/Homepage.Gallery';
import { HomepageHero } from '../components/Homepage.Hero';
import { HomepageHowItWorks } from '../components/Homepage.HowItWorks';
import Navbar from '../components/layout/Navbar';

const Index = () => (
  <>
    <header style={styles.header}>
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
    </header>
    <main>
      <section style={styles.main}>
        <HomepageHowItWorks />
      </section>
      <section style={{ backgroundColor: 'white' }}>
        <HomepageContact />
      </section>
      <section style={{ backgroundColor: '#fdfdfd' }}>
        <HomepageGallery />
      </section>
      {/* <HomepageWhyUs /> */}
    </main>
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
