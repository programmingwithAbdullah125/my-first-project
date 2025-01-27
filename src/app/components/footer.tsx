import Link from "next/link";
// import { BsFacebook } from "react-icons/bs";
import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-yellow-300">
        <>
  
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={require("/logo1.png")} alt="Amir" width={100} height={100} 
     className="w-[76px]"
     />
        <span className="ml-3 text-xl">Amir Portfolio</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      @2024 Amir Portfolio
        
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link
        target="_blank"
        href={"https://www.facebook.com/amir.ansari.58323431"}
         className="text-gray-500">
        {/* <BsFacebook /> */}
        </Link>
        
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>

 </span>
    </div>
  </footer>
</>

      
    </div>
  )
}

export default Footer