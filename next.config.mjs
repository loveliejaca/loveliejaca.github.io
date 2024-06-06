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
  env: {
    NEXT_PUBLIC_AIRTABLE_API_KEY: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
    NEXT_PUBLIC_AIRTABLE_BASE_ID: process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID,
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
