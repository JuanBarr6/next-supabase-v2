import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    serverActions: true,
  },
  middleware: {
    matcher: ["/protected/:path*"], // Asegúrate de incluir la ruta protegida
  },
};

export default nextConfig;
