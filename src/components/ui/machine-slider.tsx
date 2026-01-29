import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { type CarouselApi } from "@/Components/ui/carousel";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

// import prod_1 from "../../../assets/images/sliders/machine_product_1.webp";
import prod_2 from "../../../assets/images/sliders/machine_product_2.webp";
// import prod_3 from "../../../assets/images/sliders/machine_product_3.webp";
// import prod_4 from "../../../assets/images/sliders/machine_product_4.webp";
// import prod_5 from "../../../assets/images/sliders/machine_product_5.webp";
import prod_6 from "../../../assets/images/sliders/machine_product_6.webp";
import prod_7 from "../../../assets/images/sliders/machine_product_7.webp";
import prod_8 from "../../../assets/images/sliders/machine_product_8.webp";
import prod_9 from "../../../assets/images/sliders/machine_product_9.webp";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import React from "react";

const TWEEN_FACTOR = 3.2;
const images = [prod_6, prod_7, prod_8, prod_9, prod_2];

export default function MachineSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const numberWithinRange = (
    number: number,
    min: number,
    max: number
  ): number => Math.min(Math.max(number, min), max);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!api) return;

    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();

    const styles = api.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [api, setTweenValues]);

  useEffect(() => {
    if (!api) return;

    onScroll();
    api.on("scroll", () => {
      flushSync(() => onScroll());
    });
    api.on("reInit", onScroll);
  }, [api, onScroll]);
  return (
    <div>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="-ml-4">
          {images.map((i, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/3"
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <img
                loading="lazy"
                src={i}
                alt={`Product ${index}`}
                width={440}
                height={440}
                className="aspect-[1/1] pointer-events-none select-none rounded-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="h-12 w-12 bg-jmso-dark-blue rounded-full flex items-center justify-center absolute left-4 lg:left-1/3 lg:-translate-x-1/2">
          <ArrowLeft size={24} weight="bold" className="text-white" />
        </CarouselPrevious>
        <CarouselNext className="h-12 w-12 bg-jmso-dark-blue rounded-full flex items-center justify-center absolute right-4 lg:right-1/3 lg:translate-x-1/2">
          <ArrowRight size={24} weight="bold" className="text-white" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}
