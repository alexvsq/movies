'use client'
import CardItem from '@/components/shared/CardMovie'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { MovieType } from '@/types/movie'

interface CarouselItemsProps {
    items: MovieType[]
}

export default function CarouselItems({ items }: CarouselItemsProps) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 3
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {
                        items.map((item, index) =>
                            <div className="embla__slide" key={item.id}>
                                <CardItem item={item} />
                            </div>
                        )
                    }
                </div>
            </div>

            <button className="embla__prev" onClick={scrollPrev}>
                Prev
            </button>
            <button className="embla__next" onClick={scrollNext}>
                Next
            </button>
        </>
    )
}
