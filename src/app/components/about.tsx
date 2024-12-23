import Image from 'next/image'
import React from 'react'
type Props = {
  children: React.ReactNode;
  href: string;
  target: "_blank";
  download?: boolean | string; // Correct type for 'download'
};

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
    <Image
      
        className="object-cover object-center rounded mx-auto w-[500px] h-[500px]"
        alt="hero"
        src="/banner.png"
        width={200}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me

      </h1>
      <p className="mb-5 leading-relaxed">
      I am a passionate and dedicated developer with experience in  JavaScript, typescript,Next.Js etc. and expertise in  React, Node.js. With a strong foundation in full-stack development, front-end frameworks, back-end architecture, I enjoy building innovative solutions and tackling complex challenges.
      </p>
      <p className="mb-1 leading-relaxed">
        Phone Number : 03453494644
        </p>
        <p className="mb-1 leading-relaxed"></p>
        Email : amiransari10101@gmail.com
      
      <div className="flex justify-center">
      <a href="/pics/CV/My-CV.pdf" target="_blank" download>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
    
        </a>
      </div>
    </div>
  </div>
</section>

      
    </div>
  )
}

export default About