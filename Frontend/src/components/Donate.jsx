import React from 'react'

const Donate = () => {
  return (
       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded shadow">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Donate Food</h2>
        </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded shadow">
        <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="Foodname" className="block text-sm/6 font-medium text-gray-700">
                Food item:
              </label>
              <div className="mt-2">
                <input
                  id="food"
                  name="food"
                  type="food"
                  required
                  autoComplete="food"
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
          </div>
            <div className="flex gap-6 mt-6 bg-white px-2 py-2 rounded-full shadow items-center justify-center">
              <label className="flex items-center gap-2 text-lg font-semibold text-black">
                <input type="radio" name="foodType" value="veg" className="accent-green-600" defaultChecked />
                Veg
              </label>
              <label className="flex items-center gap-2 text-lg font-semibold text-black">
                <input type="radio" name="foodType" value="nonveg" className="accent-red-600" />
                Non Veg
              </label>
            </div>
            <div className="mt-4">
              <label htmlFor="category" className="block text-sm/6 font-medium text-gray-700 mb-1">Category</label>
              <select
                id="category"
                name="category"
                className="block w-full rounded-md bg-white border border-gray-300 px-3 py-2 text-base text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                required
              >
                <option value="">Select category</option>
                <option value="raw">Raw Food</option>
                <option value="cooked">Cooked Food</option>
                <option value="packed">Packed Food</option>
              </select>
            </div>
            <div>
              <label htmlFor="Foodname" className="block text-sm/6 font-medium text-gray-700">
                Quantity(person):
              </label>
              <div className="mt-2">
                <input
                  id="quantity"
                  name="quantity"
                  type="quantity"
                  required
                  autoComplete="food"
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
                <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-700">
                  PhoneNo:
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  required
                  autoComplete="phone"
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="adress" className="block text-sm/6 font-medium text-gray-700">
                  Address:
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="address"
                  required
                  autoComplete="adress"
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

          
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>

         
        </div>
      </div>
  )
}

export default Donate
