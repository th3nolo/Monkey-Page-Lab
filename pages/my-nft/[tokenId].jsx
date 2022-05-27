import React, { useEffect } from "react";
import { useRouter } from "next/router";

const MyNft = () => {
  const router = useRouter();
  const tokenId = router.query.tokenId;
  useEffect(() => {
    if (tokenId) {
      fetch(`https://monkeylab.herokuapp.com/api/token/${tokenId}`);
    }
  }, [tokenId]);
  
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
      <div className="px-6">
        <div className="text-center mt-12">
          <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
            {"  {state.title}"}
          </h3>
          <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            {"  {state.subtitle}"}
          </div>
          <div className="text-xl mb-2 text-blueGray-600 mt-10">
            {"  {state.name}"}
          </div>
        </div>
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-4xl leading-relaxed text-blueGray-700">
                {"  {state.about}"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNft;
