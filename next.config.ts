import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.asmedia.epimg.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects(){
    return [{
      source:"/messages",
      destination:"/",
      permanent:true
    }]
  }
};

export default nextConfig;
