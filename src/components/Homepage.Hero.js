import { Box, Button, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import { FaChevronCircleRight } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, pagination } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { useState } from 'react';
import { useRouter } from 'next/router';

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

const IntroText_Old =
  'Symphonia Homes in a Winnipeg-based company acquiring dated houses in Winnipeg or surrounded areas and rehab to resell or to rent. We are passionate about buying dated houses, uncovering their beauty and making them shine again through the renovation process. Our process is quick and simple, with no comissions or hidden fees. We work with credibility, integrity and we take great pride in every project we partake in.';
const IntroText =
  'Symphonia Homes Inc. is a Winnipeg-based company specializing in buying houses in Winnipeg or surrounding areas to rehab and resell or rent. We are taking what is often an outdated property or an eyesore and creating a quality home through renovations. By transforming outdated and neglected houses into beautiful homes for new families to build memories, we have improved quality of life on the street and in the neighborhood where the house is located. We also have contributed to the neighborhood wealth by increasing property values.';

export const HomepageHero = ({ bgColor }) => {
  const [viewGalleryIsLoading, setViewGalleryIsLoading] = useState(false);
  const router = useRouter();
  return (
    <Flex
      direction={{ xl: 'row', base: 'column' }}
      minHeight="100vh"
      bgColor={bgColor || 'black'}
      alignItems="center"
      justifyContent={{ xl: 'center', base: 'space-around' }}
      paddingX={{ md: '5rem', base: '1.5rem' }}
      pt={{ xl: 0, base: '50px' }}
    >
      {/* <Divider
        mt={10}
        mb={5}
        borderColor="yellow.100"
        w={{ lg: 200, md: 200, base: 100 }}
        alignSelf="flex-start"
        display={{ xl: 'none', base: 'block' }}
      /> */}
      <Box
        w={{ xl: '50%', base: '100%' }}
        paddingRight={{ xl: '10px' }}
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        paddingLeft={{ xl: '50px' }}
        mt={{ base: '10', xl: 0 }}
      >
        <Box borderColor="teal.100">
          <Flex
            direction="row"
            alignItems="center"
            justifyContent={{
              base: 'flex-start',
              md: 'center',
              xl: 'flex-start',
            }}
          >
            <Divider w={30} display={{ base: 'none', xl: 'block' }} />
            <Text
              color="white"
              pl={'15px'}
              fontFamily="fantasy"
              fontSize={{ base: '18px', md: '28px' }}
            >
              Impassionedly & Thoughtfully
            </Text>
          </Flex>
          <Text
            color="white"
            textTransform="uppercase"
            pt={2}
            letterSpacing={{ xl: 5, base: 1 }}
            pl={{ base: '15px', md: 0 }}
            fontFamily="serif"
            fontSize={{ xl: '45px', base: '28px' }}
            fontWeight="700"
            align={'flex-start'}
            display={{ xl: 'block', md: 'none', base: 'block' }}
            // alignSelf={['center', 'center', 'left']}
          >
            Designed Spaces
          </Text>
          <Text
            color="white"
            textTransform="uppercase"
            pt={2}
            letterSpacing={{ xl: 5, base: 1 }}
            pl={{ base: '15px', md: 0 }}
            fontFamily="serif"
            fontSize={{ xl: '45px', base: '28px' }}
            fontWeight="700"
            display={{ xl: 'none', md: 'block', base: 'none' }}
            align={'center'}
            // alignSelf={['center', 'center', 'left']}
          >
            Designed Spaces
          </Text>
        </Box>

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
            align={{ base: 'left', xl: 'left' }}
            fontSize={{ base: '1rem', xl: '18px' }}
            fontFamily="unset"
          >
            {IntroText}
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
            isLoading={viewGalleryIsLoading}
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
            onClick={() => {
              setViewGalleryIsLoading(true);
              router.push('/portfolio');
            }}
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
        {/* <ImageGallery
        items={images}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        disableThumbnailScroll={true}
        autoPlay={false}
      /> */}
        <Swiper pagination={{ clickable: true }}>
          <SwiperSlide>
            <img src="/images/ProjectCapulet/10-Kitchen2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/ProjectDumoulin/kitchen 4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/ProjectCapulet/6-Living1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/ProjectCapulet/15-HalfBath.jpg" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
};
