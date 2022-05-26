/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import { useMoralis } from "react-moralis";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const { authenticate, isAuthenticated, account, logout } = useMoralis();
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase">
                <img
                  className="h-12 w-12 bg-white"
                  src="/img/monkeyLab/monkey-labs-logo.png"
                  alt="monkey page logo"
                />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {isAuthenticated ? (
                <li className="flex items-center">
                  <Link href="/profile">
                    <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                      My NFTs
                    </a>
                  </Link>
                </li>
              ) : null}

              <li className="flex items-center">
                {isAuthenticated ? (
                  <button
                    onClick={() => logout()}
                    className=" hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <i className="text-blueGray-400 far fa-user text-lg leading-lg mr-2" />{" "}
                    {account?.slice(0, 10)}...
                  </button>
                ) : (
                  <button
                    onClick={authenticate}
                    className=" hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    Sing in
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
