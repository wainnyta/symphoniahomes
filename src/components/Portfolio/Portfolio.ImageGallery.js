import { AspectRatio, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Slider from 'react-slick';
import GridImageGallery from '../GridImageGallery';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { photos } from './photos';
import { useRightArrow } from '../KeydownHandler';
import { BeforeAndAfterSlide } from './BeforeAndAfterSlide';

const images = photos.map((obj) => {
  return obj.src;
});

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
export const PortfolioImageGallery = () => {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [contentToShow, setContentToShow] = useState({});
  const [sliderVisibility, setSliderVisibility] = useState(true);
  const sliderRef = useRef(null);

  var windowOffset = 0;

  useRightArrow(() => showNext());

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setLightBoxDisplay(true);
    let currentIndex = images.indexOf(image);

    setSliderVisibility(false);
    if (sliderRef.current !== null && photos[currentIndex].src2) {
      //console.log(sliderRef.current);
      if (sliderRef.current.currentIndex !== 0) {
        sliderRef.current.slickGoTo(0);
      }
    }
    setTimeout(() => {
      setImageToShow(image);
      setContentToShow(photos[currentIndex]);
      setSliderVisibility(true);
    }, 10);

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
    if (!lightboxDisplay) return;
    // e.stopPropagation();

    let currentIndex = images.indexOf(imageToShow);
    let nextIndex = (currentIndex + 1) % images.length;
    let nextImage = images[nextIndex];

    showImage(nextImage);
  };

  //show previous image in lightbox
  const showPrev = () => {
    if (!lightboxDisplay) return;
    // e.stopPropagation();

    let currentIndex = images.indexOf(imageToShow);
    let nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      nextIndex = images.length - 1;
    }
    let nextImage = images[nextIndex];
    showImage(nextImage);
  };

  const settings = {
    dots: true,
    adaptiveHeight: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderImage = () => {
    if (contentToShow.src2 && sliderVisibility) {
      return (
        <Slider {...settings} ref={sliderRef}>
          <AspectRatio maxW="1000px" ratio={5 / 3.3}>
            <img src={contentToShow.src} style={{ objectFit: 'contain' }} />
          </AspectRatio>
          <AspectRatio maxW="1000px" ratio={5 / 3.3}>
            <img src={contentToShow.src2} style={{ objectFit: 'cover' }} />
          </AspectRatio>
        </Slider>
      );
    } else if (sliderVisibility) {
      return <img src={contentToShow.src} />;
    }
  };

  const renderImage2 = () => {};

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
            }}
          >
            <IconButton icon={<FaArrowLeft />} onClick={showPrev} />
            <div style={{ width: '60%' }}>
              {/* <img src={contentToShow.src} /> */}
              {/* {renderImage()} */}
              <BeforeAndAfterSlide contentToShow={contentToShow} />
            </div>

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
