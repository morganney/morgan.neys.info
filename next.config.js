/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack(cfg) {
    cfg.experiments = { ...cfg.experiments, topLevelAwait: true }

    return cfg
  },
}

export default nextConfig
