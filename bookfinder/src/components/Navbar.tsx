"use client";

import React, { useState } from "react";
import { IoIosBook } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import SignOutButton from "./SignOutButton";

type CountryProps = {
  abbreviation: string;
  value: string;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  const countries: CountryProps[] = [
    { abbreviation: "ENG", value: "English" },
    { abbreviation: "ITA", value: "Italian" },
    { abbreviation: "ESP", value: "Espanol" },
    { abbreviation: "POR", value: "Portuguese" },
  ];

  //TODO: Language Change function implementation goes here
  const handleLanguageChange = () => {};

  return (
    <div className="left-0 top-0 mb-4 w-full shadow-md">
      <div className="m-auto max-w-7xl items-center justify-between bg-white px-8 py-6 md:flex">
        <Link href="/">
          <div className="flex cursor-pointer items-center text-2xl font-bold text-teal-600">
            <span className="text-4xl">
              <IoIosBook />
            </span>
            BookFinder
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-4xl md:hidden"
        >
          {open ? <MdClose /> : <GiHamburgerMenu />}
        </div>

        <div>
          <div
            className={`!important absolute left-0 z-50 flex w-full flex-col gap-7 bg-gray-50 pb-8 pl-8 pr-8 pt-5 shadow-md transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:flex-row md:items-center md:bg-white md:pb-0 md:pl-0 md:shadow-none ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            } opacity-0 md:opacity-100`}
          >
            <SignedIn>
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <select
                  className="w-16 bg-white"
                  onChange={handleLanguageChange}
                >
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.abbreviation}
                    </option>
                  ))}
                </select>
                {
                  // TODO: Create page for favorites, and also create a card to show when there are no favorites.
                }

                <div className="flex flex-col gap-4 md:hidden">
                  <p className="text-sm">
                    Signed in as:{" "}
                    <span className="font-bold">
                      {user?.emailAddresses[0].emailAddress}
                    </span>
                  </p>
                  <Link className="hover:text-teal-600" href="/favourites">
                    View Favorite Books
                  </Link>
                  <SignOutButton />
                </div>

                <Popover>
                  <PopoverTrigger className="hidden transition duration-300 hover:opacity-70 sm:block">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={user?.imageUrl}
                      alt="User image"
                    />
                  </PopoverTrigger>

                  <PopoverContent className="flex w-full flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={user?.imageUrl}
                        alt="User image"
                      />

                      <div>
                        <p className="text-sm font-bold">{user?.fullName}</p>
                        <p className="text-bold text-sm">
                          {user?.emailAddresses[0].emailAddress}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <Link className="hover:text-teal-600" href="/favourites">
                      See Favorite Books
                    </Link>
                    <SignOutButton />
                  </PopoverContent>
                </Popover>
              </div>
            </SignedIn>

            <SignedOut>
              <ul className="flex flex-col gap-7 md:static md:z-auto md:flex md:w-auto md:flex-row md:items-center md:gap-7">
                <select
                  className="w-16 bg-white"
                  onChange={handleLanguageChange}
                >
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.abbreviation}
                    </option>
                  ))}
                </select>
                <li className="w-24 cursor-pointer rounded-md border-2 border-teal-600 px-3 py-1.5 font-semibold transition-all duration-300 hover:bg-teal-600 hover:text-white">
                  <a href="/signup">SIGN UP</a>
                </li>
                <li className="w-24 cursor-pointer rounded-md border-2 px-3 py-1.5 font-semibold transition-all duration-300 hover:border-teal-600">
                  <a href="/signin">SIGN IN</a>
                </li>
              </ul>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
