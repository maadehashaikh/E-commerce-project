import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-2 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mt-3">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved By Essential
              Hub
            </p>
          </div>
          <div className="flex space-x-4  md:mt-0">
            <a href="#" className="text-sm no-underline text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm no-underline text-white">
              Terms of Service
            </a>
            <a href="#" className="text-sm no-underline text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
