import { getAllPostsMeta } from "@/lib/mdx"
import { About } from "@/ui/About"
import { Contact } from "@/ui/Contact"
import { Layout } from "@/ui/Layout"
import { MediaPreview } from "@/ui/MediaPreview"
import { PostPreview } from "@/ui/PostPreview"
import { Projects } from "@/ui/Projects"
import { Skills } from "@/ui/Skills"
import { InferGetStaticPropsType } from "next"
import React from "react"

export const getStaticProps = async () => {
  const posts = getAllPostsMeta("post")
  return { props: { posts } }
}

const news = [
  {
    title: "The App Store turns 10",
    image: "/blog/news1.gif",
    url: "https://www.apple.com/newsroom/2018/07/app-store-turns-10/",
    text: "When Apple introduced the App Store on July 10, 2008 with 500 apps, it ignited a cultural, social and economic phenomenon that changed how people work, play, meet, travel and so much more. Over the past decade, the App Store has created a safe place for users of all ages to get the very best apps and a vibrant app economy for developers of all sizes, from all over the world, to thrive. Today, customers in 155 countries are visiting the App Store more often, staying longer and downloading and using more apps than ever before. ",
  },
  {
    title: "Indonesian, Malaysian students earn WWDC trip for their coding efforts",
    image: "/blog/news2.jpg",
    url: "https://www.cnet.com/news/indonesian-malaysian-students-earn-wwdc-trip-for-their-coding-efforts/",
    text: "He's the first Indonesian student in six years to win a scholarship from Apple for a trip to its WWDC event in San Jose, California. He did so by creating a neural network class in Swift Playgrounds, Apple's app that teaches you more than the basic programming techniques, all without having ever coded his own app before.",
  },
  {
    title: "Mahasiswa BINUS UNIVERSITY Selfie Bareng Boss Apple di WWDC 2018 ",
    image: "/blog/news.jpg",
    url: " https://edukasi.kompas.com/read/2018/05/14/21564091/mahasiswa-binus-jadi-wakil-asia-pasifik-di-wwdc-2018",
    text: "Salah satu prestasi yang membanggakan datang dari Andika Leonardo, merupakan mahasiswa dari BINUS UNIVERSITY jurusan School Of Computer Science yang meraih beasiswa WWDC 2018. Beasiswa WWDC18 adalah penghargaan kepada siswa berbakat yang merupakan anggota organisasi STEM yang memberi kesempatan untuk menghadiri konferensi tahun ini.",

  }
 ]

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="space-y-14 lg:space-y-24">
        <div id="about">
          <About />
        </div>

        <div id="skill">
          <Skills />
        </div>

        <div id="reel">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">📸 Featured on</h2>
            <h4 className="mt-2 text-gray-500">
              Hey look ma i made it!
            </h4>
            <div className="sm:grid sm:grid-cols-2 sm:gap-10">
              {news.map((news) => (
                <div key={news.url} className="mt-10">
                  <MediaPreview
                    type="post"
                    url={news.url}
                    title={news.title}
                    text={news.text}
                    image={news.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
           
        <div id="contact">
          <Contact />
        </div>
      </div>
    </Layout>
  )
}
