import Head from 'next/head'
import Image from 'next/image'
import SectionTitle from '../components/sectionTitle'
import Signin from '../components/signIn'

export default function signin() {
  return (
    
    <>
      <Head>
        <title>Sign in | embed.so</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionTitle title="Sign in to your account"></SectionTitle>
      <Signin/>
    </>
  )
}