import Homepage from "@/components/homepage/HomePage"
import { Metadata } from "next"

async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Homepage",
    description: "This is the homepage"
  }
}

export default async function Page() {
  return (
    <div>
      <Homepage />
    </div>
  )
}
