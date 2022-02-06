import Image from 'next/image'
import Link from 'next/link'

export default function Navbar1() {
  return (
    <nav>
      <h1>header</h1>
      <div className="border-brand-black w-full border-b bg-white">
        <div className="mx-auto flex flex-col px-4 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 2xl:px-40">
          <div className="">
            <Link href="">
              <a>
                <Image
                  src="https://placeholder.com/wp-content/uploads/2018/10/placeholder-1.png"
                  alt="Picture of the author"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="object-top" // just an example
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
