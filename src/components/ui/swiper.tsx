import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import { useRef, useState } from "react";
import slide_1 from "../../assets/images/sliders/slider_1.webp";
import slide_2 from "../../assets/images/sliders/slider_2.webp";
import slide_3 from "../../assets/images/sliders/slider_3.webp";
import slide_4 from "../../assets/images/sliders/slider_4.webp";
import slide_5 from "../../assets/images/sliders/slider_5.webp";
import slide_6 from "../../assets/images/sliders/slider_6.webp";
import slide_7 from "../../assets/images/sliders/slider_7.webp";
import slide_8 from "../../assets/images/sliders/slider_8.webp";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const WhatWeDoSlider = () => {
  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative">
      <Swiper
        onInit={() => setInit(true)}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={false}
        speed={6000}
        noSwiping
        autoplay={{
          delay: 1,
        }}
        pagination={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Autoplay, Navigation]}
        effect="relative"
        wrapperClass="!ease-linear"
        className="relative"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
            speed: 3000,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 24,
            speed: 4500,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
            speed: 6000,
          },
        }}
      >
        <SwiperSlide>
          <img
            src={slide_1.src}
            alt="Slide"
            width={480}
            height={480}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md pointer-events-none select-none aspect-1 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_2.src}
            alt="Slide"
            width={480}
            height={480}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md pointer-events-none select-none aspect-1 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_3.src}
            alt="Slide"
            width={480}
            height={480}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md pointer-events-none select-none aspect-1 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_4.src}
            alt="Slide"
            width={480}
            height={480}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md pointer-events-none select-none aspect-1 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_5.src}
            alt="Slide"
            width={480}
            height={480}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md pointer-events-none select-none aspect-1 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_6.src}
            alt="Slide"
            width={480}
            height={480}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md pointer-events-none select-none aspect-1 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_7.src}
            alt="Slide"
            width={480}
            height={480}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md pointer-events-none select-none aspect-1 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_8.src}
            alt="Slide"
            width={480}
            height={480}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md pointer-events-none select-none aspect-1 rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};