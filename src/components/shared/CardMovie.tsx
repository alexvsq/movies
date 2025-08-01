import { MovieType } from '@/types/movie'
import { cutLargeText } from '@/lib/cutLargeText'
import { Star } from 'lucide-react';


const baseUrl = process.env.BASE_URL

export default function CardMovie({ movie }: { movie: MovieType }) {

    const shortTitle = cutLargeText(movie.title, 18)

    return (
        <article className=' w-[200px] shrink-0'>
            <img src={baseUrl + "p/w500" + movie.poster_path} alt={movie.title} className='w-full h-[300px] object-cover rounded-lg' />
            <p className='text-lg font-medium'>{shortTitle}</p>
            <footer className='flex justify-between items-center text-sm'>
                <p className='text-text-secondary'>{movie.release_date}</p>
                <div className='text-[#FFC504] flex gap-1 items-center'>
                    <Star fill='currentColor' className='w-3' />
                    <p >{movie.vote_average} </p>
                </div>
            </footer>
        </article>
    )
}
