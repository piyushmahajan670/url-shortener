import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/:shortId",
        destination: "http://localhost:3000/:shortId",
      },
      {
        source: "/api/:path",
        destination: "http://localhost:3000/:path",
      },
    ];
  },
};

export default nextConfig;
