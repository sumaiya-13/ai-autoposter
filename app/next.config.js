/** @type {import('next').NextConfig} */
const nextConfig = {
  // 💡 This is the crucial part that ensures these server variables
  // are defined for the build and module evaluation processes.
  env: {
    // Note: These must match the keys you are using in .env.local
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },
};

module.exports = nextConfig;