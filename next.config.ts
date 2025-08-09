import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverComponentsHmrCache: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kzoucxnstpairlwltqct.supabase.co",
      },
    ],
  },
};

export default nextConfig;
