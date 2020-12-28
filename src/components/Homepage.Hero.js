import { MinusIcon, EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { GrUserWorker } from 'react-icons/gr';
import {
  FaPeopleCarry,
  FaCommentDollar,
  FaChevronCircleRight,
} from 'react-icons/fa';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';

import {
  Flex,
  Heading,
  SimpleGrid,
  Box,
  Center,
  Container,
  Image,
  AspectRatio,
  Wrap,
  WrapItem,
  Stack,
  Grid,
  GridItem,
  Text,
  Divider,
  Spacer,
  Button,
  IconButton,
} from '@chakra-ui/react';

import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { IconContext } from 'react-icons/lib';

const images = [
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

export const HomepageHero = ({ bgColor }) => (
  <Flex
    direction={{ xl: 'row', base: 'column' }}
    minHeight="100vh"
    bgColor={bgColor || 'black'}
    alignItems="center"
    justifyContent={{ xl: 'center', base: 'space-around' }}
    paddingX={{ lg: '5rem', base: '2rem' }}
    pt={{ xl: 0, base: '50px' }}
  >
    <Divider
      mt={10}
      mb={5}
      borderColor="yellow.100"
      w={{ lg: 200, md: 200, base: 100 }}
      alignSelf="center"
      display={{ xl: 'none', base: 'block' }}
    />
    <Box
      w={{ xl: '50%', base: '100%' }}
      paddingRight={{ xl: '10px' }}
      justifyContent="center"
      justifyItems="center"
      alignItems="center"
      paddingLeft={{ xl: '50px' }}
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent={{ base: 'center', xl: 'left' }}
      >
        <Divider w={30} display={{ base: 'none', xl: 'block' }} />
        <Text
          color="white"
          pl={'15px'}
          fontFamily="fantasy"
          fontSize={{ sm: '20px', md: '28px' }}
        >
          Impassionedly & Thoughtfully
        </Text>
      </Flex>
      <Text
        color="white"
        textTransform="uppercase"
        pt={2}
        letterSpacing={5}
        fontFamily="serif"
        fontSize={{ xl: '45px', sm: '35px' }}
        fontWeight="700"
        align={{ base: 'center', xl: 'left' }}
        // alignSelf={['center', 'center', 'left']}
      >
        Designed Spaces
      </Text>
      <Box
        // maxWidth={{ xl: '500px', lg: '800px', base: '100%' }}
        maxWidth={{ xl: '500px', base: '100%' }}
        pt={8}
        align={{ xl: 'left', lg: 'center', base: 'center' }}
        px={{ lg: '100px', xl: '0' }}
        alignItems="center"
        alignContent="center"

        // borderWidth={1}
        // borderColor="white"
      >
        <Text
          color="gray.300"
          align={{ base: 'center', xl: 'left' }}
          fontSize={18}
          fontFamily="unset"
        >
          Symphonia Homes in a Winnipeg-based company acquiring dated houses in
          Winnipeg or surrounded areas and rehab to resell or to rent. We are
          passionate about buying dated houses, uncovering their beauty and
          making them shine again through the renovation process. Our process is
          quick and simple, with no comissions or hidden fees. We work with
          credibility, integrity and we take great pride in every project we
          partake in.
        </Text>
      </Box>

      <Stack
        direction={{ lg: 'row', base: 'column' }}
        pt={{ xl: '10', base: '10' }}
        spacing="15px"
        justifyContent={{ xl: 'left', lg: 'center', base: 'center' }}
        pb={{ xl: 0, base: '40px' }}
      >
        <Button
          size="lg"
          variant="solid"
          fontSize={15}
          // leftIcon={
          // <div style={{ paddingRight: 10 }}>
          //   <FaCommentDollar color="white" size={22} />
          // </div>
          // }
          // bgColor="#D17810"
          // color="white"
          colorScheme="teal"
        >
          Have A House To Sell?
        </Button>
        <Button
          fontSize={15}
          variant={{ xl: 'ghost', base: 'outline' }}
          size="lg"
          rightIcon={
            <div style={{ paddingLeft: 10 }}>
              <FaChevronCircleRight fontSize={25} />
              {/* <ArrowForwardIcon
                borderColor="white"
                borderWidth={1}
                borderRadius={50}
                colorScheme="teal"
              /> */}
            </div>
          }
          color="white"
        >
          See Our Work
        </Button>
      </Stack>
    </Box>

    <Box
      w={{ xl: '50%', base: '100%' }}
      paddingLeft={{ xl: '20px', base: '0px' }}
      pb={{ xl: 0, base: 100 }}
    >
      {/* Hello */}
      {/* <Image src="/images/ProjectCapulet/10-Kitchen2.jpg" /> */}
      <ImageGallery
        items={images}
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
