import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Flex,
  IconButton,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import GridImageGallery from '../GridImageGallery';
import {
  useEscape,
  useKeycodeA,
  useKeycodeD,
  useLeftArrow,
  useRightArrow,
} from '../KeydownHandler';
import { BeforeAndAfterSlide } from './BeforeAndAfterSlide';
import { photos } from './photos2';
import { PortfolioAppGalleryFilter } from './Portfolio.AppGallery.Filter';
import { motion, AnimatePresence } from 'framer-motion';

let initialImages = photos.map((obj) => {
  return obj.src;
});

const lightboxVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
export const PortfolioAppGallery = () => {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [contentToShow, setContentToShow] = useState({});
  const [tag, setTag] = useState('');
  const [images, setImages] = useState(initialImages);
  const [windowOffset, setWindowOffset] = useState(0);
  const [myPhotos, setMyPhotos] = useState(photos);
  const appSliderRef = useRef(null);

  useRightArrow(() => showNext());
  useLeftArrow(() => showPrev());
  useKeycodeA(() => slideLeft());
  useKeycodeD(() => slideRight());
  useEscape(() => hideLightBox());

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    if (appSliderRef && appSliderRef.current) {
      appSliderRef.current.showFirst();
    }

    let currentIndex = images.indexOf(image);
    setImageToShow(image);
    setLightBoxDisplay(true);
    setContentToShow(myPhotos[currentIndex]);

    setWindowOffset(window.scrollY);
    document.body.setAttribute(
      'style',
      `position: fixed; top: -${windowOffset}px; left: 0; right: 0;`
    );
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
    document.body.setAttribute('style', '');
    window.scrollTo(0, windowOffset);
  };

  //show next image in lightbox
  const showNext = () => {
    // e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    let nextIndex = (currentIndex + 1) % images.length;
    let nextImage = images[nextIndex];
    showImage(nextImage);
  };

  //show previous image in lightbox
  const showPrev = () => {
    // e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    let nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      nextIndex = images.length - 1;
    }
    let nextImage = images[nextIndex];
    showImage(nextImage);
  };

  const slideLeft = () => {
    if (appSliderRef.current) {
      appSliderRef.current.showImage(-1);
    }
  };
  const slideRight = () => {
    if (appSliderRef.current) {
      appSliderRef.current.showImage(+1);
    }
  };

  return (
    <Box paddingBottom="6rem">
      <PortfolioAppGalleryFilter
        photos={photos}
        setPhotos={setMyPhotos}
        setImages={setImages}
      />
      <div style={{ maxW: '1600px' }}>
        <GridImageGallery
          photos={myPhotos}
          onClick={showImage}
          showBefore={true}
        />

        {true ? (
          <AnimatePresence>
            {lightboxDisplay && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  style={{
                    zIndex: 999,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fcfcfc',
                    overflowY: 'auto',
                    borderWidth: '1px',
                    paddingRight: '2rem',
                    paddingLeft: '2rem',
                  }}
                >
                  <Flex justifyContent="space-between" py="2rem" pr={''}>
                    <Flex></Flex>
                    <Flex justifyContent="space-between" alignSelf="center">
                      <IconButton
                        alignSelf="center"
                        icon={<FaArrowLeft />}
                        onClick={showPrev}
                        display={{ base: 'flex', lg: 'none' }}
                        mx="10px"
                      />
                      <IconButton
                        alignSelf="center"
                        icon={<FaArrowRight />}
                        onClick={showNext}
                        display={{ base: 'flex', lg: 'none' }}
                        mx="10px"
                      />
                    </Flex>

                    <Flex
                      justifyContent="flex-end"
                      alignSelf="flex-end"
                      alignItems="flex-end"
                      justifyItems="flex-end"
                    >
                      <IconButton
                        icon={<MdClose />}
                        onClick={hideLightBox}
                        style={{}}
                      />
                    </Flex>
                  </Flex>

                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{ opacity: 1 }}
                    >
                      <Box
                        key={contentToShow.src}
                        marginTop={{ xl: '-50px', base: '0px' }}
                        marginX="auto"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderWidth: '0',
                          borderColor: 'red',
                        }}
                      >
                        <IconButton
                          icon={<FaArrowLeft />}
                          onClick={showPrev}
                          display={{ base: 'none', lg: 'flex' }}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '30px',
                          }}
                        />
                        <Box
                          w={{ xl: '62%', lg: '90%', md: '100%', base: '100%' }}
                          marginX="auto"
                        >
                          <BeforeAndAfterSlide
                            ref={appSliderRef}
                            contentToShow={contentToShow}
                          />
                        </Box>

                        <IconButton
                          icon={<FaArrowRight />}
                          onClick={showNext}
                          display={{ base: 'none', lg: 'flex' }}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            right: '30px',
                          }}
                        />
                      </Box>
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Box
                        maxW="60vw"
                        margin="auto"
                        pt={'2rem'}
                        key={contentToShow.src}
                      >
                        <Text
                          fontSize="1.5rem"
                          fontWeight="900"
                          fontFamily="Merriweather"
                        >
                          {contentToShow.displayTag + ' Transformation' || ''}
                        </Text>
                        <Text pt="10px">{contentToShow.description || ''}</Text>
                      </Box>
                      <Alert
                        status="info"
                        alignSelf="center"
                        marginTop="1rem"
                        background="gray.200"
                        maxW="60vw"
                        marginX="auto"
                        display={{ lg: 'flex', base: 'none' }}
                        mb="2rem"
                        mt="20px"
                      >
                        <AlertIcon />
                        <Box>
                          <AlertDescription display="block">
                            Use hotkeys <b>A</b> and <b>D</b> to navigate
                            between before & after.
                            {/* <b>&#8592;</b> and <b>&#8594;</b> to navigate between
                    photos. */}
                          </AlertDescription>
                        </Box>
                      </Alert>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          ''
        )}
      </div>
    </Box>
  );
};
