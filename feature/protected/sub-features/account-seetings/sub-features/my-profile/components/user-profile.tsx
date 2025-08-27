import React from "react";
import { BtnEdit } from "../../../components/btn-edit";
import { Avatar } from "../../../components/avatar";
export const UserProfile = () => {
  return (
    <div className="h-auto w-full flex justify-between bg-white text-black rounded-lg border border-gray-200 p-4">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Avatar
          imageUrl="https://cdn-icons-png.flaticon.com/512/4792/4792929.png"
          bgColor="bg-purple-300"
          size={80}
        />
        <div className="flex flex-col text-center md:text-left">
          <p className="font-bold">Rafiqur Rahman</p>
          <p>Team Manager</p>
          <p>Leeds, United Kingdom</p>
        </div>
      </div>

      <BtnEdit />
    </div>
  );
};
