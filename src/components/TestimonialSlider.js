import React from 'react';

// import testimonials data
import { testimonialsData } from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../slider.css';

// import required modules
import { Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={false}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className='bg-white rounded-[20px] border border-accent xl:max-w-[500px] max-h-[300px] pt-[60px] px-[25px] xl:px-[70px] pb-[50px] flex items-start gap-x-[10px] shadow-xl'
          >
            {/* avatar image */}
            <img src={image} alt='' />
            {/* text */}
            <div>
              <div className='text-lg text-primary font-bold'>{name}</div>
              <div className='mb-4 font-semibold text-accent-primary'>
                {web}
              </div>
              <p className='max-w-[240px]'>{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
