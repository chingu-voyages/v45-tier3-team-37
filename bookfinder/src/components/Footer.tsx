import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="top-64 flex h-full w-full flex-col gap-10 bg-gray-300 p-10 xl:flex-row xl:gap-56">
      <div className="flex flex-col gap-5">
        <div className="text-xl font-semibold">Follow Us</div>
        <div className="flex gap-5 text-3xl">
          <a href="/" className="hover:text-teal-600">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-teal-600">
            <FaGithub />
          </a>
          <a href="/" className="hover:text-teal-600">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="text-xl font-semibold">Categories</div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-24">
          <div>
            <ul>
              <a className="hover:text-teal-600 hover:underline" href="/">
                <li>Horror</li>
              </a>
              <a className="hover:text-teal-600 hover:underline" href="/">
                <li>Drama</li>
              </a>
              <a className="hover:text-teal-600 hover:underline" href="/">
                <li>Comedy</li>
              </a>
            </ul>
          </div>

          <div>
            <ul>
              <a className="hover:text-teal-600 hover:underline" href="/">
                <li>Classic</li>
              </a>
              <a className="hover:text-teal-600 hover:underline" href="/">
                <li>Crime</li>
              </a>
              <a className="hover:text-teal-600 hover:underline" href="/">
                <li>Fantasy</li>
              </a>
            </ul>
          </div>

          <div>
            <ul>
              <a className="hover:text-teal-600 hover:underline" href="/">
                <li>Adventures</li>
              </a>
              <a className="hover:text-teal-600 hover:underline" href="/">
                <li>Historical Fiction</li>
              </a>
              <a className="hover:text-teal-600 hover:underline" href="/">
                <li>Fairy Tales</li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="text-xl font-semibold">Contact Us</div>

        <div>
          <a
            className="hover:text-teal-600 hover:underline"
            href="mailto:chingu4537@gmail.com"
          >
            chingu4537@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
