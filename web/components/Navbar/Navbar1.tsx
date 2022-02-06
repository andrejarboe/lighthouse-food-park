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

export default function Navbar1() {
  const [show, setShow] = useState(false)

  const { transparent, siteMap, logo, company } = data

  return (
    <header>
      <div className="mx-auto flex max-w-6xl flex-col justify-between px-4 py-4 md:flex-row md:py-6">
        {/* left header  */}
        <div
          className={
            'flex items-center justify-between pb-4 md:pb-0' +
            ' ' +
            (show ? 'pb-4' : 'pb-0')
          }
        >
          <Link href="/">
            <a className="relative h-20 w-44  text-2xl font-bold text-primary drop-shadow-2xl">
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
          {/* <div className="flex-1 w-64"></div> */}
          <button
            onClick={() => setShow(!show)}
            className="flex items-center justify-center text-primary md:hidden"
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
        {/* END left header */}
        {/* right header */}
        <div
          className={
            'md:max-w-40 flex w-full flex-grow flex-col items-center justify-end space-y-4 text-center  capitalize md:flex md:flex-row md:space-x-4 md:space-y-0' +
            ' ' +
            (show ? 'block' : 'hidden')
          }
        >
          {siteMap.map((link, index, siteMap) => {
            if (index === siteMap.length - 1) {
              return (
                <div className="w-full border-t pt-6 pb-4 md:border-t-0 md:p-0">
                  <Link key={index} href={link.href}>
                    <a
                      className={
                        // 'w-full whitespace-nowrap rounded bg-red-300 p-3 text-red-700 shadow transition duration-500 hover:bg-red-200 hover:text-red-600 hover:shadow-xl ' +
                        ' ' +
                        'font-poppins font-regular text-md h-12 w-48 whitespace-nowrap rounded-full border-2 border-primary bg-primary py-2 px-4 text-white transition duration-200 ease-in-out hover:bg-white hover:text-primary'
                      }
                    >
                      {link.name}
                    </a>
                  </Link>
                </div>
              )
            } else {
              return (
                <Link key={index} href={link.href}>
                  <a className="text-md hover:underline-primary w-full whitespace-nowrap border-t pt-4 font-normal transition duration-200 ease-in-out hover:text-primary-600 md:border-t-0 md:pt-0">
                    {link.name}
                  </a>
                </Link>
              )
            }
          })}
        </div>
        {/* END right header */}
      </div>
    </header>
  )
}

{
  /* 



*/
}
