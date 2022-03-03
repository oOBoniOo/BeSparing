/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: '/aaaaa',
      //   destination: '/',
      //   permanent: false,
      // },
    ];
  },
};

module.exports = nextConfig;
