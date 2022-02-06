import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const data = {
  company: 'The Lighthouse Food Park',
  transparent: false,
  siteMap: [
    { name: 'Home', href: '/' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Food Trucks', href: '/food-trucks' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Vendor sign up', href: '/vendor-sign-up' },
  ],
}
export default function Navbar2() {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-12 max-w-6xl flex-col flex-wrap items-center justify-between  px-2 md:flex-row lg:px-2">
        <Link href="/">
          <a href="" className="relative h-20 w-44 drop-shadow-2xl">
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
        <div className="relative hidden h-full flex-col md:flex md:flex-row">
          <nav className="mb-4 flex h-full flex-wrap items-center border-b border-gray-800 pt-3 pb-5 text-base md:mb-0 md:mr-1 md:border-b-0 md:border-r md:pt-0 md:pr-1 md:pb-0">
            {data.siteMap.map((item, index) => {
              return (
                <Link href={item.href} key={index}>
                  <a className="font-md flex h-full items-center px-4 leading-6 ">
                    {item.name}
                  </a>
                </Link>
              )
            })}
          </nav>
        </div>
        <div className=" top-0 right-0 flex h-full cursor-pointer items-center justify-center pr-4 md:hidden">
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
        </div>
      </div>
    </header>
  )
}
