import Image from 'next/image'
import Link from 'next/link'

export default function Navbar1() {
  return (
    <nav>
      <div className="border-brand-black w-full border-b bg-white">
        <div className="mx-auto flex flex-col px-4 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 2xl:px-40">
          <div className="">
            <Link href="/">
              <div className="relative h-11 w-44">
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
          </div>
        </div>
      </div>
    </nav>
  )
}
