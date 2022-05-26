import React from "react";
import Link from "next/link";

const CardNft = ({ tokenId, syncedAt, metadata }) => {
  const date = new Date(syncedAt).toLocaleDateString();
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
      <div className="px-6">
        <p>{tokenId}</p>
        <p>{date}</p>
        {!metadata && <p>No metadata</p>}
        {!metadata && (
          <Link href={`/update-page/${tokenId}`}>
            <a>Add Content</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardNft;
