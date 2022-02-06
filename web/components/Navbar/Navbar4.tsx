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
    { name: 'Blog', href: '/blog' },
    { name: 'Vendor sign up', href: '/vendor-sign-up' },
  ],
}

export default function Navbar4() {
  const [show, setShow] = useState(false)
  const { sitemap } = data

  return (
    <header>
      {/* padding px-4 xl:px-0 */}
      <div className="mx-auto max-w-7xl justify-between px-4 md:flex md:items-center md:justify-between xl:px-0">
        <div className="mx-auto flex h-24 w-full items-center justify-between px-8">
          {/* Logo  */}
          <Link href="/">
            <a
              href=""
              // Logo scaling md:h-full md:w-full
              className=" relative h-20 w-44 md:h-full md:w-full"
              //   className="relative h-20 w-44 drop-shadow-2xl md:flex md:justify-start"
              //   style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              {/* DO NOT FORGET TO MAKE A PARENT DIV RELATIVE  */}
              <Image
                src="/lighthouse-logo.png"
                alt="logo"
                layout="fill" // required
                objectFit="contain" // change to suit your needs
                className="object-contain object-center" // just an example
              />
              {/* ^^^DO NOT FORGET TO MAKE A PARENT DIV RELATIVE  */}
            </a>
          </Link>
          {/* END Logo  */}
          {/* Mobile Button  */}
          <button
            onClick={() => setShow(!show)}
            className="flex h-full items-center justify-center md:hidden"
          >
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
          {/* END Mobile Button  */}
        </div>
        {/* Navbar */}
        <nav
          className={
            // ' flex-col md:block md:flex-row md:space-x-4 w-full md:flex-nowrap ' +
            ' flex flex-col items-center justify-center text-center md:block md:flex-row md:space-x-6' +
            ' ' +
            (show ? 'block' : 'hidden')
          }
        >
          {sitemap.map((link, index, sitemap) => {
            return (
              <Link href={link.href} key={index}>
                <a className="whitespace-nowrap">{link.name}</a>
              </Link>
            )
          })}
        </nav>
        {/* END navbar  */}
      </div>
    </header>
  )
}
