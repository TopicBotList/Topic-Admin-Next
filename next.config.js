/**
 * NEXT.JS CONFIGURATION FILE
 * ==========================
 */

/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  register: true,
  dest: "public",
  disable: process.env.NODE_ENV == "development",
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true' ? true : false,
  openAnalyzer: false
});

const nextConfig = {
  async headers() {
      return [
          {
              source: "https://k02hrtapiv5j.topiclist.xyz/:path*",
              headers: [
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" },
                  { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                  { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
              ]
          }
      ]
  }
}

module.exports = nextConfig

module.exports = withBundleAnalyzer(
  withPWA({
      swcMinify: true,
      compress: true,
      optimizeFonts: true,
      images: {
          formats: ["image/avif", "image/webp"],
          dangerouslyAllowSVG: true,
          unoptimized: true,
          remotePatterns: [
              {
                  protocol: "https",
                  hostname: "cdn.topiclist.xyz",
              },
              {
                  protocol: "https",
                  hostname: "beta.cordx.lol",
              },
          ],
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 100, 128, 150, 256, 384],
      },
  })
);
