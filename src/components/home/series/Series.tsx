import { Tv } from 'lucide-react';
import DATA_FAKE from '@/data/DATA_TV.json'
import CarouselTv from '@/components/shared/CarouselTv'

export default function Series() {


    return (
        <section className=''>

            <header className='flex justify-between py-2 container-dynamic'>
                <div className='flex items-center gap-2'>
                    <Tv />
                    <h3 className='text-xl'>Series</h3>
                </div>

                <a href="/">
                    <button className='rounded-lg border border-white/10 px-4 py-2 hover:bg-white/20 transition cursor-pointer'>
                        <p className='text-sm'>View More</p>
                    </button>
                </a>
            </header>

            <CarouselTv items={DATA_FAKE.results} />

        </section>
    )
}
