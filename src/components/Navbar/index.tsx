'use client'
import Tooltip from "@/components/general/Tooltip"
import Link from "next/link"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
}

export default function Navbar({
  className,
}: Props) {
  const [isTransparentNavBar, setIsTransparentNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparentNavbar(window.scrollY <= 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={twMerge(
      styles.container,
      isTransparentNavBar && styles.transparentNavBar,
      className
    )}>
      <ul className={styles.content}>
        {NavbarItems.map((item: NavbarType) => (
            <li key={item.id} className={styles.itemContainer}>
                {item.disabled ? 
                    <Tooltip 
                        content="comming soon" 
                        position="bottom"> 
                            <span className={styles.disabledItem}>{item.page}</span> 
                    </Tooltip> : 
                    <Link href={item.link}>
                        <span>{item.page}</span>
                    </Link> 
                }
            </li>
        ))}
        <li></li>
      </ul>
    </header>
  )
}

const styles = {
  container: 'sticky top-0 bg-black shadow-md z-30 h-navbar',
  transparentNavBar: 'bg-transparent !bg-gradient-to-t !from-transparent !to-black/90',
  content:
    'flex items-center justify-center space-x-4 p-6',
  itemContainer: 'cursor-pointer',
  disabledItem: 'text-gray-400',
}

const NavbarItems = [
    {
        id: 1,
        page: 'Homepage',
        link: '/',
        disabled: false,
    },
    {
        id: 2,
        page: 'About us',
        link: '/about-us',
        disabled: false,
    },
    {
        id: 3,
        page: 'Realtors',
        link: '/realtors',
        disabled: false,
    },
    {
        id: 4,
        page: 'Cities',
        link: '',
        disabled: true,
    },
]

type NavbarType = {
    id: number
    page: string
    link: string
    disabled?: boolean
}
