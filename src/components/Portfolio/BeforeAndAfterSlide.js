import {
  AspectRatio,
  Flex,
  IconButton,
  Box,
  Slide,
  ScaleFade,
  Fade,
  SlideFade,
  useDiscloser,
  Stack,
} from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight, FaArrowLeft } from 'react-icons/fa';
import { AppButton } from '../AppButton';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { useTransition, animated } from 'react-spring';
import { motion, AnimatePresence } from 'framer-motion';

//https://stackoverflow.com/questions/37949981/call-child-method-from-parent
export const BeforeAndAfterSlide = forwardRef((props, ref) => {
  const { contentToShow } = props;
  const [displayIndex, setDisplayIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [showBeforePicture, setShowBeforePicture] = useState(false);
  const [showAfterPicture, setShowAfterPicture] = useState(true);
  const [fadeImage, setFadeImage] = useState(true);

  const pages = [
    ({ style }) => (
      <animated.div style={{ ...style, width: '100%' }}>
        <img
          src={contentToShow.src2}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, width: '100%' }}>
        <img
          src={contentToShow.src}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </animated.div>
    ),
  ];

  const getCurrentImage = () => {
    switch (displayIndex) {
      case 0:
        return contentToShow.src;
      case 1:
        return contentToShow.src2;
    }
  };

  useImperativeHandle(ref, () => ({
    showFirst() {
      setDisplayIndex(0);
    },
    showImage(change) {
      let newIndex = Math.abs(displayIndex + change) % 2;
      setDisplayIndex(newIndex);
    },
  }));

  function showImage(change, direction) {
    let newIndex = Math.abs(displayIndex + change) % 2;
    setDisplayIndex(newIndex);
    // setFadeImage(false);
    // setFadeImage(true);
    if (newIndex === 0) {
      setShowBeforePicture(false);
      setShowAfterPicture(true);
    } else {
      setShowAfterPicture(false);
      setShowBeforePicture(true);
    }
  }

  function renderImageTag() {
    // if (showAfterPicture) {
    //   return (
    //     <SlideFade
    //       in={showAfterPicture}
    //       width={showAfterPicture ? '100%' : '0%'}
    //     >
    //       <img
    //         src={contentToShow.src}
    //         style={{ objectFit: 'cover', width: '100%' }}
    //       />
    //     </SlideFade>
    //   );
    // } else {
    //   return (
    //     <SlideFade
    //       in={showBeforePicture}
    //       width={showBeforePicture ? '100%' : '0%'}
    //     >
    //       <img
    //         src={contentToShow.src2}
    //         style={{ objectFit: 'cover', width: '100%' }}
    //       />
    //     </SlideFade>
    //   );
    // }
    // return (
    //   <>
    //     <SlideFade offsetX="50px" in={showAfterPicture}>
    //       <img
    //         src={contentToShow.src}
    //         style={{ objectFit: 'cover', width: '100%' }}
    //       />
    //     </SlideFade>
    //     <SlideFade offsetX="50px" in={showBeforePicture}>
    //       <img
    //         src={contentToShow.src2}
    //         style={{ objectFit: 'cover', width: '0%' }}
    //       />
    //     </SlideFade>
    //   </>
    // );
  }

  const renderImage = () => {
    if (contentToShow.src2) {
      return (
        <>
          <Box position="relative" maxW="1200px" ratio={5 / 3.3} margin="auto">
            <Flex>
              <AppButton
                height="100%"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,

                  padding: '5px',
                }}
                activeStyle={{ bg: 'rgba(100,100,100, 0.3)', transform: '' }}
                bg="rgba(220,220,220, 0.2)"
                hoverBg="rgba(100,100,100, 0.2)"
                hoverBorderWidth="0"
                onClick={() => showImage(-1, 'left')}
              >
                <FaAngleLeft style={{ fontSize: '1.5rem' }} />
              </AppButton>
              {/* {renderImageTag()} */}
              <img
                src={getCurrentImage()}
                style={{ objectFit: 'cover', width: '100%' }}
              />
              <AppButton
                height="100%"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,

                  padding: '5px',
                }}
                activeStyle={{ bg: 'rgba(100,100,100, 0.3)', transform: '' }}
                bg="rgba(220,220,220, 0.2)"
                hoverBg="rgba(100,100,100, 0.2)"
                hoverBorderWidth="0"
                onClick={() => showImage(1, 'right')}
              >
                <FaAngleRight style={{ fontSize: '1.5rem' }} />
              </AppButton>
            </Flex>
          </Box>
        </>
      );
    } else {
      return (
        <AspectRatio maxW="1200px" ratio={5 / 3.3} margin="auto">
          <img
            src={contentToShow.src}
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </AspectRatio>
      );
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.6 }}
        transition={{
          opacity: { duration: 0.6 },
        }}
      >
        {renderImage()}
      </motion.div>
    </AnimatePresence>
  );
});
