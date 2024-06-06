/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
    includePaths: ['styles'],
  },
  // exportTrailingSlash: true,
  // exportPathMap: async () => {
  //   return {
  //     '/': { page: '/' },
  //   };
  // },
  output: "export",  // <=== enables static exports
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
