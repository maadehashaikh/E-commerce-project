import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ReviewsSlider.css";
import { Autoplay } from "swiper/modules";

const ReviewsSlider = () => {
  return (
    <>
      <div className="flex justify-center items-center h-1/2">
        <h2 className="bg-transparent text-black rounded px-4 py-2 font-sans font-bold mb-3">
          Let's Customer Speak For Us
        </h2>
      </div>

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
          className="bg-black text-white p-4 font-sans py-2 w-1/2"
          style={{ fontSize: "13px" }}
        >
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-white">
            <img
              src="https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg"
              alt=""
              className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-lg"
            />
          </div>
          <div className="w-full md:w-[70%] lg:w-[60%] pl-4 md:pl-6 lg:pl-9 font-sans text-sm md:text-base lg:text-lg text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            veritatis eius hic, explicabo quo distinctio accusamus odit et, rem
            velit, facilis sapiente earum dolor sequi consequatur ratione labore
            repellendus. Modi quam exercitationem aspernatur esse commodi et est
            voluptatum expedita ut culpa neque, temporibus similique quis autem
            quas, debitis sed omnis.
            <br />
            <p className="text-center w-1/3 ml-60 bg-yellow-400 px-4 py-2 rounded">
              Salman Akmal
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-black text-white p-4 font-sans py-2"
          style={{ fontSize: "13px" }}
        >
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-white">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.TJuATx9KS2bztejg-3Gj7AHaLH&pid=Api&P=0&h=220"
              alt=""
              className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-lg"
            />
          </div>
          <div className="w-full md:w-[70%] lg:w-[60%] pl-4 md:pl-6 lg:pl-9 font-sans text-sm md:text-base lg:text-lg text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            veritatis eius hic, explicabo quo distinctio accusamus odit et, rem
            velit, facilis sapiente earum dolor sequi consequatur ratione labore
            repellendus. Modi quam exercitationem aspernatur esse commodi et est
            voluptatum expedita ut culpa neque, temporibus similique quis autem
            quas, debitis sed omnis.
            <br />
            <p className="text-center w-1/3 ml-60 bg-yellow-400 px-4 py-2 rounded">
              Wajeha Nawaz
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-black text-white p-4 font-sans py-2"
          style={{ fontSize: "13px" }}
        >
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48">
            <img
              src="https://media.istockphoto.com/photos/portrait-of-a-beautifull-smiling-man-picture-id500060262?k=6&m=500060262&s=612x612&w=0&h=dqPFs-C5bejj3tCI_pZFctS5xOHUtipA1FHPUU6aAwU="
              alt=""
              className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-lg border-white"
            />
          </div>
          <div className="w-full md:w-[70%] lg:w-[60%] pl-4 md:pl-6 lg:pl-9 font-sans text-sm md:text-base lg:text-lg text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            veritatis eius hic, explicabo quo distinctio accusamus odit et, rem
            velit, facilis sapiente earum dolor sequi consequatur ratione labore
            repellendus. Modi quam exercitationem aspernatur esse commodi et est
            voluptatum expedita ut culpa neque, temporibus similique quis autem
            quas, debitis sed omnis.
            <br />
            <p className="text-center w-1/3 ml-60 bg-yellow-400 px-4 py-2 rounded">
              Ali Nawaz
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ReviewsSlider;
