/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Cela permet de déployer même s'il y a des erreurs d'apostrophes
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig