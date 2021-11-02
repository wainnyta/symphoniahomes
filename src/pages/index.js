import { Box, Container } from '@chakra-ui/react';
import { HomepageContact } from '../components/Homepage.Contact';
import { HomepageFooter } from '../components/Homepage.Footer';
import { HomepageGallery } from '../components/Homepage.Gallery';
import { HomepageHero } from '../components/Homepage.Hero';
import { HomepageHowItWorks } from '../components/Homepage.HowItWorks';
import Navbar from '../components/layout/Navbar';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { install } from 'resize-observer';
import { NextSeo } from 'next-seo';
import defaultConfig from '../components/AppSEO';
import Head from 'next/head';

if (typeof window !== 'undefined') {
  install();
}

const Index = () => {
  const formRef = useRef(null);

  return (
    <>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="wgah3g9pff85f8ptd4av2g7sczbl6z"
        />
      </Head>
      <NextSeo
        title="We Buy Houses In Winnipeg - Any Condition - Quick, Safe and Simple - Symphonia Homes"
        description={defaultConfig.openGraph.description}
        openGraph={defaultConfig.openGraph}
        canonical={defaultConfig.canonical}
      />
      {/* <Box maxW="1600px" margin="auto" marginBottom="2rem"> */}
      {/* <Navbar
        bgColor="transparent"
        textColor="black"
        ctaBackgroundColor="teal.400"
        ctaColor="white"
        ctaBorderColor="teal.400"
        bottomBordered={true}
      /> */}
      {/* </Box> */}

      <div style={styles.header}>
        <div style={styles.content}>
          <Box maxW="1600px" margin="auto">
            <Navbar
              bgColor="transparent"
              textColor="white"
              ctaBackgroundColor="teal.400"
              ctaColor="white"
              ctaBorderColor="teal.400"
              bottomBordered={true}
              isTransparent={true}
              focus="home"
            />
            <HomepageHero bgColor="transparent" formRef={formRef} />
          </Box>
        </div>
      </div>
      <div>
        <div style={styles.main}>
          <HomepageHowItWorks formRef={formRef} />
        </div>
        <div style={{ backgroundColor: 'white' }}>
          <HomepageContact />
        </div>
        <div style={{ backgroundColor: '#fdfdfd' }}>
          <HomepageGallery formRef={formRef} />
        </div>
        {/* <HomepageWhyUs /> */}
      </div>
      <HomepageFooter />
    </>
  );
};

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
