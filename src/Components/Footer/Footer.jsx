


import React from "react";

const Footer = () => {
  return (
    <section className="w-[90%] mx-auto rounded-xl bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 mb-10 shadow-lg overflow-hidden">
      <div className="text-center py-8">
        <h3 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Gadget Heaven
        </h3>
        <p className="text-lg text-purple-100 w-[75%] mx-auto leading-relaxed">
          Redefining your tech experience with cutting-edge innovation and style.
        </p>
      </div>
      <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-12 bg-white rounded-t-xl">
        <nav>
          <h6 className="text-xl font-semibold text-purple-700 mb-4">Services</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Design
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Advertisement
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold text-purple-700 mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Press Kit
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold text-purple-700 mb-4">Legal</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition duration-200">
                Cookie Policy
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;

