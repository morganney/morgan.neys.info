/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack(cfg) {
    cfg.experiments = { ...cfg.experiments, topLevelAwait: true }

    return cfg
  },
}

export default nextConfig
