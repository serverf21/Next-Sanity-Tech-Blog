import Image from 'next/image'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { FaHackerrank } from 'react-icons/fa'
import { SiCodingninjas, SiLeetcode } from 'react-icons/si'
import { toast } from 'react-toastify';

import cover from './cover.png'

export default memo(function IntroTemplate() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const PostData = async (e) => {
    e.preventDefault()

    const { name, email, message } = details;

    const res = await fetch("https://personal-portfolio-d8375-default-rtdb.firebaseio.com/sarvagyacontact.json",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,

        })
      });
    if (res.status === 200) {
      toast.success(`Thank you for reaching out, ${name}.
      We will be in touch shortly. 🌟`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // alert("Message sent to Sarvagya!");
    }

  }

  return (
    <div>
      <div className="flex justify-center border border-stone-200 bg-stone-50">
        <div className="mb-8 mt-5 grid max-w-screen-2xl grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6 md:gap-y-20 lg:gap-x-18 ">
          <div className="self-center mix-blend-normal opacity-95 hover:">
            <Image
              alt="Sarvagya's Blog"
              src={cover}
              className="mix-blend-multiply"
            />
          
          </div>

          <div className='m-3'>
            <section className='lg:section'>
              <div className="container mx-auto">
                <div className='flex flex-col'>
                  {/* text */}
                  <div
                    className='flex-1 flex justify-start items-center'>
                    <div>
                      <h4 className="text-sm uppercase font-medium mb-1
                      tracking-wide">
                        Get in touch
                      </h4>
                      <h2 className="text-xl lg:text-[6vh] leading-none mb-3">
                        Let's work <br />
                        together!
                      </h2>

                    </div>
                  </div>
                  {/* form */}
                  <form
                    className="flex-1 border border-stone-400 rounded-xl flex flex-col gap-y-2
                  pb-15 p-4 items-start">
                    <input className="bg-transparent border-b py-2 outline-none w-full
                    placeholder:text-stone-400 focus:border-stone-900 transition-all" type="text"
                      placeholder="Your name"
                      onChange={(e) =>
                        setDetails({ ...details, name: e.target.value })
                      }
                      />
                    <input className="bg-transparent border-b py-2 outline-none w-full
                    placeholder:text-stone-400 focus:border-stone-400 transition-all" type="email"
                      placeholder="Your email"
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                      />
                    <textarea className='bg-transparent border-b py-8 outline-none w-full
                    placeholder:text-stone-400 focus:border-stone-400 transition-all resize-none mb-12'
                      placeholder='Your message'
                      onChange={(e) =>
                        setDetails({ ...details, message: e.target.value })
                      }
                      />
                    
                    <button 
                      className='btn btn-lg bg-[#F7AB0A] hover:bg-yellow-600 text-stone-900 font-bold py-2 px-4 rounded-lg'
                      onClick={PostData}
                    >
                      <Link href="/">
                        Send Message
                      </Link>
                    </button>

                  </form>

                </div>
                <div className='bottom-0 mt-5 font-extralight'>
                  <div className='text-accent text-lg'>
                    <h1>Or</h1>
                  </div>
                  Email me: <span className='font-semibold'>sarvagyasaxena.2102@gmail.com</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className='flex flex-col justify-center text-center py-5 text-stone-700 font-serif text-lg'>
        <div>
        Copyright ©2023 Sarvagya Saxena
        </div>
        <div className='hidden md:flex md:justify-center'>
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
        </div>
      </div>
    </div>
    
  )
})


