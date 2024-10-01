import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import { Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://dazzlebysarah.com/cdn/shop/files/Banner-Prehype-1080x400-Launch_1944x.jpg?v=1727267601" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dazzlebysarah.com/cdn/shop/files/banner-1080-400-sale_2_1944x.jpg?v=1719474159" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dazzlebysarah.com/cdn/shop/files/Banner-Tara-for-dazzle-1080x400_1944x.jpg?v=1724830350" alt="" /></SwiperSlide>
      </Swiper>
</>
  );
}
export default Carousel
