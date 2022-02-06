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
    { name: 'About', href: '/About' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Navbar1() {
  const [show, setShow] = useState(false)

  return (
    <header>
      <div className="border-brand-black w-full border-b bg-white">
        <div className="mx-auto flex flex-col px-4 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 2xl:px-40">
          <div className="flex flex-row items-center justify-between py-4">
            {/* nav left  */}
            <Link href="/">
              <div className="relative h-12 w-44">
                <a href="">
                  {/* DO NOT FORGET TO MAKE A PARENT DIV RELATIVE  */}
                  <Image
                    src="/lighthouse-logo.png"
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="contain" // change to suit your needs
                    className="object-contain object-top" // just an example
                  />
                  {/* ^^^DO NOT FORGET TO MAKE A PARENT DIV RELATIVE  */}
                </a>
              </div>
            </Link>
            {/* nav right */}
            <button
              onClick={() => setShow(!show)}
              className="focus:shadow-outline rounded-lg focus:outline-none lg:hidden"
            >
              <svg
                width={25}
                height={18}
                viewBox="0 0 25 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H19"
                  stroke="#000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9H24"
                  stroke="#000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 17H19"
                  stroke="#000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* end mobile nav closed */}
          <nav
            className={
              ' flex-grow flex-col pb-4 lg:flex lg:flex-row lg:justify-end lg:pb-0' +
              ' ' +
              (show ? 'block' : 'hidden')
            }
          >
            <div className="flex flex-col lg:flex-row">
              {data.siteMap.map((item, index) => {
                if (index === data.siteMap.length - 1) {
                  return (
                    <Link key={index} href={item.href}>
                      <a className="font-poppins border-brand-blue font-regular my-1 ml-8 block h-12 w-48 rounded-full border-2 bg-primary py-2.5 text-center text-sm text-white transition-all ease-in-out hover:bg-white hover:text-primary">
                        Vendor sign up
                      </a>
                    </Link>
                  )
                } else {
                  return (
                    <Link key={index} href={item.href}>
                      <a className="font-poppins px-8 py-5 text-sm font-semibold text-primary-100 text-black transition-all delay-150 ease-in-out hover:text-primary lg:px-5 2xl:px-8">
                        {item.name}
                      </a>
                    </Link>
                  )
                }
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
