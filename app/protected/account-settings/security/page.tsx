"use client";
import { useSearchParams } from "next/navigation";

export default function Security() {
  const searchParams = useSearchParams();
  const mensaje = searchParams.get("mensaje");

  return (
    <div className="text-black p-4">
      <h2 className="font-bold text-lg">Esto es Security</h2>
      <div className="bg-white p-4 rounded shadow">
        <p className="text-black">
          {mensaje
            ? `Mensaje recibido: ${mensaje}`
            : "No se recibió ningún mensaje"}
        </p>
      </div>
    </div>
  );
}
