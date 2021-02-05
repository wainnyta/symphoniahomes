import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { AppButton } from './AppButton';
import GridImageGallery from './GridImageGallery';
import { photos } from './photos';
import { useRouter } from 'next/router';

export const HomepageGallery = () => {
  const router = useRouter();
  const [viewGalleryIsLoading, setviewGalleryIsLoading] = useState(false);
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
        fontSize={{ xl: '4rem', md: '2.5rem', base: '2rem' }}
        my="2rem"
        fontWeight="600"
        textAlign="center"
      >
        See the <u>impact</u> we've made <br />
        on our community
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
        <Button
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
        </Button>
        <AppButton
          bg="transparent"
          hoverBg="transparent"
          color="black"
          hoverColor="black"
          hoverBorderWidth="0"
        >
          Read Our Stories
          <FaAngleDoubleRight
            style={{ marginLeft: '1rem' }}
            fontSize="1.7rem"
          />
        </AppButton>
      </Flex>
    </Box>
  );
};
