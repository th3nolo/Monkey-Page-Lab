/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Navbar from "components/Navbars/AuthNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const href = "/purchase";

  return (
    <>
      <IndexNavbar />
      <main>
        <div className="relative pt-48 pb-48 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/img/monkeyLab/monkeylab-banner.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Monkey Page Lab
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Entering our laboratory you are 4 easy steps away from
                    "minting" your own web page through the technology of NFTs.
                    Print your mark on the Blockchain and be part of the future
                    that is already here.
                  </p>
                  <Link href="/mint">
                    <button
                      className="mt-4 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Mint
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink">
                      1
                    </div>
                    <h6 className="text-xl font-semibold">
                      Connect to metamask
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      MetaMask is the trailblazing tool enabling user
                      interactions and experience on Web3. It is currently
                      available as a browser extension.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink">
                      2
                    </div>
                    <h6 className="text-xl font-semibold">Go to mint page</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Click the mint button, this will redirect you to a new
                      page and you will fill the form with the contents you'd
                      want to create.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink">
                      3
                    </div>
                    <h6 className="text-xl font-semibold">Hit mint</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Once you filled the form, you can hit mint and this will
                      create an NFT containing the data of your page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 flex justify-center">
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink">
                      4
                    </div>
                    <h6 className="text-xl font-semibold">
                      And wait a few minutes
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      You will be redirect to your profile, and find your new
                      NFT, where you can access to the page created.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white mb-12">
                  STEP BY STEP
                </h2>
              </div>
            </div>
            <div
              className="w-full h-full bg-center bg-cover rounded-lg"
              style={{ borderRadius: "5px" }}
              // style={{
              //   backgroundImage: "url('/img/monkeyLab/monkeylab-info.svg')",
              // }}
            >
              <img src="/img/monkeyLab/monkeylab-info.svg" />
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">Name</h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Customize your name or the project name.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Title & subtitle
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Add a striking and friendly title and complement it with some
                  great phrase!
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">About</h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Tell us more about yourself or your project, enhance your
                  brightest ideas!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
