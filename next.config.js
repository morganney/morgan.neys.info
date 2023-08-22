/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack(cfg) {
    cfg.experiments = { ...cfg.experiments, topLevelAwait: true }

    return cfg
  },
}

if (process.env.NODE_STAGE === 'pages') {
  nextConfig.basePath = '/morgan.neys.info'
}

export default nextConfig
