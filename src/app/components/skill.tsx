import React from 'react'
// import { AiOutlineCheckSquare } from "react-icons/ai";

const Skill = () => {
  return (
    <div id='skills'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
        {/* skill */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {/* <AiOutlineCheckSquare /> */}
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-600 h-1 rounded-xl w-[30%]"></div>
            </div>

            <p className='font-bold text-blue-600 text-right'>
                100%
        </p>
            
          </div>
        </div>
      </div>
      {/* skill */}
      <div className="p-4 md:w-1/3 items-center justify-center">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {/* <AiOutlineCheckSquare /> */}
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow ml-11">
            <div className='h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-600 h-1 rounded-xl w-[25%]"></div>
            </div>

            <p className='font-bold text-blue-600 text-right'>
                90%
        </p>
            
          </div>
        </div>
      </div>
      {/* skill */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {/* <AiOutlineCheckSquare /> */}
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              TypeScript/JavaScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-600 h-1 rounded-xl w-[30%]"></div>
            </div>

            <p className='font-bold text-blue-600 text-right'>
                100%
        </p>
            
          </div>
        </div>
      </div>
      {/* skill */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {/* <AiOutlineCheckSquare /> */}
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='h-1 w-full bg-gray-300 rounded-xl'>
                <div className="absolute bg-blue-600 h-1 rounded-xl w-[20%]"></div>
            </div>

            <p className='font-bold text-blue-600 text-right'>
                70%
        </p>
            
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      
    </div>
  )
}

export default Skill