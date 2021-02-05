import { Box } from '@chakra-ui/react';
import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import SelectedImage from './SelectedImage';
import { motion } from 'framer-motion';

function GridImageGallery({
  showBefore,
  onClick,
  photos,
  showImageComparision,
  maxW,
}) {
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll ? true : false}
        key={key}
        margin={'2px'}
        padding={'2px'}
        index={index}
        photo={photo}
        left={left}
        top={top}
        showBefore={showBefore}
        showImageComparision={showImageComparision}
        onClick={onClick}
      />
    ),
    [selectAll]
  );

  return (
    <motion.div>
      <Box maxW={maxW || '1500px'} marginX="auto">
        <Gallery photos={photos} renderImage={imageRenderer} />
      </Box>
    </motion.div>
  );
}

export default GridImageGallery;
