/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
const CardNft = ({ attributes }) => {
  const date = attributes.createdAt.toLocaleDateString();
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         Nft page #{attributes.tokenId}
        </h5>
        {Boolean(attributes.image) ? (
          <div
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              alt="..."
              src={attributes.image}
              className="rounded-full border-none shadow-xl"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        ) : (
          <div
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              alt="..."
              src="/img/monkeyLab/monkeylab-white.png"
              className="rounded-full border-none shadow-xl"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        )}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-8 mb-4 font-bold">
          {date}
        </p>

        {!attributes.name ? (
          <Link href={`/mint-page-data/${attributes.tokenId}`}>
            <a className=" items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add content
            </a>
          </Link>
        ) : (
          <Link href={`/my-nft/${attributes.tokenId}`}>
            <a
              className=" items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank"
              rel="noopener"
            >
              Visit
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardNft;
