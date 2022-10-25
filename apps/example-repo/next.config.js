/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["ui", "math-helpers"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig)
