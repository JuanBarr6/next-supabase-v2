"use client";

import { useSearchParams } from "next/navigation";

export default function Security() {
  const searchParams = useSearchParams();
  const fromNavbar = searchParams.get("from") === "navbar";

  return (
    <div className="text-black ml-30">
      <p>Esto es Security</p>

      {fromNavbar && (
        <div className="p-4 mt-4 bg-blue-100 border border-blue-300 rounded-xl text-blue-800 w-3/4">
          🔐 Security Card: Tarjeta de prueba.
        </div>
      )}
    </div>
  );
}
