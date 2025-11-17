import React from 'react'
import bg from '../assets/image.png'

function Home() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden pt-16"
      style={{ backgroundImage: `url(${bg})`}}
      id="Home"
    >
      {/* Content Wrapper */}
      <div className="max-w-full mx-auto px-4 sm:px-6 pt-20 md:pt-[200px]">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Power on your <br />
          <span className="text-gray-300 pt-4 text-base sm:text-lg md:text-xl">Productivity</span>
        </h1>

        {/* Description */}
        <p className="text-sky-500 pt-4 text-lg">
          Discover a world of high-performance computing. From cutting-edge <br  className="hidden sm:block" />
          laptops to custom-built desktops, find the perfect tool to fuel your <br className="hidden sm:block"/>
          creativity and success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col  sm:flex-row gap-4  items-center sm:gap-6 mt-8">
          <button className="btn-home bg-sky-600 text-white rounded-2xl h-12 sm:h-[50px] w-[250px] sm:w-[200px] transform hover:scale-101 transition">
            Explore Product
          </button>

          <button className="btn-home bg-sky-600 text-white rounded-2xl h-12 sm:h-[50px] w-[250px] sm:w-[200px] transform hover:scale-101 transition">
            Build Your PC
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home
 