import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-2 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="w-full flex space-x-12  md:mt-0 ">
            <a href="#" className="text-sm no-underline text-white w-1/4">
              <h5>About Us</h5>
              <div className="flex flex-col text-gray-400">
                <span>About</span>
                <span>FAQ</span>
                <span>Contact</span>
                <span>Jobs</span>
                <span>Press</span>
                <span>Reviews</span>
              </div>
            </a>
            <a href="#" className="text-sm no-underline text-white w-1/4">
              <h5>Terms of Service</h5>
              <div className="flex flex-col text-gray-400">
                <span>About</span>
                <span>FAQ</span>
                <span>Contact</span>
                <span>Jobs</span>
                <span>Press</span>
                <span>Reviews</span>
              </div>
            </a>
            <a href="#" className="text-sm no-underline text-white w-1/4">
              <h5>Contact Us</h5>
              <div className="flex flex-col text-gray-400">
                <span>About</span>
                <span>FAQ</span>
                <span>Contact</span>
                <span>Jobs</span>
                <span>Press</span>
                <span>Reviews</span>
              </div>
            </a>
            <a href="#" className="text-sm no-underline text-white w-1/4">
              <h5>Sign Up</h5>
              <div className="flex flex-col text-gray-400">
                <span>About</span>
                <span>FAQ</span>
                <span>Contact</span>
                <span>Jobs</span>
                <span>Press</span>
                <span>Reviews</span>
              </div>
            </a>
          </div>
          <div className="md:text-left mt-3 text-gray-500">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved By Essential
              Hub
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
