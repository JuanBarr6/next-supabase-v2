import React from "react";
interface AvatarProps {
  imageUrl: string;
  bgColor?: string;
  size?: number;
}

export const Avatar = ({
  imageUrl,
  bgColor = "bg-purple-600",
  size = 70,
}: AvatarProps) => {
  return (
    <div className="w-[100px] h-[100px] ">
      <div
        className={`rounded-full overflow-hidden ${bgColor} flex items-center justify-center`}
        style={{ width: size, height: size }}
      >
        <img
          src={imageUrl}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
