import Head from 'next/head'
import SectionTitle from '../components/sectionTitle'
import Signup from '../components/signUp'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sign up | embed.so</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionTitle title="Easily create, customize and embed a video">
      You will get 1 embed video for free. Try it out 👇 </SectionTitle>
      <Signup/>
    </>
  )
}