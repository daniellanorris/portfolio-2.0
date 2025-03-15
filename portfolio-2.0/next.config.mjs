/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['image-cdn-ak.spotifycdn.com', 'mosaic.scdn.co', 'image-cdn-fa.spotifycdn.com', 'upload.wikimedia.org', 'i.scdn.co'],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
  }}

export default nextConfig;
