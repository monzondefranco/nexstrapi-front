'use client'

import Tooltip from "@/components/general/Tooltip"
import Link from "next/link"

type Props = {
  className?: string
}

export default function Navbar({
  className,
}: Props) {

  return (
    <div className={className}>
      <ul className={styles.menu}>
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
    </div>
  )
}

const styles = {
    menu: 'flex items-center space-x-4 p-6',
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
        link: '',
        disabled: true,
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