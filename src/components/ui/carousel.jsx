import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({
  children,
  className,
  opts = {},
  showArrows = true,
  showPagination = true,
  autoplay = false,
  ...props
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const defaultOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  const swiperOptions = {
    ...defaultOptions,
    ...opts,
    modules: [Navigation, Pagination, Autoplay],
    navigation: showArrows ? {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    } : false,
    pagination: showPagination ? {
      clickable: true,
      el: '.swiper-pagination',
    } : false,
    autoplay: autoplay ? {
      delay: 3000,
      disableOnInteraction: false,
    } : false,
    onBeforeInit: (swiper) => {
      if (showArrows) {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    },
  };

  return (
    <div className={`relative ${className || ''}`} {...props}>
      <Swiper
        {...swiperOptions}
        onSwiper={setSwiperInstance}
        className="w-full"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index} className="h-full">
            {child}
          </SwiperSlide>
        ))}
        {showPagination && <div className="swiper-pagination mt-4"></div>}
      </Swiper>

      {showArrows && (
        <>
          <button
            ref={navigationPrevRef}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            ref={navigationNextRef}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
};

export { Carousel };