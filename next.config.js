/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/services/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
