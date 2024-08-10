/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GIT_TOKEN: process.env.GIT_TOKEN,
    URL_GIT: process.env.URL_GIT,
  },
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
