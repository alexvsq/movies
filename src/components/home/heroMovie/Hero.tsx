import { Play, Star } from 'lucide-react';
import DATA_MOVIE from '@/data/DATA_MOVIES.json'
import { cutLargeText } from '@/lib/cutLargeText'

const baseUrl = process.env.BASE_URL
const MOVIE = DATA_MOVIE.results[2]

export default function HeroMovie() {

  const shortDescription = cutLargeText(MOVIE.overview, 170)

  return (
    <section
      className='h-[780px] w-full relative'
    >
      <img
        src={baseUrl + "p/original" + MOVIE.backdrop_path}
        alt="movie"
        className='h-full w-full object-cover object-center absolute -z-10 image-gradient-transparent '
      />

      <div className='container-dynamic h-full flex flex-col justify-center '>

        <header className='max-w-[470px] flex flex-col gap-3'>
          <h2 className=' text-5xl font-semibold'>{MOVIE.title}</h2>
          <div className='flex gap-2 items-center text-sm'>
            <div className='bg-primary px-2 rounded'> <Star fill="black" stroke='black' className='w-3' /></div>
            <p>{MOVIE.vote_average} ({MOVIE.vote_count}) </p>
            <p>•</p>
            <p className='text-text-secondary'>{MOVIE.release_date}</p>
          </div>
          <p>{shortDescription}</p>
        </header>

        <footer className='flex my-5 gap-4'>

          <a href="/" className='flex items-center gap-2 border border-white/20 text-black py-2 px-4 rounded-lg min-w-40 justify-center hover:bg-white/20 hover:-translate-y-1 transition'>
            <p className='font-medium text-white'>Details</p>

          </a>

          <a href="/" className='flex items-center gap-2 bg-primary text-black py-2 px-4 rounded-lg justify-center min-w-40 hover:-translate-y-1 transition'>
            <Play fill='currentColor' />
            <p className='font-medium'>Watch Trailer</p>
          </a>

        </footer>



        <article className='w-[1300px]  absolute bottom-0 translate-y-1/2 '>

          <h3 className=' pb-4 font-medium'>Tendencias</h3>

          <div className='w-[1300px] h-80 bg-[#C4C4C4]/10 backdrop-blur-xs rounded-3xl border border-white/20'>

            <div className='flex justify-between w-full h-full p-4'>
              {
                DATA_MOVIE.results.slice(0, 6).map((movie, index) =>
                  <article key={index}
                    className={`rounded-lg overflow-hidden cursor-pointer group  ${index == 2 ? 'scale-125 border-4 border-white/20' : ''}`}>
                    <img
                      src={baseUrl + "p/w500" + movie.poster_path}
                      alt={movie.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition' />
                  </article>
                )
              }
            </div>

          </div>

        </article>


      </div>

    </section>
  )
}
