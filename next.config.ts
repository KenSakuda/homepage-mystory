/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/analytics/consulting",
        destination: "/analytics/consulting",
        permanent: true,
      },
      {
        source: "/services/analytics/pricing",
        destination: "/analytics/pricing",
        permanent: true,
      },
      {
        source: "/services/analytics/image-recognition",
        destination: "/analytics/image-recognition",
        permanent: true,
      },
      {
        source: "/services/analytics/people-analytics",
        destination: "/analytics/people-analytics",
        permanent: true,
      },
      {
        source: "/services/analytics/research",
        destination: "/analytics/research",
        permanent: true,
      },
      {
        source: "/services/analytics/share-prediction",
        destination: "/analytics/share-prediction",
        permanent: true,
      },
      {
        source: "/services/analytics/tools",
        destination: "/analytics/tools",
        permanent: true,
      },
      {
        source: "/services/analytics/ai-agent",
        destination: "/analytics/ai-agent",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
