import React from "react";
import Link from "next/link";
const CardNft = ({ tokenId, syncedAt, metadata }) => {
  const date = new Date(syncedAt).toLocaleDateString();

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {tokenId}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {date}
        </p>

        {!metadata ? (
          <Link href={`/mint-page-data/${tokenId}`}>
            <a className=" items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add content
            </a>
          </Link>
        ) : (
          <Link href={`/my-nft/${tokenId}`}>
            <a
              className=" items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank"
              rel="noopener"
            >
              Preview
            </a>
          </Link>
        )}
      </div>
    </div>
    // <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    //   <div className="px-6">
    //     <p>{tokenId}</p>
    //     <p>{date}</p>
    //     {!metadata && <p>No metadata</p>}
    //     {!metadata && (
    //       <Link href={`/mint-page-data/${tokenId}`}>
    //         <a>Add Content</a>
    //       </Link>
    //     )}
    //   </div>
    // </div>
  );
};

export default CardNft;
