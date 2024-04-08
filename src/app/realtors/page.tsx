import { Metadata } from "next";
import RealtorsPage from "@/components/realtors/RealtorsPage";

async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Realtors Page",
    description: "This is the realtors page"
  }
}
export default async function Realtors() {

  return (
    <section>
      <RealtorsPage />
    </section>
  )
}
