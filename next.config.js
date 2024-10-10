/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack(cfg, { isServer }) {
    cfg.target = isServer ? ['node'] : ['web']
    cfg.experiments = { ...cfg.experiments, topLevelAwait: true }

    return cfg
  },
}

export default nextConfig
