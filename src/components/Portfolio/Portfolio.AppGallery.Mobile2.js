import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  HOUSE_FRONT,
  HOUSE_BACK,
  BEDROOM,
  LIVING_ROOM,
  BATHROOM,
  DINING_ROOM,
  KITCHEN,
  UTILITY_ROOM,
  LAUNDRY_ROOM,
  OFFICE_ROOM,
  GARAGE,
  DECK,
  BASEMENT,
  photos,
} from './photos2';
import { FaArrowAltCircleLeft, FaArrowCircleUp, FaHome } from 'react-icons/fa';
import GridImageGallery from '../GridImageGallery';
import PortfolioImageGridMobile from './Portfolio.ImageGrid.Mobile';
import { PortfolioAppGalleryFilter } from './Portfolio.AppGallery.Filter';
import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function getRoomAvatar(room) {
  // if (room === HOUSE_FRONT) {
  //   return 'images/avatars/house.png';
  // }
  // if (room === HOUSE_BACK) {
  //   return 'images/avatars/yard.png';
  // }
  // if (room === BEDROOM) {
  //   return 'images/avatars/bed.png';
  // }
  // if (room === KITCHEN) {
  //   return 'images/avatars/cook2.svg';
  // }
  // if (room === LIVING_ROOM) {
  //   return 'images/avatars/living2.png';
  // }
  // if (room === BATHROOM) {
  //   return 'images/avatars/bath.png';
  // }
  // if (room === DINING_ROOM) {
  //   return 'images/avatars/dining.png';
  // }
  // if (room === OFFICE_ROOM) {
  //   return 'images/avatars/office.png';
  // }
  // if (room === BASEMENT) {
  //   return 'images/avatars/basement_meditation.png';
  // }
  // if (room === UTILITY_ROOM) {
  //   return 'images/avatars/tool.png';
  // }
  // if (room === GARAGE) {
  //   return 'images/avatars/offroad.png';
  // }
  return '';
}

/*************************************
 *
 * RENDER FOR EACH MOBILE VIEW
 *
 *************************************/
const MobilePhotoDisplay2 = forwardRef((props, ref) => {
  const { photo } = props;
  const mRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView() {
      mRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
  }));

  const renderContent = () => {
    if (photo.src2) {
      return (
        <Swiper pagination={{ clickable: true }}>
          <SwiperSlide>
            <MobilePhotoSlide src={photo.src} />
          </SwiperSlide>
          <SwiperSlide>
            <MobilePhotoSlide src={photo.src2} />
          </SwiperSlide>
        </Swiper>
      );
    } else {
      return (
        <AspectRatio ratio={5 / 3.3} mb="20px">
          <img src={photo.src} />
        </AspectRatio>
      );
    }
  };

  const renderHashtags = () => {
    var tags = photo.tag.map((tag) => {
      return '#' + tag + ' ';
    });
    return tags;
  };

  return (
    <Box
      mt="2rem"
      mb="0rem"
      py={'1rem'}
      pb="0rem"
      ref={mRef}
      className="scrollMarginTop"
    >
      <Divider />
      <Flex p="0.8rem" py="1rem" alignItems="center">
        <Avatar
          size="sm"
          bg="gray.500"
          icon={<FaHome fontSize="1.1rem" color="white" />}
          // name={photo.displayTag}
          // src={getRoomAvatar(photo.displayTag)}
        />
        <Heading
          as="h4"
          pl="0.5rem"
          fontSize="0.9rem"
          fontWeight="700"
          color="gray.700"
          // fontFamily="fantasy"
        >
          {/* Project {photo.project} */}
          {photo.displayTag} Transformation
        </Heading>
      </Flex>
      {renderContent()}
      <Stack px="0.8rem">
        <div>
          {/* <b style={{ fontSize: '0.9rem' }}>{photo.displayTag}</b> */}
          <span
            style={{
              fontSize: '0.9rem',
              // paddingLeft: '0.5rem',
            }}
          >
            {photo.description}
          </span>
        </div>

        <Text color="blue.600" fontSize="0.9rem" fontWeight="700">
          {' '}
          {renderHashtags()}{' '}
        </Text>
      </Stack>
    </Box>
  );
});

/*************************************
 *
 * SLIDER HELPER
 *
 *************************************/
const MobilePhotoSlide = ({ src }) => {
  return (
    <AspectRatio ratio={5 / 3.8} mb="40px">
      <img
        src={src}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </AspectRatio>
  );
};

/*************************************
 *
 * MAIN CLASS
 *
 *************************************/
export const PortfolioAppGalleryMobile2 = () => {
  const [photoRefs, setPhotoRefs] = useState({});
  const mobilePhotoRefs = useRef([]);
  const topRef = useRef(null);
  const [myPhotos, setMyPhotos] = useState(photos);
  const [myImages, setmyImages] = useState([]);
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [windowOffset, setWindowOffset] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(-1);

  useEffect(() => {
    mobilePhotoRefs.current = mobilePhotoRefs.current.slice(0, myPhotos.length);
    if (displayIndex != -1) {
      mobilePhotoRefs.current[displayIndex].scrollIntoView();
    }
  });

  const renderImages = () => {
    const display = myPhotos.map((photo, index) => {
      return (
        <MobilePhotoDisplay2
          key={index}
          ref={(el) => (mobilePhotoRefs.current[index] = el)}
          photo={photo}
        />
      );
    });
    return display;
  };

  const handleOnclick = (index) => {
    setLightboxDisplay(true);
    setDisplayIndex(index);
    //setWindowOffset(window.scrollY);

    // document.body.setAttribute(
    //   'style',
    //   `position: fixed; top: -${windowOffset}px; left: 0; right: 0;`
    // );
    //console.log(mobilePhotoRefs.current, index, mobilePhotoRefs);
  };

  const hideLightbox = () => {
    setLightboxDisplay(false);
    setDisplayIndex(-1);
    // document.body.setAttribute('style', '');
    // console.log('windowOffset: ', windowOffset);
    // window.scrollTo(0, windowOffset);
  };

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div>
      <PortfolioAppGalleryFilter
        photos={photos}
        setPhotos={setMyPhotos}
        setImages={setmyImages}
      />
      <PortfolioImageGridMobile
        style={{
          zIndex: lightboxDisplay ? 0 : 1,
        }}
        photos={myPhotos}
        onClick={handleOnclick}
      />
      {lightboxDisplay && (
        <>
          <div>
            <div
              style={{
                zIndex: 1,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                backgroundColor: '#fff',
              }}
            >
              <div ref={topRef}></div>
              {renderImages()}

              <Flex
                bgColor="myblack.700"
                position="fixed"
                bottom="0"
                right="0"
                zIndex="2"
                width="100%"
                height="70px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box flex={1}></Box>
                <Flex flex={2} justifyContent="center">
                  <Button
                    variant="link"
                    colorScheme="teal"
                    onClick={scrollToTop}
                  >
                    <u>Back to Top</u>
                  </Button>
                </Flex>
                <Flex flex={1} justifyContent="flex-end">
                  <Button onClick={hideLightbox} margin="10px">
                    Close
                  </Button>
                </Flex>
              </Flex>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
