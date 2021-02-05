import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { AppButton } from '../AppButton';

//https://stackoverflow.com/questions/37949981/call-child-method-from-parent
export const BeforeAndAfterSlide = forwardRef((props, ref) => {
  const { contentToShow } = props;
  const [displayIndex, setDisplayIndex] = useState(0);

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
  }

  function getClassName(index) {
    let classNames = ['bas-img'];

    if (index === displayIndex) {
      classNames.push('bas-img-show');
      if (index === 0) {
        classNames.push('bas-img-before-show');
      } else {
        classNames.push('bas-img-after-show');
      }
    } else {
      classNames.push('bas-img-hide');
      if (index === 0) {
        classNames.push('bas-img-before-hide');
      } else {
        classNames.push('bas-img-after-hide');
      }
    }
    return classNames.join(' ');
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
                  zIndex: '1',
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

              <AspectRatio
                ratio={5 / 3.3}
                width="100%"
                className={getClassName(0)}
              >
                <img
                  src={contentToShow.src}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
              </AspectRatio>
              <AspectRatio
                ratio={5 / 3.3}
                width="100%"
                className={getClassName(1)}
              >
                <img
                  src={contentToShow.src2}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
              </AspectRatio>

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
    <>
      <div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.6 }}
        transition={{
          opacity: { duration: 0.6 },
        }}
      >
        {renderImage()}
      </div>
    </>
  );
});
