import { Clapperboard } from 'lucide-react';
import DATA_FAKE from '@/data/DATA_FAKE.json'
import CardMovie from '@/components/shared/CardMovie'

export default function Movies() {
    return (
        <section className=''>

            <header className='flex justify-between py-2 container-dynamic'>
                <div className='flex items-center gap-2'>
                    <Clapperboard />
                    <h3 className='text-xl'>Movies</h3>
                </div>

                <a href="/">
                    <button className='rounded-lg border border-white/10 px-4 py-2 hover:bg-white/20 transition cursor-pointer'>
                        <p className='text-sm'>View More</p>
                    </button>
                </a>
            </header>

            <div className='w-full'>
                <div className=' flex gap-5 overflow-x-scroll py-2'>
                    {
                        DATA_FAKE.results.map((item, index) =>
                            <CardMovie key={index} movie={item} />
                        )
                    }
                </div>
            </div>

        </section>
    )
}
