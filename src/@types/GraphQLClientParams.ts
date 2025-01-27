import { NextRequest } from 'next/server'

export type GraphQLClientParams = {
  cache?: RequestCache
  req?: NextRequest | null
}
