const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Orderflow' : '',
  assetPrefix: isProd ? '/Orderflow/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
