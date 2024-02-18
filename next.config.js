/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
