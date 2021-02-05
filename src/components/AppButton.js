import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

export const AppButton = ({
  children,
  leftIcon,
  hoverBorderWidth,
  hoverBorderColor,
  hoverBorderRadius,
  hoverColor,
  hoverBg,
  activeStyle,
  bg,
  color,
  fontSize,
  fontWeight,
  onClick,
  ...otherProps
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(bg || '#4D596D');
  const [textColor, setTextColor] = useState(color || 'white');

  var hoverStyle = {
    borderWidth: hoverBorderWidth || '1px',
    borderColor: hoverBorderWidth || '#2A3230',
    borderRadius: hoverBorderRadius || '0.25srem',
    fontWeight: 'semibold',
    color: hoverColor || 'white',
    bg: hoverBg || '#2A3230',
  };

  var _activeStyle = {
    ...hoverStyle,
    ...activeStyle,
  };

  const handleOnClick = () => {
    if (onClick) {
      setIsLoading(true);
      onClick();
      setIsLoading(false);
    }
  };

  return (
    <Box
      as="button"
      textAlign="center"
      height="50px"
      lineHeight="1.2"
      px="1rem"
      fontSize={fontSize || '1rem'}
      fontWeight={fontWeight || 500}
      color={textColor}
      bg={backgroundColor}
      _hover={hoverStyle}
      borderRadius="0"
      _active={_activeStyle}
      onClick={() => handleOnClick()}
      {...otherProps}
    >
      <Flex
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        width="100%"
      >
        {leftIcon}
        {children}
      </Flex>
    </Box>
  );
};
