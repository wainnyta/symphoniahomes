const { HomepageFooter } = require('../src/components/Homepage.Footer');
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Navbar from '../src/components/layout/Navbar';

/*****************************
 *
 * MAIN ENTRANCE
 *
 *****************************/
const AboutUs = () => {
  return (
    <>
      <header>
        <Box maxW="1600px" margin="auto" marginBottom="2rem">
          <Navbar
            bgColor="transparent"
            textColor="black"
            ctaBackgroundColor="teal.400"
            ctaColor="white"
            ctaBorderColor="teal.400"
            bottomBordered={true}
            focus="about"
          />
        </Box>
        <Divider />
      </header>
      <body>
        <Box bg="white" paddingTop="2rem">
          <Box maxW="1550px" marginX="auto">
            {/* <Heading
              color="myblack.700"
              as="h1"
              lineHeight={{ xl: '4rem', base: null }}
              fontSize={{ xl: '2rem', base: '1.5rem' }}
              paddingX={{ xl: '5rem', base: '3rem' }}
              fontWeight="300"
              fontFamily="unset"
            >
              Hello! we are Wainny & Roline. 👫
              <br />
              And this is <u>Our Real Estate Journey</u>.
            </Heading> */}
          </Box>
        </Box>
        <Box maxW="1550px" marginX="auto">
          <RolineStory />
        </Box>
        <Box bgColor="#fbfbfb">
          <Box maxW="1550px" marginX="auto">
            <WainnyStory />
          </Box>
        </Box>
      </body>
      <HomepageFooter />
    </>
  );
};

/*****************************
 *
 * ROLINE STORY
 *
 *****************************/
const RolineStory = () => {
  return (
    <Box
      paddingTop={{ xl: '6rem', base: '5rem' }}
      paddingBottom={{ xl: '4rem', base: '3rem' }}
      paddingLeft={{ xl: '9rem', base: '1rem' }}
      paddingRight={{ xl: '4rem', base: '1rem' }}
    >
      <Heading
        fontWeight="300"
        fontFamily="sans-serif"
        textDecoration="underline"
        color="teal.900"
        fontFamily="cursive"
        fontSize="3rem"
      >
        Roline's Journey
      </Heading>
      <Flex direction={{ xl: 'row', base: 'column' }}>
        <Image
          objectFit="contain"
          src="/images/winnipeg.jpeg"
          maxW={{ xl: '500px', base: '100%' }}
          mt={{ xl: '5rem', base: 0 }}
          maxH={{ xl: '700px', base: '600px' }}
          borderRadius="15px"
          alignSelf={{ xl: 'flex-start', base: 'center' }}
        />
        <Box px={{ xl: '5rem', base: '1rem' }} pt={{ xl: 0, base: '1.2rem' }}>
          <Heading
            as="h3"
            pb="1.5rem"
            fontSize={{ xl: '2rem', base: '1.8rem' }}
          >
            I believe things don’t happen for a{' '}
            <span style={{ color: 'tomato' }}>reason</span>, because they happen
            for a{' '}
            <span style={{ color: 'green' }}>
              <i>good</i>
            </span>{' '}
            <span style={{ color: 'teal' }}>reason</span>.
          </Heading>
          <Post>
            <b>👋 &nbsp;Hi there! My name is Roline</b>, and I purchased my
            first house a few years ago. The house was over a hundred-year-old
            but it was structurally good and remained many of its charming
            characters. I beat 6 other offers by offering close to{' '}
            <span>
              <u>$20,000</u>
            </span>{' '}
            over the asking price. Shortly after taking possession, a lot of big
            changes happened in my life that made the house no longer a good fit
            for me, so I decided to have it listed for sale just after over a
            year I bought it.
          </Post>
          <Post>
            I hired contractors to reroof, create proper access to the utility
            room, repaint the house in and out, and do some other minor repairs.
            My partner and I did smaller jobs by ourselves to save the costs
            such as staining the deck, painting small furniture, re-doing front
            and back yard landscaping, etc.
          </Post>
          <Post>
            The real estate market was fairly stable back then so the house
            didn’t increase much in value in just over a year. Honestly, I was
            not sure if the house could be sold on a reasonable time or not, not
            to mention about recouping the renovation costs that were put on the
            house. But all the hard work was paid off. The house was
            conditionally sold after one day on the market. I didn’t make any
            profit on the sale of the house (of course!), but I was lucky enough
            to walk away from the house quickly as expected to move ahead with
            other plans. I also found myself lucky to have money, time, as well
            as the needed support at that time to put the house in pristine
            condition before listing.
          </Post>
          <Post>
            That summer was very busy. Each day I came home from work, rolled up
            my sleeves and went straight to prepping the house for sale from
            picking up materials from hardware stores, garden centers, etc.,
            cleaning, painting, staining, decluttering, giving away furniture.
            If you had sold your house before, you know how time-consuming and
            stressful the process could be. But all those experiences have made
            me realize one thing that I never knew about myself before, that I
            really love transforming houses. And just like that, my real estate
            journey has begun.
          </Post>
          <Post>
            Rehabbing houses is not all enjoyable process due to many unexpected
            issues uncovered during renovation, but it is rewarding seeing the
            house after transformation. Creating quality homes at affordable
            price is our company’s commitment, and our biggest accomplishment is
            having someone loves our renovated property and call it their home.
          </Post>
        </Box>
      </Flex>
    </Box>
  );
};

/*****************************
 *
 * WAINNY STORY
 *
 *****************************/
const WainnyStory = () => {
  return (
    <Box
      paddingY={{ xl: '9rem', base: '7rem' }}
      paddingLeft={{ xl: '9rem', base: '1rem' }}
      paddingRight={{ xl: '4rem', base: '1rem' }}
    >
      <Heading
        fontWeight="300"
        fontFamily="sans-serif"
        textDecoration="underline"
        color="teal.900"
        fontFamily="cursive"
        fontSize="3rem"
      >
        Wainny's Journey
      </Heading>
      <Flex direction={{ xl: 'row', base: 'column' }}>
        <Image
          // pr={{ xl: '5rem', base: '1rem' }}
          objectFit="contain"
          src="/images/winnipeg2.jpeg"
          maxW={{ xl: '500px', base: '100%' }}
          maxH={{ xl: '700px', base: '600px' }}
          mt={{ xl: '5rem', base: 0 }}
          borderRadius="15px"
          alignSelf={{ xl: 'flex-start', base: 'center' }}
        />

        <Box px={{ xl: '5rem', base: '1rem' }} pt={{ xl: 0, base: '1.2rem' }}>
          <Heading
            as="h3"
            pb="1.5rem"
            fontSize={{ xl: '2rem', base: '1.8rem' }}
          >
            The <span style={{ color: '#07F' }}>sky</span> is not the{' '}
            <span style={{ color: 'tomato' }}>limit</span>.{' '}
            <span style={{ color: 'teal' }}>We</span> are (and aren't).
          </Heading>
          <Post>
            <b>👋 &nbsp;Hi there! My name is Wainny</b>. I believe everyhing has
            a unique 'signature', and things are at their best when vibrating at
            their optimum frequency. As a fellow human being, I am passionate
            about studying things around me, analyzing and tuning them so that
            they can bring out their best potential and shine their most
            beautiful light.
          </Post>
          <Post>
            That was the reason why I chose{' '}
            <span>
              <u>Computer Science</u>
            </span>{' '}
            as my field of work, and now,{' '}
            <span style={{ color: 'teal' }}>
              <b>Real Estate</b>
            </span>
            . As you might have probably guessed, I created this website, and I
            also discovered my passion for house renovation when I helped Roline
            out with the sale of her first house.
          </Post>
          <Post>
            House renovation is pretty much alike that of writing computer code.
            We must have a good foundation to build upon, a good architecture
            and layers design so that we can use the product with the least
            possible setbacks. There is an aesthetical aspect with how it
            presents itself that pretty much reflects back our unique style as a
            person. It is infused with our creative power, our thought processes
            & our love. It must come with all neccesary functions packed & ready
            to use. In short, it is a piece of art crafted scientifically.
          </Post>
          <Post>
            Shortly before starting our Real Estate journey, we don't
            neccesarily believe that we can create magic for our lives. Like a
            lot of people, we don't trust ourselves enough. However, in time of
            distress is where we usually discover the true us & how strong we
            really are. That is how we start. Since then, we keep on pushing
            forward with more & more creative projects and thus, the birth of
            Symphonia Homes Inc.{' '}
            <b>
              Our vision is to be there when you need our help to sell your
              house, and moreover, to really take care and transform your home
              when you hand your keys to us.
            </b>
          </Post>
          <Post>
            I strongly believe everyone has an inner calling and a purpose to
            follow in life. When things don't go well, we have the tendency to
            look elsewhere but inside ourselves. And when things do go well, we
            don't pat ourselves enough, thinking that it is but pure luck. The
            sky is not the limit to our capabilities. Our mindsets are! But in
            fact, they aren't. They are the tools for us to discover our
            strengths and our purpose in life, & to lift us to the limitless
            version of ourselves. 🌎
          </Post>
        </Box>
      </Flex>
    </Box>
  );
};

/*****************************
 *
 * POST HELPER
 *
 *****************************/
const Post = ({ children }) => {
  return (
    <Text
      py={{ xl: '0.8rem', base: '0.5rem' }}
      color="myblack.800"
      // fontFamily="unset"
      fontSize={{ xl: '1.1rem', base: '1rem' }}
    >
      {children}
    </Text>
  );
};

export default AboutUs;
