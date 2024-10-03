import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { Autoplay } from "swiper/modules";

const SaleSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={false} // Disable pagination dots
      navigation={false} // Disable navigation arrows
      modules={[Autoplay]} // Remove Pagination and Navigation from modules
      className="mySwiper"
    >
      <SwiperSlide
        className="bg-black text-white p-1 font-sans py-2"
        style={{ fontSize: "13px" }}
      >
        Sale Upto 50% Off
      </SwiperSlide>
      <SwiperSlide
        className="bg-black text-white p-1 font-sans py-2"
        style={{ fontSize: "13px" }}
      >
        Free Shipping Available Across Pakistan
      </SwiperSlide>
    </Swiper>
  );
};

export default SaleSlider;
