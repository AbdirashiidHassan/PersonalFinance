import React from 'react';

function Home() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-teal-600 uppercase">Welcome to PersonalFinance</p>
              <h1 className="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-4xl xl:text-5xl">Manage Your Finances Like a Pro</h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-lg">Take control of your financial future with our expert tools and resources.</p>

              <a href="#" title="Get Started" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-teal-400 rounded-full lg:mt-16 hover:bg-teal-500 focus:bg-teal-500" role="button">
                Get Started
                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>

              <p className="mt-5 text-gray-600">Already have an account? <a href="#" title="Log in" className="text-black transition-all duration-200 hover:underline">Log in</a></p>
            </div>

            <div className="relative">
              <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="public/profile.png" alt="PersonalFinance illustration" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black lg:text-4xl xl:text-5xl">Key Features</h2>
          <p className="mt-4 text-center text-lg text-gray-600">Explore the powerful features that make managing your finances easier.</p>

          <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-black">Budget Tracking</h3>
              <p className="mt-2 text-gray-600">Monitor your spending and stay on top of your budget with ease.</p>
            </div>

            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4H4l3 7v3a1 1 0 001 1h8a1 1 0 001-1v-3l3-7h-3z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-black">Expense Management</h3>
              <p className="mt-2 text-gray-600">Easily manage and categorize your expenses.</p>
            </div>

            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-black">Financial Goals</h3>
              <p className="mt-2 text-gray-600">Set and track your financial goals effectively.</p>
            </div>

            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-2m0-4v-2m0-4V4m0 16v-2m0-4v-2m0-4v-2m4 12h2m4 0h2m-6 4h2m-4 0h2m4 0h2" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-black">Investment Tracking</h3>
              <p className="mt-2 text-gray-600">Keep track of your investments and their performance.</p>
            </div>

            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V9h-5v11zM17 8h5a2 2 0 012 2v9a2 2 0 01-2 2h-5m-7 0h5a2 2 0 012-2V9a2 2 0 00-2-2H10M7 20H2a2 2 0 01-2-2V9a2 2 0 012-2h5m0 0V7a5 5 0 0110 0v2M7 8a5 5 0 0110 0v2M7 8h10" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-black">Debt Reduction</h3>
              <p className="mt-2 text-gray-600">Strategize and manage your debt repayment plans.</p>
            </div>

            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7M5 18h2a2 2 0 002-2v-3m4 5h2a2 2 0 002-2v-3m4 5h2a2 2 0 002-2v-3M2 10h2a2 2 0 002-2V5M10 4v2a2 2 0 01-2 2H6m4-4v4a2 2 0 002 2h3m0-4v4a2 2 0 002 2h3" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-black">Reports and Insights</h3>
              <p className="mt-2 text-gray-600">Generate detailed reports and gain insights into your finances.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black lg:text-4xl xl:text-5xl">Testimonials</h2>
          <p className="mt-4 text-center text-lg text-gray-600">Hear what our satisfied users have to say about PersonalFinance.</p>

          <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-800">"PersonalFinance has completely transformed the way I manage my money. The budget tracking feature is a game-changer!"</p>
              <div className="mt-4">
                <p className="text-base font-semibold text-black">John Doe</p>
                <p className="text-sm text-gray-600">Software Engineer</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-800">"Thanks to PersonalFinance, I have successfully reduced my debt by 20% in just six months. Highly recommend!"</p>
              <div className="mt-4">
                <p className="text-base font-semibold text-black">Jane Smith</p>
                <p className="text-sm text-gray-600">Marketing Manager</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-800">"The investment tracking tool is fantastic. It's easy to use and helps me keep an eye on my portfolio's performance."</p>
              <div className="mt-4">
                <p className="text-base font-semibold text-black">Robert Johnson</p>
                <p className="text-sm text-gray-600">Financial Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
