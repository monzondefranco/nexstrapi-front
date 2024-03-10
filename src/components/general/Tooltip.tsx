import { twMerge } from 'tailwind-merge'

export type Props = {
  className?: string
  disabled?: boolean
  content: React.ReactNode | string
  position?: 'top' | 'bottom'
  children: React.ReactNode
}

export default function Tooltip({
  className,
  disabled,
  content,
  position = 'top',
  children,
}: Props) {
  if (disabled) return <div className={className}>{children}</div>

  return (
    <div className={twMerge(styles.container, className)}>
      <div
        className={twMerge(
          styles.content,
          styles.arrow,
          styles.position[position].content,
          styles.position[position].arrow,
        )}
      >
        {content}
      </div>
      {children}
    </div>
  )
}

const styles = {
  container: 'relative [&:hover>div:first-child]:block',
  content:
    'hidden shadow-md whitespace-nowrap absolute z-10 bg-neutral-800 text-white-900 text-sm rounded px-3 py-2',
  arrow: 'after:absolute after:border-8 after:border-transparent',
  position: {
    top: {
      content: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
      arrow:
        'after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-neutral-800',
    },
    bottom: {
      content: 'top-full left-1/2 -translate-x-1/2 mt-3',
      arrow:
        'after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-b-neutral-800',
    },
  },
}
