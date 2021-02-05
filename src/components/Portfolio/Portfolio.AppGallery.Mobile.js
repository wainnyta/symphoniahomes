import { AspectRatio, Box, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Swiper, SwiperSlide, pagination } from 'swiper/react';
import { photos } from './photos';

const MobilePhotoDisplay = ({ photo }) => {
  const renderContent = () => {
    if (photo.src2) {
      return (
        <AspectRatio ratio={5 / 3.3}>
          <Swiper
            pagination={{ dynamicBullets: true, el: '.swiper-pagination' }}
          >
            <SwiperSlide>
              <>
                <img
                  src={photo.src}
                  style={{ objectFit: 'cover', width: '100%' }}
                />
              </>
            </SwiperSlide>
            <SwiperSlide>
              <>
                <img
                  src={photo.src2}
                  style={{ objectFit: 'cover', width: '100%' }}
                />
              </>
            </SwiperSlide>
          </Swiper>
        </AspectRatio>
      );
    } else {
      return (
        <AspectRatio ratio={5 / 3.3}>
          <img src={photo.src} />
        </AspectRatio>
      );
    }
  };
  return (
    <Box my="1rem" py={'1rem'}>
      {renderContent()}
    </Box>
  );
};

export const PortfolioAppGalleryMobile = () => {
  const renderPhotos = () => {
    const display = photos.map((photo, index) => {
      return <MobilePhotoDisplay photo={photo} key={index} />;
    });
    return display;
  };

  return (
    <div>
      <>{renderPhotos()}</>
    </div>
  );
};
