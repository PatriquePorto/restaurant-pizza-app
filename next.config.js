/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["res.cloudinary.com"],  //add your cloudinary url
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
