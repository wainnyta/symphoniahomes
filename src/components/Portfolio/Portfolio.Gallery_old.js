import { Center, Flex, IconButton, Image, Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { PortfolioGalleryLightbox } from './Portfolio.Gallery.Lightbox';
import { photos } from './photos';
import GridImageGallery from '../GridImageGallery';

export const PortfolioGallery = () => {
  const [contentToShow, setContentToShow] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  var windowOffset = 0;

  //looping through our images array to create img elements
  const imageCards = photos.map((image, index) => (
    <img onClick={() => showImage(image, index)} src={image.src} />
  ));

  const pureImages = photos.map((content) => {
    return content.src;
  });

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image, index) => {
    // console.log(image);
    // console.log(index);
    setContentToShow(image);
    setImageToShow('/images/ProjectCapulet/1-Front1.jpg');
    setLightBoxDisplay(true);
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
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = pureImages.indexOf(imageToShow);
    let nextIndex = (currentIndex + 1) % photos.length;
    setImageToShow(photos[nextIndex].src);
    setContentToShow(photos[nextIndex]);
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = pureImages.indexOf(imageToShow);
    let nextIndex = Math.abs((currentIndex - 1) % photos.length);
    setImageToShow(photos[nextIndex].src);
    setContentToShow(photos[nextIndex]);
  };

  return (
    <Center>
      {/* <div>{imageCards}</div> */}
      <GridImageGallery
        photos={photos}
        onClick={showImage}
        showBefore={false}
      />
      {lightboxDisplay && (
        <Box
          width="100vw"
          height="100vh"
          px="2rem"
          zIndex="1"
          position="fixed"
          top="0"
          bg="white"
          margin="auto"
          overflowY="auto"
        >
          <Flex my="1rem" justifyContent="flex-end">
            <IconButton icon={<MdClose />} onClick={hideLightBox} />
          </Flex>
          <LBMainContent
            contentToShow={contentToShow}
            showPrev={showPrev}
            showNext={showNext}
          />
        </Box>
      )}
    </Center>
  );
};

const LBMainContent = ({ contentToShow, showPrev, showNext }) => {
  console.log('LBMainContent', contentToShow);
  return (
    <Box width="100%">
      <div style={{ display: 'flex', alignItems: '' }}>
        <IconButton
          // position="fixed"
          // top={0.5 * contentToShow.src * 100}
          // left="5%"
          icon={<FaArrowLeft />}
          onClick={showPrev}
        />
        <Image
          margin="auto"
          src={contentToShow.src}
          maxW="80vw"
          maxH="80vh"
          objectFit="cover"
        ></Image>
        <IconButton
          // position="fixed"
          // top="50%"
          // right="5%"
          icon={<FaArrowRight />}
          onClick={showNext}
        />
      </div>
      <Box maxW="60vw" margin="auto" py={'2rem'}>
        <Text fontSize="1.5rem" fontWeight="500">
          {contentToShow.title || ''}
        </Text>
        <Text>{contentToShow.description || ''}</Text>
      </Box>
    </Box>
  );
};
