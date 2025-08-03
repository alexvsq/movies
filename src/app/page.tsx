import HeroMovie from '@/components/home/heroMovie/Hero'
import Separator from '@/components/ui/Separator'
import Movies from '@/components/home/movies/Movies'
import Series from '@/components/home/series/Series'

export default function Home() {
  return (
    <div className="">
      <HeroMovie />
      <div className='h-[200px] w-full' />

      <Separator />

      <Movies />

      <Separator />

      <Series />

    </div>
  );
}
