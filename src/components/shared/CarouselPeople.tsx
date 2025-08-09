"use client";
import CardPeople from "./CardPeople";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { PeopleType } from "@/types/people";

interface CarouselItemsProps {
  items: PeopleType[];
}

export default function CarouselItems({ items }: CarouselItemsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 3,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item, index) => (
            <div className="embla__slide" key={item.id}>
              <CardPeople item={item} />
            </div>
          ))}
        </div>
      </div>

      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </>
  );
}
