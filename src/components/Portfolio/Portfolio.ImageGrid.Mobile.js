import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';

function PortfolioImageGridMobile({
  showBefore,
  onClick,
  photos,
  showImageComparision,
  maxW,
}) {
  function renderImages() {
    const display = photos.map((photo, index) => {
      return (
        <Flex
          key={index}
          alignSelf={
            index % 3 === 2
              ? 'flex-end'
              : index % 3 === 0
              ? 'flex-start'
              : 'center'
          }
        >
          <AspectRatio
            width={'33vw'}
            ratio={1}
            marginY="1px"
            marginX={index % 3 === 1 ? '1px' : 0}
          >
            <img
              src={photo.src}
              key={index}
              style={{
                objectFit: 'cover',
              }}
              onClick={() => onClick(index)}
            />
          </AspectRatio>
        </Flex>
      );
    });
    return display;
  }

  return (
    <div
      style={{
        minHeight: '33vh',
        margin: 'auto',
      }}
    >
      <Flex
        flexWrap="wrap"
        marginX="auto"
        alignItems="space-between"
        paddingBottom="10px"
      >
        {renderImages()}
      </Flex>
    </div>
  );
}

export default PortfolioImageGridMobile;
