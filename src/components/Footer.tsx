import api from '@/app/dataLayer/api'
import { twMerge } from 'tailwind-merge'

interface FooterProps {
  className?: string
}

async function getData() {
  const { data: globalData } = await api.global.getAll()

  const { ...attributes } = globalData?.attributes || {}

  return {
    ...attributes,
  }
}

export default async function Footer({ className }: FooterProps) {
  const { footerCopyright } = await getData()

  return (
    <>
      <footer className={twMerge(styles.container, className)}>
          {footerCopyright && (
            <p className={styles.copyright}>{footerCopyright}</p>
          )}
      </footer>
    </>
  )
}

const styles = {
  container: 'h-[10rem] flex items-center justify-center text-base',
  copyright: '',
}

