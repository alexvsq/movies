"use client";
import CardTv from "@/components/shared/CardTv";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { TvType } from "@/types/series";
import NextPrevBtns from "@/components/shared/NextPrevBtns";

interface CarouselItemsProps {
  items: TvType[];
}

export default function CarouselItems({ items }: CarouselItemsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container py-2">
          {items.map((item, index) => (
            <div className="embla__slide mx-4" key={item.id}>
              <CardTv item={item} />
            </div>
          ))}
        </div>
      </div>
      <NextPrevBtns next={scrollNext} prev={scrollPrev} />
    </div>
  );
}
