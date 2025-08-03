'use client'
import CardTv from '@/components/shared/CardTv'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { tvType } from '@/types/series'

interface CarouselItemsProps {
    items: tvType[]
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
                <div className="embla__container py-2">
                    {
                        items.map((item, index) =>
                            <div className="embla__slide mx-4" key={item.id}>
                                <CardTv item={item} />
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
