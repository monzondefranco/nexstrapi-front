import { GetRealtorsTypes } from "@/app/dataLayer/getRealtors"

type RealtorsCardProps = {
  className?: string
  firstName?: string
  bio?: string
}

export default async function RealtorsCard({firstName, bio}: RealtorsCardProps) {
    return (
        <div className={styles.container}>
            <div className="p-5">
                <h1 className={styles.name}>{firstName}</h1>
                <p className={styles.bio}>{bio}</p>
            </div>
        </div>
    )
}

const styles = {
    container: 'max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',
    name: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white',
    bio: 'mb-3 font-normal text-gray-700 dark:text-gray-400',
}
