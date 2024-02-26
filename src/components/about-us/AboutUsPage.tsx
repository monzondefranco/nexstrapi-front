import { twMerge } from "tailwind-merge"


type Props = {
  className?: string
  title?: string
  content?: string
}

export default function AboutUsPage({
  className,
  title,
  content,
}: Props) {

  return (
    <section className={twMerge(styles.container, className)}>
        <h1>{title}</h1>
        <p>{content}</p>
    </section>
  )
}

const styles = {
    container: 'flex flex-col items-center justify-between p-24',
}