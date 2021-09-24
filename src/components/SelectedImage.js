import { Hide, IconButton, Box, Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ReactCompareImage from 'react-compare-image';
import ImageGallery from 'react-image-gallery';
import styles from './SelectedImage.module.css';
import { FaArrowDown, FaArrowUp, FaSearch } from 'react-icons/fa';
import { render } from 'react-dom';
import { motion, AnimatedPresence, AnimatePresence } from 'framer-motion';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import { isBrowser } from 'react-device-detect';

const Checkmark = ({ isHovered }) => (
  <div
    style={
      isHovered
        ? {
            right: '10px',
            top: '10px',
            position: 'absolute',
            zIndex: '1',
            cursor: 'pointer',
          }
        : { display: 'none' }
    }
  >
    <IconButton
      aria-label="Instagram"
      icon={<FaSearch />}
      isRound="true"
      size="sm"
    />
  </div>
);

const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
};

const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected,
  padding,
  sliderPositionPercentage,
  showBefore,
  showImageComparision,
  onClick,
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [imageSrc, setImageSrc] = useState(photo.src);
  const [isHovered, setIsHovered] = useState(false);
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  //selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === 'column') {
    cont.position = 'absolute';
    cont.left = left;
    cont.top = top;
  }

  const handleOnClick = (e) => {
    setIsSelected(!isSelected);
  };

  const showBeforeImage = () => {
    setImageSrc('/images/ProjectCapulet/18-Room2.jpg');
    setIsHovered(true);
  };
  const showAfterImage = () => {
    setImageSrc(photo.src);
    setIsHovered(false);
  };

  const images = [
    {
      original: photo.src,
    },
    {
      original: photo.src,
    },
  ];

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  function renderContent() {
    if (photo.src2 && showImageComparision) {
      return (
        <ReactCompareImage
          leftImageLabel={index === 0 ? 'before' : ''}
          rightImageLabel={index === 0 ? 'after' : ''}
          leftImage={photo.src2}
          rightImage={photo.src}
          sliderPositionPercentage={index === 0 ? 0.3 : 0.0}
          rightImageCss={{ width: photo.src.width, height: photo.src.height }}
        />
      );
    } else if (photo.src) {
      return <img alt={photo.title} src={imageSrc} />;
    }
  }

  function renderImage(src, index, label) {
    if (index > 0) {
      return <ReactCompareSliderImage src={src} />;
    } else {
      return (
        <Box>
          <ReactCompareSliderImage src={src} />
          {label === 'before' && (
            <Text
              position="absolute"
              top="40%"
              left="5%"
              paddingX="20px"
              paddingY="10px"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
            >
              {label}
            </Text>
          )}
          {label === 'after' && (
            <Text
              position="absolute"
              top="40%"
              right="5%"
              paddingX="20px"
              paddingY="10px"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
            >
              {label}
            </Text>
          )}
        </Box>
      );
    }
  }

  return (
    <AnimatePresence>
      <motion.div>
        <div
          style={{
            padding: '1px',
            margin,
            height: photo.height,
            width: photo.width,
            ...cont,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => (onClick ? onClick(photo.src) : null)}
        >
          {/* <Checkmark isHovered={isHovered} /> */}
          {/* <img
        alt={photo.title}
        src={imageSrc}
        onClick={handleOnClick}
        onMouseEnter={showBeforeImage}
        onMouseLeave={showAfterImage}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}
        img:hover{
          
        }
        `}</style> */}
          {/* <div className={styles.container}>
        <div className={styles.imageBoxBefore}>
          <img src={photo.src} />
        </div>
        <div className={styles.imageBoxAfter}>
          <img src={photo.src2} />
        </div>
      </div> */}
          {/* {renderContent()} */}
          {photo.src2 && showImageComparision ? (
            <ReactCompareSlider
              itemOne={renderImage(photo.src2, index, 'before')}
              itemTwo={renderImage(photo.src, index, 'after')}
              position={index === 0 ? 30 : 0}
              onlyHandleDraggable={!isBrowser}
            />
          ) : (
            <img alt={photo.title} src={imageSrc} className="appGalleryImage" />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

{
  /* <ReactCompareImage
              // hover={true}
              leftImageLabel={index === 0 ? 'before' : ''}
              rightImageLabel={index === 0 ? 'after' : ''}
              leftImage={photo.src2}
              rightImage={photo.src}
              sliderPositionPercentage={index === 0 ? 0.3 : 0.0}
              rightImageCss={{
                width: photo.src.width,
                height: photo.src.height,
              }}
            /> */
}
export default SelectedImage;
