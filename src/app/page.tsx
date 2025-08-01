import HeroMovie from '@/components/home/heroMovie/Hero'
import Separator from '@/components/ui/Separator'
import Movies from '@/components/home/movies/Movies'

export default function Home() {
  return (
    <div className="">
      <HeroMovie />
      <div className='h-[200px] w-full' />

      <Separator />

      <Movies />

      <Separator />

      <Movies />

    </div>
  );
}
