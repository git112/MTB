import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button' 

function Header() {
  return (
    <div className='p-5 bg-white border-b border-gray-200 shadow-sm'>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src={'/images/logo.svg'}
              alt='logo'
              width={70}
              height={70}
            />
            <h1 className="text-3xl font-outfit font-bold text-gray-900">
              Museum Guide
            </h1>
          </div>

          <div className="flex items-center gap-8">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm">
                <li>
                  <a className="text-gray-700 hover:text-navy-600 transition-colors font-medium" href="#"> About </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-navy-600 transition-colors font-medium" href="#"> Exhibitions </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-navy-600 transition-colors font-medium" href="#"> Collections </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-navy-600 transition-colors font-medium" href="#"> Visit </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-navy-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-700 transition-colors"
                  href="#"
                >
                  Login
                </a>
                <a
                  className="rounded-md border border-navy-600 px-5 py-2.5 text-sm font-medium text-navy-600 hover:bg-navy-50 transition-colors"
                  href="#"
                >
                  Register
                </a>
              </div>

              <button className="block md:hidden rounded p-2 text-gray-700 hover:bg-gray-100 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
