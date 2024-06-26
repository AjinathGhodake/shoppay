/** @type {import('next').NextConfig} */
const path =require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.seekpng.com','www.pngarts.com','avatars.githubusercontent.com','lh3.googleusercontent.com'],
  },
  sassOptions:{
    includePaths:[path.join(__dirname,"styles")],
    prependData:`@import "./base.scss";`,
  }
}

module.exports = nextConfig
