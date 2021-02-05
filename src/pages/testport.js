import { Flex, Box } from '@chakra-ui/react';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
const images2 = [
  {
    original: '/images/ProjectCapulet/10-Kitchen2.jpg',
  },
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

const TestPort = () => {
  return (
    <Flex>
      <Box>
        <ImageGallery
          items={images2}
          showBullets={true}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          disableThumbnailScroll={true}
          autoPlay={false}
        />
      </Box>
    </Flex>
  );
};
export default TestPort;
