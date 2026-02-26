/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://godev.studio https://*.godev.studio https://godevstudio.com.br https://*.godevstudio.com.br https://*.vercel.app https://*.cursor.com https://*.cursor.sh https://localhost:3000 http://localhost:3000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
