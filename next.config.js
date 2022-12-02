/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    additionalData: `@import "assets/styles/globals/_variables.scss";@import "assets/styles/globals/_animations.scss";`,
  },
};

module.exports = nextConfig;