import { getRealtors } from '@/app/dataLayer/getRealtors';

async function getData() {
    const realtors = await getRealtors()
  
    return realtors || {}
  }

export default async function RealtorsPage() {
    const realtors = await getData()

return (
    <div className={styles.container}>
        {realtors.map((realtor) => (
            <div className={styles.card} key={realtor.id}>
            <div className="p-5">
                <h1 className={styles.name}>{`${realtor.attributes.firstName} ${realtor.attributes.lastName}`}</h1>
                <p className={styles.bio}>{realtor.attributes.bio}</p>
            </div>
        </div>
        ))
        }
    </div>
  );
}

const styles = {
    container: 'flex min-h-screen flex-col items-center justify-between p-24',
    card: 'max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',
    name: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white',
    bio: 'mb-3 font-normal text-gray-700 dark:text-gray-400',
  }