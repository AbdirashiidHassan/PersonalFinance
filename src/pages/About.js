import React from 'react';

function About() {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto p-10">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="public/About3.jpg" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-teal-600 uppercase">About Us</span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-teal-600">PersonalFinance</span>
          </h2>
          <p className="text-gray-700">
            PersonalFinance is dedicated to helping you manage your finances like a pro. Our platform provides
            powerful tools and resources to help you budget, track expenses, set financial goals, and more. 
            Whether you're looking to save money, reduce debt, or invest for the future, PersonalFinance has the
            expertise and features you need to achieve financial success.
          </p>
          <p className="text-gray-700 mt-4">
            Join thousands of satisfied users who have transformed their financial lives with PersonalFinance. 
            Our team of experts is here to guide you every step of the way. Take control of your financial future
            with confidence and ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
