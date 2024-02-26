import AboutUsPage from "@/components/about-us/AboutUsPage"
import api from "../dataLayer/api"
import { Metadata } from "next";

async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us Page",
    description: "This is the about us page"
  }
}


async function getData() {
  const { data } = await api.aboutUsPage.get();
  return data?.attributes || {};
}

export default async function AboutPage() {
  const { title, content } = await getData()

  return (
    <section>
      <AboutUsPage title={title} content={content} />
    </section>
  )
}