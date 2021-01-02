import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="overlay flex flex-col">
        <h1 className="text-white text-4xl text-center px-4 font-semibold lg:text-6xl 2xl:text-7xl">
          Home of the internet's image
          <br />
          <span className="block mt-2 text-yellow-500 text-5xl lg:text-7xl 2xl:text-8xl">
            Gallery
          </span>
        </h1>
        <div className="mt-4 2xl:mt-6">
          <Link
            className="bg-blue-400 mr-5 py-1 px-3 rounded text-white transition-all hover:bg-red-800 2xl:py-2 2xl:px-6"
            to="/login"
          >
            Log In
          </Link>
          <Link
            className="bg-red-500 mr-5 py-1 px-3 rounded text-white transition-all hover:bg-blue-800 2xl:py-2 2xl:px-6"
            to="/sign-up"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Showcase
