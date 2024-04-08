
import { getRealtors } from "@/app/dataLayer/getRealtors"
import RealtorsCard from "./RealtorsCard"

export default async function RealtorsPage() {
    const realtors = await getRealtors()

    return (
        <div className={styles.container}>
            {realtors?.map((realtor, index) => (
                <RealtorsCard key={index} firstName={realtor.attributes.firstName} bio={realtor.attributes.bio} />
            ))}
        </div>
    )
}

const styles = {
    container: 'flex items-center justify-center h-screen gap-4',
}
