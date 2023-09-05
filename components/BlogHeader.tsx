/* eslint-disable simple-import-sort/imports */
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import {BsGithub} from 'react-icons/bs';
import { FaBeer } from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si'
import {SiCodingninjas} from 'react-icons/si'
import {FaHackerrank} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'


import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
      return (
        <header className="mb-10 mt-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <div className="flex items-center pt-2"> {/* Left Div */}
          
            <Link
              href="/"
              className="block md:inline-block px-4 py-2 text-base md:text-base bg-gray-900
              text-[#F7AB0A] rounded-full text-center transform transition duration-700
              hover:scale-125 hover:bg-black hover:text-white"
            >
              Visit my Portfolio
            </Link>
          </div>
          
          
          <div className="flex flex-col justify-center items-center pt-2"> {/* Middle Div */}
            <h1 className="text-6xl font-thin leading-tight tracking-tighter md:pr-8 md:text-8xl">
              <Link href="/" className="cursor-pointer hover:text-purple-900 text-stone-950">
                TechTunes.
              </Link>
            </h1>
            <h4
              className={`text-center text-md md:text-left text-purple-950 ${styles.portableText} max-w-[30vw] leading-loose tracking-widest`}
            >
              By SARVAGYA
            </h4>
          </div>
          
          <div className="flex items-center pt-2"> {/* Right Div */}
            <Link
              href="https://github.com/serverf21"
              className="block md:inline-block px-2 py-2 text-sm md:text-base bg-gray-900
              text-[#F7AB0A] rounded-full text-center mx-1 hover:bg-black hover:text-white"
            >
              <BsGithub size={20} />
            </Link>
            <Link
              href="https://leetcode.com/user0367PG/"
              className="block md:inline-block px-2 py-2 text-sm md:text-base bg-gray-900
              text-[#F7AB0A] rounded-full text-center mx-1 hover:bg-black hover:text-white"
            >
              <SiLeetcode size={20} />
            </Link>
            <Link
              href="https://profile.codingninjas.com/b61adbc3-1a17-4936-9b8b-0f1c07b9282b"
              className="block md:inline-block px-2 py-2 text-sm md:text-base bg-gray-900
              text-[#F7AB0A] rounded-full text-center mx-1 hover:bg-black hover:text-white"
            >
              <SiCodingninjas size={20} />
            </Link>
            <Link
              href="https://www.hackerrank.com/saxena_sarvagya1"
              className="block md:inline-block px-2 py-2 text-sm md:text-base bg-gray-900
              text-[#F7AB0A] rounded-full text-center mx-1 hover:bg-black hover:text-white"
            >
              <FaHackerrank size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sarvagya-saxena-a8740195/"
              className="block md:inline-block px-2 py-2 text-sm md:text-base bg-gray-900
              text-[#F7AB0A] rounded-full text-center mx-1 hover:bg-black hover:text-white"
            >
              <BiLogoLinkedin size={20} />
            </Link>
          </div>
        </header>

      );
}
