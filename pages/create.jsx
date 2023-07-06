import React from "react";
import Layout from "../components/Layout";

const Create = () => {
  return (
    <Layout>
      <div className="flex justify-center pt-20">
        <div className="w-1/2 flex flex-col pb-12">
          <input
            placeholder="Asset Name"
            className="mt-8 border rounded p-4"
            //value={formInput.name}
            //onChange={e => updateFormInput({...formInput, name: e.target.value})}
          />
          <textarea
            placeholder="Asset description"
            className="mt-2 border rounded p-4"
            //value={formInput.description}
            //onChange={e => updateFormInput({...formInput, description: e.target.value})}
          />
          <input
            placeholder="Min 0.001 ETH"
            className="mt-8 border rounded p-4"
            step="0.001"
            type="number"
            // value={formInput.price}
            //onChange={e => updateFormInput({...formInput, price: e.target.value})}
          />
          {/* <input
            type="file"
            name="Asset"
            className="my-4"
            //onChange={OnChangeFile}
          /> */}

          <label className="block pt-5 pb-5">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400"
            />
          </label>

          {/* <div className="text-green text-center">{message}</div> */}
          <button
            onClick={"listNFT"}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            List NFT
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Create;

{
  /* <div className="max-w-xl">
            <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  Drop files to Attach, or
                  <span className="text-blue-600 underline">browse</span>
                </span>
              </span>
                        
              <input 
              type="file" 
              name="Asset" 
              className="hidden" 
               //onChange={OnChangeFile}
               />
            </label>
          </div> */
}
