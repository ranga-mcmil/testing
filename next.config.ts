import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {

    remotePatterns: [
      {
          protocol: "https",
          hostname: "avatar.vercel.sh"
      },
  ]
  },

  /* config options here */
};

export default nextConfig;
