import { API_URL } from "@/app/config"
import api from "@/app/dataLayer/api"
import Image from 'next/image'
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
}

export default async function Header({
  className,
}: Props) {
  const { data: data }  = await api.global.getAll()
  const { bannerImage, ...attributes } = data?.attributes || {}

  const image = bannerImage?.data?.attributes.url
  const imageUrl = `${API_URL}${image}` || ''
  const alt = bannerImage?.data?.attributes.alternativeText

  return (
    <div className={twMerge(styles.header, className)}>
    <div className={styles.title}>{attributes.title}</div>
    {imageUrl && (
        <Image
          className=""
          src={imageUrl}
          alt={alt || ''}
          width={2500}
          height={1359}
        />
    )}
    </div>
  )
}

const styles = {
  header: '-mt-[4.375rem] z-10',
    title: 'absolute h-screen flex items-center justify-center w-full text-5xl font-bold'
}
