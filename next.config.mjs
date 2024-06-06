/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
    includePaths: ['styles'],
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
