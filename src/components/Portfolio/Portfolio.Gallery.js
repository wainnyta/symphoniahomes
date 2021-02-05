import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  AspectRatio,
  Box,
  Flex,
  IconButton,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { useContext, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdClose } from 'react-icons/md';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import GridImageGallery from '../GridImageGallery';
import { photos } from './photos';
import {
  useEscape,
  useLeftArrow,
  useRightArrow,
  useKeycodeD,
  useKeycodeA,
} from '../KeydownHandler';
import { AppButton } from '../AppButton';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';
import { BeforeAndAfterSlide } from './BeforeAndAfterSlide';
import Slider from '@farbenmeer/react-spring-slider';
const images = photos.map((obj) => {
  return obj.src;
});

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
export const PortfolioGallery = () => {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [contentToShow, setContentToShow] = useState({});
  const [imageVersionToShow, setImageVersionToShow] = useState('');
  const [isShowingBeforePicture, setIsShowingBeforePicture] = useState(false);
  const [imageSlideshowArr, setImageSlideshowArr] = useState([]);
  const [beforeDotActive, setBeforeDotActive] = useState(true);
  const [afterDotActive, setAfterDotActive] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const appSliderRef = useRef(null);

  var windowOffset = 0;
  //looping through our images array to create img elements
  const imageCards = images.map((image) => (
    <img
      style={{ width: '30vw', height: '30vw', objectFit: 'cover' }}
      onClick={() => showImage(image)}
      src={image}
    />
  ));

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
    setImageVersionToShow(image);
    setLightBoxDisplay(true);
    setContentToShow(photos[currentIndex]);

    if (photos[currentIndex].src2 !== undefined) {
      setImageSlideshowArr([
        {
          original: photos[currentIndex].src,
          originalClass: 'appCarouselImage',
        },
        {
          original: photos[currentIndex].src2,
          originalClass: 'appCarouselImage',
        },
      ]);
    } else {
      setImageSlideshowArr([]);
    }

    windowOffset = window.scrollY;
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

  const showBeforePicture = () => {
    // setImageVersionToShow(contentToShow.src2);
    // setIsShowingBeforePicture(true);
  };

  const showAfterPicture = () => {
    setImageVersionToShow(contentToShow.src);
    setIsShowingBeforePicture(false);
  };

  return (
    <div>
      {/* <div>{imageCards}</div> */}
      <GridImageGallery photos={photos} onClick={showImage} showBefore={true} />

      {lightboxDisplay ? (
        <div
          style={{
            zIndex: 1,
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
          <Flex justifyContent="flex-end" py="2rem" pr={''}>
            <IconButton icon={<MdClose />} onClick={hideLightBox} style={{}} />
          </Flex>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderWidth: '0',
              borderColor: 'red',
              marginTop: '-30px',
            }}
          >
            <IconButton icon={<FaArrowLeft />} onClick={showPrev} />
            <Box w="62%">
              {/* {false ? (
                <ImageGallery
                  items={imageSlideshowArr}
                  showBullets={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showNav={true}
                  disableThumbnailScroll={true}
                  autoPlay={false}
                  originalClass="carouselImage"
                />
              ) : (
                <img
                  style={{
                    height: '80vh',
                    width: '90vw',
                    objectFit: 'cover',
                  }}
                  src={contentToShow.src}
                ></img>
              )} */}
              <BeforeAndAfterSlide
                ref={appSliderRef}
                contentToShow={contentToShow}
              />
              {/* <Slider>
                <img src={contentToShow.src} />
                <img src={contentToShow.src2} />
              </Slider> */}
              <Alert
                status="info"
                alignSelf="center"
                marginTop="1rem"
                background="gray.200"
                maxW="1200px"
              >
                <AlertIcon />
                <Box>
                  <AlertDescription display="block">
                    Use hotkeys <b>A</b> and <b>D</b> to navigate between before
                    & after.
                    {/* <b>&#8592;</b> and <b>&#8594;</b> to navigate between
                    photos. */}
                  </AlertDescription>
                </Box>
              </Alert>
            </Box>

            <IconButton icon={<FaArrowRight />} onClick={showNext} />
          </div>
          <Box maxW="60vw" margin="auto" py={'2rem'}>
            <Text fontSize="1.5rem" fontWeight="500">
              {contentToShow.title || ''}
            </Text>
            <Text>{contentToShow.description || ''}</Text>
          </Box>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
