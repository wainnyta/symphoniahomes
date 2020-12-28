import {
  Flex,
  Heading,
  SimpleGrid,
  Box,
  Center,
  Container,
  Image,
  AspectRatio,
} from '@chakra-ui/react';

import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/images/ProjectDumoulin/kitchen 4.jpg',
  },
  {
    original: '/images/ProjectCapulet/6-Living1.jpg',
  },
  {
    original: '/images/ProjectCapulet/15-HalfBath.jpg',
  },
];

export const HomepageHero2 = () => (
  <Flex
    flexDirection="row"
    alignItems="center"
    justifyContent="space-around"
    pt={100}
    bgColor="gray.900"
    minHeight="50vh"
    pb={100}
  >
    <Box>
      <Heading
        as="h1"
        size="2xl"
        color="white"
        pb={100}
        fontFamily="cursive"
        fontWeight="500"
        lineHeight={1.5}
        align="center"
      >
        Impassionedly & Thoughtfully
        <Heading size="2xl" letterSpacing={10}>
          Designed Spaces
        </Heading>
      </Heading>
    </Box>

    <Box alignSelf="center" width="40%">
      <ImageGallery
        items={images}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={true}
        disableThumbnailScroll={true}
      />
      {/* <Image src="/images/ProjectDumoulin/kitchen 4.jpg" /> */}
    </Box>
  </Flex>
);
