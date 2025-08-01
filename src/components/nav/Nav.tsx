import Logo from '@/components/shared/Logo'
import { Search } from 'lucide-react';

export default function Nav() {

  const navButtons = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Movies',
      href: '/movies'
    },
    {
      name: 'Series',
      href: '/series'
    }
  ]

  return (
    <div className='w-full flex justify-center fixed z-10 nav-scroll-bg'>
      <nav className='container-dynamic py-4 flex items-center justify-between w-full'>
        <Logo />

        <aside className='flex items-center gap-8'>
          <ul className='flex items-center gap-16'>
            {
              navButtons.map((navButton, index) => {
                return (
                  <a
                    key={index}
                    href={navButton.href}
                    className=''>
                    <li>{navButton.name}</li>
                  </a>
                )
              })
            }
          </ul>
          <div className='w-[1px] h-5 bg-white' />
          <Search />
        </aside>
      </nav>
    </div>
  )
}
