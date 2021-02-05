const { HomepageFooter } = require('../components/Homepage.Footer');
import { Box, Divider, Heading, Image } from '@chakra-ui/react';
import { isBrowser, isMobile, isTablet } from 'react-device-detect';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Navbar from '../components/layout/Navbar';
import { PortfolioAppGallery } from '../components/Portfolio/Portfolio.AppGallery';
import { PortfolioAppGalleryFilter } from '../components/Portfolio/Portfolio.AppGallery.Filter';
import { PortfolioAppGalleryMobile } from '../components/Portfolio/Portfolio.AppGallery.Mobile';
import { PortfolioAppGalleryMobile2 } from '../components/Portfolio/Portfolio.AppGallery.Mobile2';
import { PortfolioGallery } from '../components/Portfolio/Portfolio.Gallery';
import { PortfolioImageGallery } from '../components/Portfolio/Portfolio.ImageGallery';

const Porfolio2 = () => {
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
          />
        </Box>
        <Divider />
      </header>
      <body>
        <Box
          bg="white"
          paddingTop="3rem"
          paddingBottom="100p"
          maxW="1300px"
          marginX="auto"
        >
          {isBrowser && (
            <Box marginX="auto" textAlign="left" paddingY="2rem">
              <Heading color="myblack.600">Transformation Gallery</Heading>
            </Box>
          )}
          {!isBrowser && (
            <Box
              marginX="auto"
              textAlign="left"
              paddingTop="0rem"
              paddingBottom="1rem"
              paddingLeft="0.8rem"
            >
              <Heading
                color="myblack.600"
                fontSize="1.2rem"
                fontWeight="500"
                textTransform="uppercase"
                letterSpacing="2px"
              >
                Transformation Gallery
              </Heading>
            </Box>
          )}

          {isBrowser && <PortfolioAppGallery />}
          {/* {true && <PortfolioAppGalleryMobile2 />} */}
          {!isBrowser && <PortfolioAppGalleryMobile2 />}
        </Box>
      </body>
      <HomepageFooter />
    </>
  );
};

export default Porfolio2;
