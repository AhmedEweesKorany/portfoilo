/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent.fcai20-4.fna.fbcdn.net',
          },
        ],
      },
    
}

module.exports = nextConfig
