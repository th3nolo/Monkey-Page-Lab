/* eslint-disable @next/next/no-img-element */
import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useMoralis, useNFTBalances } from "react-moralis";
import CardNft from "components/Cards/CardNft";
import { abi } from "const/abi";

export default function Profile() {
  const { account } = useMoralis();
  const { data, isLoading } = useNFTBalances({
    abi: abi,
    contractAddress: "0x0d092C42e0208d7D5147675E937205520244a967",
  });

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/img/monkeyLab/monkeylab-banner.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
        </section>

        {!isLoading && data ? (
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src="/img/monkeyLab/monkeylab-profile.png"
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8 lg:justify-start lg:mt-0 mt-12">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {data.total}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Nft Pages
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-0">
                    <h3 className="text-2xl font-semibold leading-normal text-blueGray-700 line-height-1">
                      {account}
                    </h3>
                  </div>
                  <div className="mt-4 py-6 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap w-full">
                      <div className="w-full px-4  grid grid-cols-3 gap-6">
                        {data.result.map((nft) => (
                          <CardNft
                            key={nft.id}
                            id={nft.id}
                            metadata={nft.metadata}
                            tokenId={nft.token_id}
                            syncedAt={nft.synced_at}
                          />
                        ))}
                        <CardNft />
                        <CardNft />
                        <CardNft />
                        <CardNft />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div>Loading...</div>
        )}
      </main>
      <Footer />
    </>
  );
}
