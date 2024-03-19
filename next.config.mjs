/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "bn-BD"],
    defaultLocale: "bn-BD",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
    ],
  },
};

export default nextConfig;
