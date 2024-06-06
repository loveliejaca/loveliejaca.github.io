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
  reactStrictMode: true,
};

export default nextConfig;
