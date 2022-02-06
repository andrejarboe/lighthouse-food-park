import Head from 'next/head'

import Navbar4 from '../components/Navbar/Navbar4'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Lighthouse Food Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar4 />

      <section>
        <div className="w-full px-4 md:px-10 lg:px-20 2xl:px-40">
          <div className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <p className="font-casual pt-16 text-4xl text-black lg:text-6xl">
                The Lighthouse <br className="hidden xl:block" /> Food Park
              </p>
              <p className="font-poppins py-7 text-sm text-brand-gray lg:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting{' '}
                <br className="hidden xl:block" /> industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s.
              </p>
              <button className="font-poppins font-regular my-4 mx-auto block h-14 w-48 rounded-full border-2 border-brand-blue bg-brand-blue py-2.5 text-center text-sm text-white transition-all delay-150 ease-in-out hover:bg-white hover:text-brand-blue lg:my-8 lg:ml-0">
                Vendor sign up
              </button>
            </div>
            <div className=" mt-16 lg:mt-0">
              <div className="relative">
                {/* blue */}
                <div className="absolute right-0 ml-3 -mt-10 h-52 w-52 rounded-[63px] bg-brand-blue opacity-10 md:left-1/2" />
                {/* img */}
                <img
                  src="https://images.pexels.com/photos/5779666/pexels-photo-5779666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="relative mx-auto rounded-full lg:mr-0"
                  alt=""
                />
                {/* left */}
                <div
                  className="borde-white absolute top-2/3 left-0 -mt-2 h-20 w-48 rounded-[197px] border backdrop-blur-2xl md:left-[18%] lg:left-[0%] lg:h-24 lg:w-64 xl:left-[15%] 2xl:left-32"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    boxSizing: 'border-box',
                  }}
                >
                  <p className="font-poppins mt-2 text-center text-base font-medium lg:mt-2.5 lg:text-lg">
                    Available on
                  </p>
                  <div className="mt-1 flex justify-center">
                    <svg
                      className="mr-2 h-7 w-7 lg:h-10 lg:w-10"
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 4.64766V35.3508C3.75021 35.4174 3.77007 35.4825 3.80711 35.5378C3.84415 35.5932 3.89671 35.6364 3.9582 35.662C4.01969 35.6876 4.08738 35.6945 4.15277 35.6818C4.21816 35.6691 4.27835 35.6374 4.32578 35.5906L20.3125 20L4.32578 4.40782C4.27835 4.36105 4.21816 4.32933 4.15277 4.31663C4.08738 4.30393 4.01969 4.31082 3.9582 4.33643C3.89671 4.36205 3.84415 4.40525 3.80711 4.46061C3.77007 4.51598 3.75021 4.58105 3.75 4.64766Z"
                        fill="black"
                      />
                      <path
                        d="M27.0157 13.5936L6.97034 2.54987L6.95784 2.54284C6.61253 2.35534 6.2844 2.82252 6.56721 3.0944L22.2805 18.1194L27.0157 13.5936Z"
                        fill="black"
                      />
                      <path
                        d="M6.56876 36.9053C6.28438 37.1772 6.61251 37.6444 6.95938 37.4569L6.97188 37.4499L27.0156 26.4061L22.2805 21.8788L6.56876 36.9053Z"
                        fill="black"
                      />
                      <path
                        d="M35.1078 18.0468L29.5102 14.964L24.2469 19.9999L29.5102 25.0335L35.1078 21.953C36.6305 21.1116 36.6305 18.8882 35.1078 18.0468Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      className="ml-2 h-6 w-6 lg:h-9 lg:w-7"
                      width={28}
                      height={34}
                      viewBox="0 0 28 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.4132 26.4963C26.9105 27.6842 26.3154 28.7776 25.626 29.7829C24.6862 31.1533 23.9168 32.102 23.3238 32.6287C22.4045 33.4934 21.4196 33.9362 20.3649 33.9614C19.6078 33.9614 18.6947 33.741 17.6318 33.294C16.5655 32.8491 15.5855 32.6287 14.6894 32.6287C13.7497 32.6287 12.7418 32.8491 11.6637 33.294C10.584 33.741 9.71423 33.974 9.04922 33.9971C8.03784 34.0412 7.02975 33.5857 6.02351 32.6287C5.38127 32.0558 4.57796 31.0736 3.61562 29.6821C2.58312 28.1963 1.73425 26.4732 1.06924 24.5089C0.357028 22.3871 0 20.3324 0 18.3433C0 16.0647 0.481372 14.0995 1.44555 12.4527C2.20331 11.1298 3.2114 10.0864 4.47311 9.32034C5.73481 8.55431 7.09808 8.16395 8.5662 8.13898C9.36952 8.13898 10.423 8.39313 11.7321 8.89262C13.0375 9.39379 13.8757 9.64795 14.2431 9.64795C14.5179 9.64795 15.449 9.35077 17.0276 8.75831C18.5203 8.20887 19.7802 7.98137 20.8123 8.07098C23.609 8.30184 25.7101 9.42947 27.1074 11.461C24.6062 13.0111 23.3689 15.1822 23.3935 17.9674C23.4161 20.1368 24.1856 21.9421 25.6978 23.3756C26.3831 24.0408 27.1485 24.555 28 24.9202C27.8153 25.468 27.6204 25.9926 27.4132 26.4963ZM20.999 0.680194C20.999 2.38058 20.3916 3.96823 19.181 5.43774C17.7201 7.1847 15.953 8.19417 14.0367 8.03488C14.0123 7.83089 13.9982 7.61619 13.9982 7.39058C13.9982 5.75821 14.6929 4.01125 15.9267 2.58288C16.5427 1.85966 17.3261 1.25832 18.2761 0.778622C19.2241 0.306078 20.1208 0.0447511 20.9641 0C20.9887 0.227315 20.999 0.454645 20.999 0.680172V0.680194Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                {/* right */}
                <div
                  className="borde-white absolute top-3/4 right-0 h-20 w-32 rounded-[197px] border backdrop-blur-2xl md:right-[21%] lg:-right-28 lg:w-60"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
