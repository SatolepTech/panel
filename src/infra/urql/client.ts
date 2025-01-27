import { dotEnv } from '@config/dotEnv'

import { GraphQLClient } from '@@types/GraphQLClient'
import { GraphQLClientParams } from '@@types/GraphQLClientParams'
import { cacheExchange, Client, fetchExchange } from 'urql'

export function client(params?: GraphQLClientParams): GraphQLClient {
  const headers: ClientHeaders = {}

  const token = undefined // cookies.token.get()
  if (token) {
    headers.authorization = `bearer ${token}`
  }

  return new Client({
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => ({
      cache: params?.cache || 'default',
      headers
    }),
    url: dotEnv.api.graphqlUrl
  })
}
