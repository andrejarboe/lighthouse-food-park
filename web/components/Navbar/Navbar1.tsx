import Image from 'next/image'
import Link from 'next/link'

export default function Navbar1() {
  return (
    <nav>
      <div className="border-brand-black w-full border-b bg-white">
        <div className="mx-auto flex flex-col px-4 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 2xl:px-40">
          <div className="flex flex-row items-center justify-between py-4">
            <Link href="/">
              <div className="relative h-12 w-44">
                <a href="">
                  {/* DO NOT GORGE TO MAKE A PARENT DIV RELATIVE  */}
                  <Image
                    src="/lighthouse-logo.png"
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="contain" // change to suit your needs
                    className="object-contain object-top" // just an example
                  />
                  {/* ^^^DO NOT GORGE TO MAKE A PARENT DIV RELATIVE  */}
                </a>
              </div>
            </Link>
            <button className="focus:shadow-outline rounded-lg focus:outline-none lg:hidden">
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
        </div>
      </div>
    </nav>
  )
}
