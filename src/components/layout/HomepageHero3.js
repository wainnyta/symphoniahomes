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
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
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

export const HomepageHero3 = ({ bgColor }) => (
  <Flex
    direction={{ xl: 'row', base: 'column' }}
    minHeight="100vh"
    bgColor={bgColor || 'black'}
    alignItems="center"
    justifyContent={{ xl: 'center', base: 'space-around' }}
    paddingX="5rem"
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

// const HomepageHero3____ = ({ bgColor }) => (
//   <Grid
//     gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
//     minHeight="100vh"
//     bgColor={bgColor || 'black'}
//     alignItems="center"
//     // justifyContent="center"
//     paddingX="5rem"
//     gap="2rem"
//   >
//     <GridItem>
//       <Flex direction="row" alignItems="center">
//         <Divider w={30} />

//         <Text
//           color="white"
//           pl={['15px', '15px', '15px']}
//           fontFamily="fantasy"
//           fontSize={['18px', '20px', '25px']}
//         >
//           Impassionedly & Thoughtfully
//         </Text>
//       </Flex>
//       <Heading
//         as="h1"
//         color="white"
//         textTransform="uppercase"
//         pt={2}
//         letterSpacing={6}
//         fontFamily="serif"
//         fontSize={['20px', '25px', '40px']}
//         align={['center', 'center', 'left']}
//         // alignSelf={['center', 'center', 'left']}
//       >
//         Designed Spaces
//       </Heading>
//       <Text color="gray.300" maxWidth={'500px'} pt={8} fontSize={20}>
//         Symphonia Homes in a Winnipeg-based company acquiring dated houses in
//         Winnipeg or surrounded areas and rehab to resell or to rent. We are not
//         realtors which means you do not pay commissions when you sell your
//         houses to us. We would like to buy your houses, uncover its beauty and
//         shine through the renovation process. We are passionate about
//         transforming dated houses into beautiful and functional houses for
//         someone to call it their new home.
//       </Text>
//     </GridItem>
//     <GridItem>
//       {/* Hello */}
//       <Image src="/images/ProjectCapulet/10-Kitchen2.jpg" />
//     </GridItem>
//   </Grid>
// );

// const HomepageHero3___ = () => (
//   <Wrap>
//     <WrapItem>
//       <Center w="50%">
//         <Heading
//           as="h1"
//           size="2xl"
//           color="white"
//           pb={100}
//           fontFamily="cursive"
//           fontWeight="500"
//           lineHeight={1.5}
//           align="center"
//         >
//           Impassionedly & Thoughtfully
//           <Heading size="2xl" letterSpacing={10}>
//             Designed Spaces
//           </Heading>
//         </Heading>
//       </Center>
//     </WrapItem>
//     <WrapItem>
//       <Center w="50%">
//         <Image src="/images/ProjectCapulet/10-Kitchen2.jpg" />
//       </Center>
//     </WrapItem>
//   </Wrap>
// );

// const HomepageHero3_old = () => (
//   <Flex
//     flexDirection="row"
//     alignItems="center"
//     justifyContent="space-around"
//     pt={100}
//     bgColor="transparent"
//     minHeight="50vh"
//     pb={100}
//   >
//     <Box width={['100%', '100%', '100%', '100%']}>
//       <Heading
//         as="h1"
//         size="2xl"
//         color="white"
//         pb={100}
//         fontFamily="cursive"
//         fontWeight="500"
//         lineHeight={1.5}
//         align="center"
//       >
//         Impassionedly & Thoughtfully
//         <Heading size="2xl" letterSpacing={10}>
//           Designed Spaces
//         </Heading>
//       </Heading>
//     </Box>

//     <Box
//       alignSelf="center"
//       width="40%"
//       width={['100%', '100%', '100%', '100%']}
//     >
//       {/* <ImageGallery
//         items={images}
//         showBullets={true}
//         showPlayButton={false}
//         showFullscreenButton={false}
//         showNav={true}
//         disableThumbnailScroll={true}
//       /> */}
//       <Image src="/images/ProjectCapulet/10-Kitchen2.jpg" />
//     </Box>
//   </Flex>
// );

// const HomepageHero3__ = () => (
//   <Wrap spacing="30px" justify="center">
//     <WrapItem>
//       <Center w="180px" h="80px" bg="red.200">
//         Box 1
//       </Center>
//     </WrapItem>
//     <WrapItem>
//       <Center w="180px" h="80px" bg="green.200">
//         Box 2
//       </Center>
//     </WrapItem>
//     <WrapItem>
//       <Center w="120px" h="80px" bg="tomato">
//         Box 3
//       </Center>
//     </WrapItem>
//     <WrapItem>
//       <Center w="180px" h="80px" bg="blue.200">
//         Box 4
//       </Center>
//     </WrapItem>
//     <WrapItem>
//       <Center w="180px" h="80px" bg="blackAlpha.500">
//         Box 5
//       </Center>
//     </WrapItem>
//   </Wrap>
// );
