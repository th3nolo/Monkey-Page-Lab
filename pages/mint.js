import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { useWeb3ExecuteFunction } from "react-moralis";
import { abi } from "const/abi";
import Modal from "components/Modal/Modal";

const Mint = () => {
  const { data, error, fetch, isFetching, isLoading, setData } =
    useWeb3ExecuteFunction({
      abi: abi,
      contractAddress: "0x1BD06A547113226b7a646DD97b7fDCFe372af018",
      functionName: "safeMint",
    });

  const errorMessage =
    error &&
    "An unexpected error has occurred, make sure you have metamask installed";

  console.log("error", error);
  const onMint = () => {
    setData(undefined);
    fetch();
  };
  console.log(data);
  return (
    <>
      <IndexNavbar />
      <Modal
        showModal={Boolean(data)}
        onClose={() => {
          setData(undefined);
        }}
        title="Successfull Mint"
      >
        <p className="my-6">
          Your nft has been minted successfully. You can check your new NFT on
          your dashboard in about 2 minutes.
        </p>
      </Modal>
      <div className=" pt-48 px-4 bg-blueGray-800 h-screen grid content-center z">
        <div className="px-4 pt-48 ">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Lets mint an NFT</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Complete this form and you will get your NFT.
                  </p>

                  <div className="text-center mt-6">
                    {error && <p className="text-red-500">{errorMessage}</p>}
                    {isFetching || isLoading ? (
                      <div className="text-center">
                        <div
                          className="spinner-border text-blueGray-500"
                          role="status"
                        >
                          Loading...
                        </div>
                      </div>
                    ) : (
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={onMint}
                      >
                        Mint
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mint;
