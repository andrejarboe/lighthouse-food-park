import Head from 'next/head'
import Navbar1 from '../components/Navbar/Navbar1'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Lighthouse Food Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar1 />
    </div>
  )
}
