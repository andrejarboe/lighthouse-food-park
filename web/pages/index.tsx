import Head from 'next/head'
import Navbar1 from '../components/Navbar/Navbar1'
import Navbar2 from '../components/Navbar/Navbar2'
import Navbar3 from '../components/Navbar/Navbar3'
import Navbar4 from '../components/Navbar/Navbar4'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Lighthouse Food Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar1 />
      <Navbar2 /> */}
      {/* <Navbar3 /> */}
      <Navbar4 />
    </div>
  )
}
