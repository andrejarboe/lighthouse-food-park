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
    { name: 'Contact', href: '/contact' },
    { name: 'Vendor sign up', href: '/vendor-sign-up' },
  ],
}

export default function Navbar4() {
  const [show, setShow] = useState(false)
  const { sitemap } = data

  return (
    <header className="border-brand-black md:border-b">
      {/* padding px-4 xl:px-0 */}
      <div className="mx-auto max-w-7xl justify-between md:flex md:items-center md:justify-between md:px-4 xl:px-0">
        <div className="mx-auto flex h-24 w-full items-center justify-between px-4">
          {/* Logo  */}
          <Link href="/">
            <a
              href=""
              // Logo scaling md:h-full md:w-full
              className="relative flex h-20 w-44"
              //   className="relative h-20 w-44 drop-shadow-2xl md:flex md:justify-start"
              //   style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              {/* DO NOT FORGET TO MAKE A PARENT DIV RELATIVE  */}
              <Image
                src="/lighthouse-logo.png"
                alt="logo"
                layout="fill" // required
                objectFit="contain" // change to suit your needs
                className="shrink justify-start object-contain object-center" // just an example
              />
              {/* ^^^DO NOT FORGET TO MAKE A PARENT DIV RELATIVE  */}
            </a>
          </Link>
          {/* END Logo  */}
          {/* Mobile Button  */}
          <button
            onClick={() => setShow(!show)}
            className="flex h-full w-full items-center justify-end  md:hidden"
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
        <div className="mx-auto h-[1px] w-[100vw] bg-brand-black md:hidden"></div>
        {/* Navbar */}
        <nav
          className={
            // ' flex-col md:block md:flex-row md:space-x-4 w-full md:flex-nowrap ' +
            // ' flex flex-col items-center justify-center text-center md:block md:flex-row md:space-x-4 ' +
            'space-y flex flex-col items-center justify-end text-center capitalize  md:flex md:flex-row md:space-x-4 md:space-y-0' +
            ' ' +
            // 'flex h-full w-full items-center justify-end' +
            // 'flex h-full w-full items-center justify-end  md:block' +
            'mb:border-b-0 w-full pb-4 md:pb-0' +
            ' ' +
            (show ? 'block' : 'hidden')
          }
        >
          {sitemap.map((link, index, sitemap) => {
            if (index === sitemap.length - 1) {
              return (
                //   <div className="div w-full">

                // <Link href={link.href} key={index}>
                //   <a className="hover:bg mt-4 whitespace-nowrap rounded-full border-primary bg-primary px-4 py-4 text-white hover:bg-white hover:text-primary md:mt-0  ">
                //     {link.name}
                //   </a>
                // </Link>
                //   </div>

                <div className="w-full  border-b py-6 pb-6 md:border-b-0 md:p-0">
                  <Link key={index} href={link.href}>
                    <a className="whitespace-nowrap md:text-base rounded-full border-2 border-primary bg-primary p-3 text-lg font-medium text-white shadow transition duration-200 hover:bg-white hover:text-primary hover:shadow-xl ">
                      {link.name}
                    </a>
                  </Link>
                  {/* <div className="mt-8 -mx-[100%] h-[1px] overflow-visible bg-brand-black md:hidden"></div> */}
                </div>
              )
            } else {
              return (
                <Link href={link.href} key={index}>
                  <a className="w-full whitespace-nowrap border-b-2 px-4 py-4 text-lg font-medium text-brand-black hover:border-primary hover:text-primary hover:shadow md:border-white md:py-0 md:px-0 md:text-base md:hover:border-white md:hover:shadow-none ">
                    {link.name}
                  </a>
                </Link>
              )
            }
          })}
        </nav>
        {/* END navbar  */}
      </div>
    </header>
  )
}
