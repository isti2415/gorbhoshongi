import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.en.aleteia.org",
      },
      {
        protocol: "https",
        hostname: "media.post.rvohealth.io",
      },
      {
        protocol: "https",
        hostname: "pregnantchicken.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
