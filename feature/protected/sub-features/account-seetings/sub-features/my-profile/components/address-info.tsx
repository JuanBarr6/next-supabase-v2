import React from "react";
import { BtnEdit } from "../../../components/btn-edit";
export const AddressInfo = () => {
  return (
    <div className="mt-5 h-auto w-full bg-white text-black rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between">
        <h1 className="text-black font-bold">Address</h1>
        <BtnEdit />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-6">
        <div>
          <p className="text-sm text-gray-500">Country</p>
          <p className="font-semibold">United Kingdom</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">City/State</p>
          <p className="font-semibold">Leeds, East London</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Postal code</p>
          <p className="font-semibold">ERT 2354</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">TAXID</p>
          <p className="font-semibold">AS45645756</p>
        </div>
      </div>
    </div>
  );
};
