import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded shadow">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Sign in to your account</h2>
        </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded shadow">
        <form action="#" method="POST" className="space-y-6">
                      <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-700">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-700">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-400">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-700">
                 Confirm Password
                </label>
              
            </div>
            
              <div className="mt-2">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="confirmpassword"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-700">
            Already a member?{' '}
              <Link to="/login" className="text-blue-500 underline ml-1">
            Login
          </Link>
          </p>
        </div>
      </div>
  )
}

export default Signup
