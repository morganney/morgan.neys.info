export const getBasePath = () => {
  return process.env.NEXT_PUBLIC_NODE_STAGE === 'pages' ? '/morgan.neys.info/' : '/'
}
