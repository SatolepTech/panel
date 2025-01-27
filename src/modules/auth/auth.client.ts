import { client } from '@infra/urql/client'

import {
  RegisterDocument,
  RegisterMutation,
  RegisterMutationVariables
} from './graphql/mutations/@generated/register.generated'
import {
  LoginDocument,
  LoginQuery,
  LoginQueryVariables
} from './graphql/queries/@generated/login.generated'

export function AuthClient() {
  async function login(args: LoginArgs) {
    const result = await client().query<
      LoginQuery,
      LoginQueryVariables
    >(LoginDocument, {
      identification: args.email,
      password: args.password
    })

    return result
  }

  async function register(args: RegisterArgs) {
    const result = await client().mutation<
      RegisterMutation,
      RegisterMutationVariables
    >(RegisterDocument, {
      company: {
        email: args.company.email,
        name: args.company.name
      },
      user: {
        email: args.user.email,
        name: args.user.name,
        password: args.user.password
      }
    })

    return result
  }

  return { login, register }
}
