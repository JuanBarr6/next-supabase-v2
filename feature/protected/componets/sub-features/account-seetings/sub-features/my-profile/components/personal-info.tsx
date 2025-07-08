import React from "react";
import { BtnEdit } from "../../../components/btn-edit";

export const PersonalInfo = () => {
  return (
    <div className="mt-5 h-auto w-full bg-white text-black rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between">
        <h1 className="text-black font-bold">Personal information</h1>
        <BtnEdit />
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-6">
        <div>
          <p className="text-sm text-gray-500">First Name</p>
          <p className="font-semibold">Rofiqur</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Last Name</p>
          <p className="font-semibold">Rahman</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email address</p>
          <p className="font-semibold">rofiqurrahman@gmail.com</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p className="font-semibold">+09 345 346 46</p>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-gray-500">Bio</p>
          <p className="font-semibold">Team Manager</p>
        </div>
      </div>
    </div>
  );
};
