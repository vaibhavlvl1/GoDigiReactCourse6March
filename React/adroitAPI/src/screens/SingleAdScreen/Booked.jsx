import React from "react";

export default function Booked({ adStatus, adData }) {
  console.log(adData);
  const width = adData.ads_details.ad_width;
  const height = adData.ads_details.ad_height;
  return (
    <div className="w-full p-5 bg-gray-200">
      {/* ad details row with 4 columns */}
      <div className="flex flex-col sm:flex-col lg:flex-row gap-4">
        {/* ad detail box */}

        <div className=" lg-flex[2] flex-1 flex gap-4 bg-white p-3">
          <div className="w-full sm:w-1/2">
            <p>
              {" "}
              <span className="font-bold inline-block w-26">Ad Number : </span>
              {adData.ads_details.ad_number}{" "}
            </p>
            <p>
              <span className="font-bold  inline-block w-26">Ad Size : </span>
              {width && width} In x {height && height} In
            </p>

            <p>
              <span className="font-bold  inline-block w-26">Color : </span>
              {adData.ads_details.color}
            </p>

            <p>
              <span className="font-bold  inline-block w-26">Method : </span>
              {adData.ads_details.product}
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <p>
              <span className="font-bold  inline-block w-26">Pickup No : </span>
              {adData.ads_details.assign_pickup_number}
            </p>
            <p>
              <span className="font-bold  inline-block w-26">Booked By : </span>
              {adData.ads_details.booked_by}
            </p>
            <p>
              <span className="font-bold  inline-block w-26">Customer : </span>
              {adData.ads_details.customer}
            </p>
            <p>
              <span className="font-bold  inline-block w-26">Product : </span>
              {adData.ads_details.product_name}
            </p>
          </div>
        </div>

        <div className="flex  flex-col sm:flex-row flex-1 gap-4">
          <div className=" bg-white w-full sm:w-1/2 p-3">
            <div>
              <span>Inputs</span>
              <button className="bg-blue-800 text-white ps-3 pe-3 pt-1 pb-1 ms-1">
                Download All
              </button>
              <hr className="bg-gray-500 mt-2" />
              <div className="flex ">
                <div className="w-1/2">
                  <p>Revision</p>
                </div>
                <div className="w-1/2">
                  <p>Input Files</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 bg-white p-3">
            <div>
              <span>Inputs</span>
              <button className="s-3 pe-3 pt-1 pb-1 ms-1">OHQ</button>
              <hr className="bg-gray-500 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
