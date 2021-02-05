const { HomepageFooter } = require('../components/Homepage.Footer');
import { Image } from '@chakra-ui/react';
import { isBrowser, isMobile, isTablet } from 'react-device-detect';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { PortfolioAppGallery } from '../components/Portfolio/Portfolio.AppGallery';
import { PortfolioAppGalleryMobile } from '../components/Portfolio/Portfolio.AppGallery.Mobile';
import { PortfolioAppGalleryMobile2 } from '../components/Portfolio/Portfolio.AppGallery.Mobile2';
import { PortfolioGallery } from '../components/Portfolio/Portfolio.Gallery';
import { PortfolioImageGallery } from '../components/Portfolio/Portfolio.ImageGallery';

const Porfolio = () => {
  return (
    <>
      <header>Hello Header</header>
      <body>
        {/* <PortfolioGallery /> */}
        {isBrowser && <PortfolioAppGalleryMobile2 />}
        {!isBrowser && <PortfolioAppGalleryMobile />}
      </body>
      <HomepageFooter />
    </>
  );
};

export default Porfolio;
