import React, { useRef, useReducer } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer";
import { useRouter } from "next/router";
import { useMoralisCloudFunction } from "react-moralis";
import { Web3Storage } from "web3.storage";

import { toPng } from "html-to-image";
import { dataURLtoFile } from "../../helpers";

const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3_TOKEN });

console.log(process.env.NEXT_PUBLIC_WEB3_TOKEN);
const initialState = {
  name: "",
  title: "",
  subtitle: "",
  about: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update_input":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};
const Purchase = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef(null);

  const router = useRouter();
  const tokenId = router.query.tokenId;

  const { fetch, isLoading: updateIsLoading } =
    useMoralisCloudFunction("updateData");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (ref.current === null) {
      return;
    }

    const { about, name, subtitle, title } = state;
    const dataUrl = await toPng(ref.current, { cacheBust: true });
    //Usage example:
    const file = dataURLtoFile(dataUrl, `myPage${tokenId}.png`);
    console.log(file);

    const rootCid = await client.put([file]).catch((err) => {
      console.log(err);
    });
    console.log(rootCid);
    console.log(`https://dweb.link/ipfs/${rootCid}/myPage${tokenId}.png`);
    fetch({
      params: {
        title,
        subtitle,
        name,
        aboutMe: about,
        image: `https://dweb.link/ipfs/${rootCid}/myPage${tokenId}.png`,
        tokenId: +router.query.tokenId,
      },
    }).then(() => {
      alert("You have submitted the form.");
    });
  };
  if (!router.query.tokenId) {
    return null;
  }
  return (
    <>
      <IndexNavbar fixed />
      <div className="px-4 bg-blueGray-800 " style={{ minHeight: "80vh" }}>
        <div className="pt-48 ">
          <div className="w-full lg:w-12/12 md:flex-wrap px-20 flex">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
              <form onSubmit={handleSubmit}>
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Lets mint an NFT</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Complete this form and you will update your NFT.
                  </p>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={state.name}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          value: e.target.value,
                          key: "name",
                        })
                      }
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={state.title}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          value: e.target.value,
                          key: "title",
                        })
                      }
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Title"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="subtitle"
                    >
                      Subtitle
                    </label>
                    <input
                      type="text"
                      name="subtitle"
                      value={state.subtitle}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          value: e.target.value,
                          key: "subtitle",
                        })
                      }
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Subtitle"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="about"
                    >
                      About
                    </label>
                    <textarea
                      rows="4"
                      name="about"
                      value={state.about}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          value: e.target.value,
                          key: "about",
                        })
                      }
                      cols="80"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="About..."
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      disabled={updateIsLoading}
                    >
                      Mint page data
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
              <div className="px-6" ref={ref}>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {state.title}
                  </h3>
                  <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {state.subtitle}
                  </div>
                  <div className="text-xl mb-2 text-blueGray-600 mt-10">
                    {state.name}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-4xl leading-relaxed text-blueGray-700">
                        {state.about}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
