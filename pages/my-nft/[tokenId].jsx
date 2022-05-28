import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MyNft = () => {
  const router = useRouter();
  const tokenId = router.query.tokenId;
  const [nftData, setNftData] = useState();

  const getNftData = async () => {
    const response = await fetch(
      `https://monkeylab.herokuapp.com/api/token/${tokenId}`
    ).then((response) => response.json());

    setNftData(response);
  };

  useEffect(() => {
    if (tokenId) {
      getNftData();
    }
  }, [tokenId]);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
      <div className="px-6">
        <div className="text-center mt-12">
          <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
            {nftData?.attributes.title}
          </h3>
          <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            {nftData?.attributes.subtitle}
          </div>
          <div className="text-xl mb-2 text-blueGray-600 mt-10">
            {nftData?.attributes.name}
          </div>
        </div>
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-4xl leading-relaxed text-blueGray-700">
                {nftData?.attributes.aboutMe}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNft;
