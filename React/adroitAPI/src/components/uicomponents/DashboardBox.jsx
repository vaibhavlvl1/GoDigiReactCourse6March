import React from "react";

function DashboardBox({ status, summary }) {
  let toReturn = "";

  const Booked = (
    <div className="w-64 h-40 p-4 bg-white border-b-4 border-green-500 flex justify-center items-center flex-col">
      <h1 className="text-2xl text-green-500 border-b-2 border-gray-200 w-full text-center mb-2 mt-2">
        {summary}
      </h1>
      <hr />
      <h3 className="font-bold"> BOOKED </h3>
      <p className="">Onshore</p>
    </div>
  );

  const OHQ = (
    <div className="w-64 h-40 p-4 bg-white border-b-4 border-red-500 flex justify-center items-center flex-col">
      <h1 className="text-2xl text-red-500 border-b-2 border-gray-200 w-full text-center mb-2 mt-2">
        {summary}
      </h1>
      <hr />
      <h3 className="font-bold"> OHQ </h3>
      <p className="">Onshore</p>
    </div>
  );

  const Production = (
    <div className="w-64 h-40 p-4 bg-white border-b-4 border-blue-500 flex justify-center items-center flex-col">
      <h1 className="text-2xl text-blue-500 border-b-2 border-gray-200 w-full text-center mb-2 mt-2">
        {summary}
      </h1>
      <hr />
      <h3 className="font-bold"> PRODUCTION </h3>
      <p className="">Offshore</p>
    </div>
  );

  const Received = (
    <div className="w-64 h-40 p-4 bg-white border-b-4 border-red-500 flex justify-center items-center flex-col">
      <h1 className="text-2xl text-red-500 border-b-2 border-gray-200 w-full text-center mb-2 mt-2">
        {summary}
      </h1>
      <hr />
      <h3 className="font-bold"> RECEIVED </h3>
      <p className="">Onshore</p>
    </div>
  );

  if (status == "received") {
    toReturn = Received;
  } else if (status == "production") {
    toReturn = Production;
  } else if (status == "booked") {
    toReturn = Booked;
  } else {
    toReturn = OHQ;
  }

  return toReturn;
}

export default React.memo(DashboardBox);
