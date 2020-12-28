import {
  Flex,
  Heading,
  SimpleGrid,
  Box,
  Center,
  Container,
  Image,
} from '@chakra-ui/react';

export const _HomepageHero = () => (
  <Flex
    flexDirection="row"
    alignItems="center"
    justifyContent="space-around"
    mt={100}
  >
    <Box>
      <Heading
        fontFamily="fantasy"
        as="h1"
        size="2xl"
        lineHeight={1.5}
        align="center"
      >
        Impassionedly & Thoughtfully<br></br>Designed Spaces
      </Heading>
    </Box>
    <Box>
      <Image src="/images/livingroom_sketch_1.png" width={900} />
    </Box>
  </Flex>
);
