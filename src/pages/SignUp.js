import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <section className="login">
      <div className="overlay">
        <form className="bg-red-500 p-10 rounded w-9/12 xl:w-6/12">
          <input
            className="w-full bg-white mt-4 text-sm text-red-500 font-semibold p-2 tracking-widest placeholder-red-500"
            type="text"
            name="username"
            id="username"
            placeholder="Choose your username"
            required
          />
          <br />
          <input
            className="w-full bg-white mt-4 text-sm text-red-500 font-semibold p-2 tracking-widest placeholder-red-500"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <br />
          <input
            className="w-full bg-white mt-4 text-sm text-red-500 font-semibold p-2 tracking-widest placeholder-red-500"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <br />
          <input
            className="w-full bg-white mt-4 text-sm text-red-500 font-semibold p-2 tracking-widest placeholder-red-500"
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm your password"
            required
          />
          <br />
          <input
            className="w-full bg-white mt-4 text-sm text-red-500 font-semibold p-2 tracking-widest cursor-pointer transition-all hover:bg-red-800 hover:text-white"
            type="submit"
            value="Sign Up"
          />
          <br />
          <small className="block mt-6 text-white text-center">
            Already have an account? &nbsp;
            <Link
              to="/login"
              className="bg-blue-400 py-2 px-4 rounded transition-all hover:bg-red-800"
            >
              Log In
            </Link>
          </small>
        </form>
      </div>
    </section>
  )
}

export default SignUp
