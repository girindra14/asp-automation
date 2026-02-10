import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import { useRef, useState } from "react";
import slide_1 from "../../../assets/images/sliders/weld_1.webp";
// import slide_2 from "../../../assets/images/sliders/weld_2.webp";
import slide_3 from "../../../assets/images/sliders/weld_3.webp";
import slide_4 from "../../../assets/images/sliders/weld_4.webp";
import slide_5 from "../../../assets/images/sliders/weld_5.webp";
import slide_6 from "../../../assets/images/sliders/weld_6.webp";
import slide_7 from "../../../assets/images/sliders/weld_7.webp";
import slide_8 from "../../../assets/images/sliders/weld_8.webp";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export const ChartSlider = () => {
  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative">
      {/* <div className="w-full bg-gradient-to-r from-white/20 via-white to-white/20 h-full from-20% to-80% absolute z-10"></div> */}
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
        {/* <SwiperSlide>
          <img
            src={slide_2}
            alt="Slide"
            width={480}
            height={480}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md pointer-events-none select-none aspect-1 rounded-md"
          />
        </SwiperSlide> */}
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

export const BoardSlider = (props: any) => {
  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const t = props.content;
  return (
    <>
      <div className="container flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 pt-8 md:pt-12 lg:pt-20 mb-4 lg:mb-8">
        <h4 className="jmso-subheading text-jmso-dark-blue leading-none">
          {t.title}
        </h4>
        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            className="h-12 w-12 bg-white border border-gray-200 rounded-full flex items-center justify-center disabled:opacity-30"
          >
            <ArrowLeft
              size={24}
              weight="bold"
              className="text-jmso-dark-blue"
            />
          </button>
          <button
            ref={nextRef}
            className="h-12 w-12 bg-white border border-gray-200 rounded-full flex items-center justify-center disabled:opacity-30"
          >
            <ArrowRight
              size={24}
              weight="bold"
              className="text-jmso-dark-blue"
            />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <Swiper
          onInit={() => setInit(true)}
          slidesPerView={"auto"}
          loop={false}
          centeredSlides={false}
          speed={300}
          pagination={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Autoplay, Navigation]}
          wrapperClass=""
          className="max-w-7xl !px-4 relative lg:!overflow-visible"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
        >
          <SwiperSlide className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white">
            {props.matsumura}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
              {t.matsumura.category}
            </p>
            <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
              {props.matsumura_logo}
              {t.matsumura.title}
            </h5>
            <div className="space-y-2">
              <p
                className="text-jmso-dark-blue/60 text-xs"
                dangerouslySetInnerHTML={{ __html: t.matsumura.description }}
              ></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white">
            {props.kyokuto}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
              {t.kyokuto.category}
            </p>
            <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
              {props.kyokuto_logo}
              {t.kyokuto.title}
            </h5>
            <div className="space-y-2">
              <p
                className="text-jmso-dark-blue/60 text-xs"
                dangerouslySetInnerHTML={{ __html: t.kyokuto.description }}
              ></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white">
            {props.yuko}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
              {t.yuko.category}
            </p>
            <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
              {props.yuko_logo}
              {t.yuko.title}
            </h5>
            <div className="space-y-2">
              <p
                className="text-jmso-dark-blue/60 text-xs"
                dangerouslySetInnerHTML={{ __html: t.yuko.description }}
              ></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white">
            {props.nagai}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
              {t.nagai.category}
            </p>
            <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
              {props.nagai_logo}
              {t.nagai.title}
            </h5>
            <div className="space-y-2">
              <p
                className="text-jmso-dark-blue/60 text-xs"
                dangerouslySetInnerHTML={{ __html: t.nagai.description }}
              ></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4 lg:p-4 flex flex-col gap-4 border rounded-md !h-auto bg-white">
            {props.kke}
            <p className="p-2 mb-2 bg-jmso-light-blue text-jmso-dark-blue w-max text-xs rounded font-medium">
              {t.kke.category}
            </p>
            <h5 className="font-semibold text-lg text-jmso-dark-blue mb-2 inline-flex gap-1 items-center">
              {props.kke_logo}
              {t.kke.title}
            </h5>
            <div className="space-y-2">
              <p
                className="text-jmso-dark-blue/60 text-xs"
                dangerouslySetInnerHTML={{ __html: t.kke.description }}
              ></p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
