import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaAngleDoubleRight, FaAngleDoubleUp } from 'react-icons/fa';
import { AppButton } from './AppButton';
import GridImageGallery from './GridImageGallery';
import { photos } from './photos';
import { useRouter } from 'next/router';
import { isBrowser, isTablet } from 'react-device-detect';

export const HomepageGallery = ({ formRef }) => {
  const router = useRouter();

  const [viewGalleryIsLoading, setviewGalleryIsLoading] = useState(false);

  function getGalleryTitleText() {
    if (isBrowser || isTablet) {
      return (
        <>
          See the <u>impact</u> we've made <br /> on our community
        </>
      );
    } else {
      return (
        <>
          See the <u>impact</u> we've made on our community
        </>
      );
    }
  }

  return (
    <Box
      direction="column"
      alignItems="center"
      pt="5rem"
      pb="7rem"
      width={{ xl: '70vw', md: '80vw', base: '90vw' }}
      margin="auto"
    >
      <Text
        as="h1"
        fontSize={{ xl: '3.5rem', md: '2.5rem', base: '1.5rem' }}
        my="2rem"
        fontWeight="600"
        textAlign="center"
      >
        {getGalleryTitleText()}
      </Text>
      {/* <ResponsiveGallery images={photos} /> */}
      <GridImageGallery showImageComparision={true} photos={photos} />
      {/* <SelectedImage
        photo={{
          src: 'images/ProjectCapulet/1-Front1.jpg',
          width: 400,
          height: 250,
        }}
      /> */}
      <Flex
        mt="4rem"
        justifyContent="center"
        direction={{ md: 'row', base: 'column' }}
      >
        {/* <Button
          colorScheme="teal"
          variant="appdark"
          mx="10px"
          onClick={() => {
            setviewGalleryIsLoading(true);
            router.push('/portfolio');
          }}
          isLoading={viewGalleryIsLoading}
        >
          View Transformation Gallery
        </Button> */}
        <Button
          colorScheme="teal"
          bg={'teal.400'}
          border="1px"
          size="lg"
          mx="10px"
          color={'white'}
          borderColor={'teal.400'}
          fontSize={15}
          isLoading={viewGalleryIsLoading}
          onClick={() => {
            setviewGalleryIsLoading(true);
            router.push('/portfolio');
          }}
        >
          View Transformation Gallery
        </Button>
        <Button
          mt={{ md: '0px', base: '10px' }}
          colorScheme="orange"
          //bg={'transparent'}
          //border="1px"
          mx="10px"
          size="lg"
          //color={'black'}
          //borderColor={'transparent'}
          fontSize={15}
          isLoading={viewGalleryIsLoading}
          onClick={() => {
            formRef
              ? formRef.current.scrollIntoView({
                  behavior: 'smooth',
                })
              : null;
          }}
        >
          Get A Free Quote
          <FaAngleDoubleUp style={{ marginLeft: '1rem' }} fontSize="1.5rem" />
        </Button>

        {/* <AppButton
          bg="transparent"
          hoverBg="transparent"
          color="black"
          hoverColor="black"
          hoverBorderWidth="0"
          onClick={() => {
            //router.push('/about').then(() => window.scrollTo(0, 0));

            formRef
              ? formRef.current.scrollIntoView({
                  behavior: 'smooth',
                })
              : null;
          }}
        >
          Get A Free Quote
          <FaAngleDoubleUp style={{ marginLeft: '1rem' }} fontSize="1.5rem" />
        </AppButton> */}
      </Flex>
    </Box>
  );
};
