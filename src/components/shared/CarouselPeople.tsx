"use client";
import CardPeople from "./CardPeople";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { PeopleType } from "@/types/people";
import NextPrevBtns from "@/components/shared/NextPrevBtns";

interface CarouselItemsProps {
  items: PeopleType[];
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
        <div className="embla__container">
          {items.map((item, index) => (
            <div className="embla__slide" key={item.id}>
              <CardPeople item={item} />
            </div>
          ))}
        </div>
      </div>

      <NextPrevBtns next={scrollNext} prev={scrollPrev} />
    </div>
  );
}
