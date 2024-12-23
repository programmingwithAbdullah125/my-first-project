"use client"

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
// import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    
      <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        {/* <Typewriter
  options={{
    strings: ['Muhammad Amir' ,'Web Developer', '& A Freelancer!',],
    autoStart: true,
    loop: true,
  }}
/> */}

    
      </h1>
      <div className='"w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed text-justify">
      As a passionate web developer, I specialize in building intuitive, responsive, and visually engaging websites that prioritize user experience and accessibility. With a strong foundation in HTML, CSS, and JavaScript as well as Next.Js, along with expertise in frameworks like React and Vue.js, I enjoy transforming ideas into digital solutions that drive results.

My approach focuses on clean, efficient code, collaboration, and continuous learning to stay at the forefront of evolving web technologies. Whether it's crafting a custom e-commerce site, developing a sleek web app, or optimizing existing code, I’m dedicated to delivering quality that speaks for itself.

If you’re looking for a developer who brings creativity, technical skill, and attention to detail, let's connect and bring your project to life!.
      </p>
      <div className="flex justify-center">
       <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      
        
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[20rem]"

        alt="hero"
        width={500}
        height={500}
        src="/banner.png"
      />
    </div>
  </div>
</section>


  )
}

export default Hero