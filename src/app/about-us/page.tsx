import AboutUsPage from "@/components/about-us/AboutUsPage";
import api from "../dataLayer/api";


async function getData() {
  const { data } = await api.aboutUsPage.get({
    query: {
      populate: [
        'seo',
        'seo.metaImage',
        'seo.metaSocial',
        'seo.metaSocial.image',
        'highlights',
      ],
    },
  })

  return data?.attributes || {}
}

export default async function AboutPage() {
  const { title, content } = await getData()

  return (
    <section>
      <AboutUsPage title={title} content={content} />
    </section>
  )
}