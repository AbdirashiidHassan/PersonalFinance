import React from 'react';

function Contact() {
  return (
    <section className="py-10 bg-teal-900 sm:py-16 lg:py-24">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">Let's Connect and Plan Your Financial Journey!</h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">We provide personalized financial advice to help you achieve your financial goals. Contact us for a free consultation.</p>

              <img className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg" alt="" />

              <img className="hidden w-full translate-x-24 translate-y-8 md:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg" alt="" />
            </div>

            <div className="hidden md:mt-auto md:block">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>

              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed text-white">PersonalFinance has completely transformed my financial life. The advice and tools provided have been invaluable. Highly recommended!</p>
              </blockquote>

              <div className="flex items-center mt-8">
                <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg" alt="" />
                <div className="ml-4">
                  <p className="text-base font-semibold text-white">Jenny Wilson</p>
                  <p className="mt-px text-sm text-gray-400">Product Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="overflow-hidden bg-white rounded-md">
              <div className="p-6 sm:p-10">
                <h3 className="text-3xl font-semibold text-black">Get a Free Quote</h3>
                <p className="mt-4 text-base text-gray-600">Contact us to get a free personalized quote for managing your finances.</p>

                <form action="#" method="POST" className="mt-4">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="text-base font-medium text-gray-900"> Your name </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 caret-teal-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="text-base font-medium text-gray-900"> Email address </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email address"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 caret-teal-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="project-brief" className="text-base font-medium text-gray-900"> Project brief </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name="project-brief"
                          id="project-brief"
                          placeholder="Enter your project brief"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-teal-500 focus:border-teal-500 caret-teal-500"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-teal-500 border border-transparent rounded-md focus:outline-none hover:bg-teal-600 focus:bg-teal-600">
                        Get Free Quote
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default Contact;
