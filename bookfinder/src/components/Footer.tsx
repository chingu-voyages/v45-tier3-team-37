import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-300 p-10">
      <div className="flex flex-col justify-between gap-7 md:items-start lg:flex-row">
        <div className="flex cursor-pointer items-center text-2xl font-bold text-teal-600">
          <span className="text-4xl">
            <IoIosBook />
          </span>
          BookFinder
        </div>

        <div className="flex flex-col gap-10 md:gap-7 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-10 md:flex-row md:gap-24">
            <div className="flex flex-col gap-3 md:gap-5">
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

            <div className="flex flex-col gap-3 md:gap-5">
              <div className="text-xl font-semibold">Categories</div>
              <div className="flex flex-col gap-5 md:flex-row md:gap-16">
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
          </div>

          <div className="flex flex-col gap-3 md:gap-5">
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
      </div>

      <hr className="mb-3 mt-12 border-gray-500" />

      <div>
        <span className="text-black-500 dark:text-black-400 text-sm sm:text-center">
          © 2023 <a className="font-bold text-teal-600">BookFinder™</a>. All
          Rights Reserved. Designed and Developed by{" "}
          <a
            className="font-bold text-teal-600 hover:underline"
            href="https://github.com/chingu-voyages/v45-tier3-team-37/"
          >
            Chingu Voyage45Team37
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
