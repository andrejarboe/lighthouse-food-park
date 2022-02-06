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

export default function Navbar3() {
  const [show, setShow] = useState(false)

  const { sitemap } = data
  return (
    <header className="relative bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        {/* <a
          href="#_"
          className="relative z-10 flex w-auto select-none items-center text-2xl font-extrabold leading-none text-black"
        >
          tails.
        </a> */}
        <Link href="/">
          <a href="#_" className="relative h-20 w-44 drop-shadow-2xl">
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
        <nav
          className={
            // "flex flex-col w-full items-center justify-center space-x-8 text-gray-200 md:flex font-poppins" +
            'md:max-w-40 flex w-full flex-grow flex-col items-center justify-end space-y-4 text-center  capitalize md:flex md:flex-row md:space-x-4 md:space-y-0' +
            ' ' +
            (show ? 'block' : 'hidden')
          }
        >
          {/* add whitespace-nowrap for nav links */}
          {sitemap.map((link, index, sitemap) => {
            if (index === sitemap.length - 1) {
              return (
                <Link href={link.href} key={index}>
                  <a className="font-regular text-md h-12 w-48 whitespace-nowrap rounded-full border-2 border-primary bg-primary py-2 px-4 text-center text-white transition duration-200 ease-in-out hover:bg-white hover:text-primary  ">
                    {link.name}
                  </a>
                </Link>
              )
            } else {
              return (
                <Link href={link.href} key={index}>
                  <a className="ease relative inline-block whitespace-nowrap border-primary text-base font-medium text-primary transition duration-150 hover:border-b hover:text-gray-900">
                    {link.name}
                  </a>
                </Link>
              )
            }
          })}
        </nav>
        {/* Mobile Button */}
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
      </div>
    </header>
  )
}
