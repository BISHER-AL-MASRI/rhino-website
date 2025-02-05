/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ub2r',
        destination: 'https://raw.githubusercontent.com/rhino-linux/os/refs/heads/main/ub2r.sh',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
