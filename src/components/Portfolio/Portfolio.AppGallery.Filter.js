import { Button, Flex, IconButton } from '@chakra-ui/react';
import { TAGS } from './photos2';
import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { AppButton } from '../AppButton';
import { isBrowser, isMobile, isTablet } from 'react-device-detect';

/*************************************
 *
 * FILTER BUTTON
 *
 *************************************/
const FilterButton = forwardRef((props, ref) => {
  const { index, tag, onClickCallBack } = props;
  const [selected, setSelected] = useState(false);
  const colors = ['teal', 'orange', 'blue'];
  const bRef = useRef(null);

  useEffect(() => {
    tag === 'All' ? setSelected(true) : null;
  }, []);

  useImperativeHandle(ref, () => ({
    unselect() {
      setSelected(false);
    },
    select() {
      setSelected(true);
    },
  }));

  const handleOnclick = () => {
    setSelected(true);
    onClickCallBack(index, tag, bRef.current.getBoundingClientRect());
  };

  const getColorScheme = () => {
    var colorIndex = index % colors.length;
    return colors[colorIndex];
  };

  return (
    <Button
      setHover={isBrowser ? true : false}
      ref={bRef}
      minW={isBrowser ? '160px' : null}
      marginX={isBrowser ? '4px' : '3px'}
      variant={selected ? 'solid' : 'appOutline'}
      colorScheme={selected ? (isBrowser ? 'myblack' : 'teal') : 'gray'}
      fontWeight={selected ? '700' : '500'}
      onClick={handleOnclick}
    >
      {tag}
    </Button>
  );
});

/*************************************
 *
 * FILTER SCROLLBAR
 *
 *************************************/
const SCROLL_VALUE = 300;

export const PortfolioAppGalleryFilter = ({ setImages, photos, setPhotos }) => {
  const ref = useRef(null);
  const buttonRefs = useRef([]);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, TAGS.length);
  }, [TAGS]);

  const renderButtons = () => {
    let buttons = TAGS.map((tag, index) => {
      return (
        <FilterButton
          key={index}
          ref={(el) => (buttonRefs.current[index] = el)}
          tag={tag}
          index={index}
          onClickCallBack={onClickCallBack}
        />
      );
    });
    return buttons;
  };

  const onClickCallBack = (index, tag, buttonRect) => {
    if (index === activeIndex) {
      return;
    }
    let barRect = ref.current.getBoundingClientRect();
    let buttonPartVisible = barRect.x + barRect.width - buttonRect.x;
    if (buttonPartVisible < buttonRect.width) {
      handleScroll('right');
    } else if (buttonRect.x <= barRect.x) {
      handleScroll('left');
    }

    buttonRefs.current[index].select();
    buttonRefs.current[activeIndex].unselect();
    setActiveIndex(index);

    var newPhotos = [];
    if (tag === 'All') {
      newPhotos = photos;
    } else {
      for (var i in photos) {
        if (photos[i].displayTag === tag) {
          newPhotos.push(photos[i]);
        }
      }
    }
    setPhotos(newPhotos);

    let newImages = newPhotos.map((photo) => {
      return photo.src;
    });
    setImages(newImages);
  };

  const handleScroll = (direction) => {
    if (direction === 'left') {
      ref ? (ref.current.scrollLeft -= SCROLL_VALUE) : null;
      ref && ref.current.scrollLeft === 0
        ? setShowLeft(false)
        : setShowLeft(true);
      setShowRight(true);
    } else {
      if (ref) {
        ref.current.scrollLeft += SCROLL_VALUE;
        var maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;
        if (ref.current.scrollLeft === maxScrollLeft) {
          setShowRight(false);
        } else {
          setShowRight(true);
        }
      }
      setShowLeft(true);
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      maxW="1500px"
      marginX={isBrowser ? 'auto' : null}
      marginLeft={isBrowser ? 'auto' : '0.8rem'}
      marginBottom="2rem"
    >
      {showLeft && isBrowser && (
        <div>
          <IconButton
            variant="ghost"
            onClick={() => handleScroll('left')}
            icon={<FaAngleLeft />}
          ></IconButton>
        </div>
      )}

      <Flex marginRight={isBrowser ? 10 : '0.5rem'} overflowX="auto" ref={ref}>
        {renderButtons()}
      </Flex>
      {showRight && isBrowser && (
        <div>
          <IconButton
            variant="ghost"
            onClick={() => handleScroll('right')}
            icon={<FaAngleRight />}
          ></IconButton>
        </div>
      )}
    </Flex>
  );
};
