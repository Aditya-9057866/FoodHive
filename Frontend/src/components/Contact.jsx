import React from 'react'

const Contact = () => {
  return (
    <>
       <div className="w-full bg-white">
      <img 
        className="w-full h-75 object-cover" 
        src="https://www.shutterstock.com/image-photo/writing-contact-us-young-smiling-260nw-637354096.jpg" 
        alt="Contact Us" 
      />
      </div>
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded shadow">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Contact us</h2>
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
                  Message
                </label>
              
              </div>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  autoComplete="message"
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-3 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6 resize-y"
                  placeholder="Write your review here..."
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </>
   
    

  )
}

export default Contact
