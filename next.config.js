/** @type {import('next').NextConfig} */
const nextConfig = {
  // Supprime le bloc eslint s'il est mal placé ou utilise cette syntaxe :
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;