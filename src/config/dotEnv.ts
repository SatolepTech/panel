export const dotEnv = {
  api: {
    baseUrl: process.env[`NEXT_PUBLIC_API_URL`] as string,
    graphqlUrl: process.env[`NEXT_PUBLIC_API_URL`] + '/graphql'
  },
  nodeEnv: process.env[`NODE_ENV`] as string
}
