import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const data = {
  company: 'The Lighthouse Food Park',
  transparent: false,
  sitemap: [
    { name: 'Home', href: '/' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Food Trucks', href: '/food-trucks' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Vendor sign up', href: '/vendor-sign-up' },
  ],
}

export default function Navbar4() {
  const [show, setShow] = useState(false)
  const {sitemap} = data

  return (
    <header>
      <div className="mx-auto">
        {/* mobile  */}
        <div className="">
          {/* logo and button */}
          <div className="flex justify-between px-4">
            <Link href="/">
              <a href="#_" className="relative h-20 w-44">
                {/* DO NOT FORGET TO MAKE A PARENT DIV RELATIVE  */}
                <Image
                  src="/lighthouse-logo.png"
                  alt="Picture of the author"
                  layout="fill" // required
                  objectFit="contain" // change to suit your needs
                  className="object-contain object-center" // just an example
                />
                {/* ^^^DO NOT FORGET TO MAKE A PARENT DIV RELATIVE  */}
              </a>
            </Link>
            {/* Mobile Button */}
            <button onClick={() => setShow(!show)} className="">
              <svg
                className="stroke-primary hover:stroke-primary-300"
                width="25"
                height="18"
                viewBox="0 0 25 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H19"
                  stroke=""
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 9H24"
                  stroke=""
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 17H19"
                  stroke=""
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* end logo and button */}
        </div>
        {/* end mobile  */}
      </div>
    </header>
  )
}
