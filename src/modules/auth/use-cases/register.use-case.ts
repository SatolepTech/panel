import { AuthClient } from '../auth.client'

export function RegisterUseCase() {
  const authClient = AuthClient()

  async function execute(args: RegisterArgs) {
    const result = await authClient.register(args)

    if (result?.data) {
      return { data: result.data, error: null }
    }

    return { data: null, error: 'Não foi possível registrar.' }
  }

  return { execute }
}
