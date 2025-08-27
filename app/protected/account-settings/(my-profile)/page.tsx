"use client";
import { UserProfile } from "@/feature/protected/sub-features/account-seetings/sub-features/my-profile/components/user-profile";
import { PersonalInfo } from "@/feature/protected/sub-features/account-seetings/sub-features/my-profile/components/personal-info";
import { AddressInfo } from "@/feature/protected/sub-features/account-seetings/sub-features/my-profile/components/address-info";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MyProfile() {
  const router = useRouter();
  const [mensaje, setMensaje] = useState("");

  const handleTesRender = () => {
    const encoded = encodeURIComponent(mensaje);
    router.push(`/protected/account-settings/security?mensaje=${encoded}`);
  };
  return (
    <div className="space-y-1 bg-white w-full h-full">
      <h1 className="font-bold">My Profile</h1>
      <div className="w-full flex flex-col bg-white text-black  p-4">
        <UserProfile />
        <PersonalInfo />
        <AddressInfo />
      </div>
      <div className="w-full flex flex-col bg-white text-black  p-4">
        <UserProfile />
        <PersonalInfo />
        <AddressInfo />
      </div>
      <div className="flex flex-col w-[500px] bg-white text-black gap-4 p-4">
        <input
          type="text"
          placeholder="Escribe un mensaje"
          className="border p-2 rounded text-black"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />

        <Button onClick={handleTesRender}>Enviar prueba</Button>
      </div>
    </div>
  );
}
