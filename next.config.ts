import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.URL_IMAGES_CONFIG || "",
        port: "",
        pathname: "/t/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
