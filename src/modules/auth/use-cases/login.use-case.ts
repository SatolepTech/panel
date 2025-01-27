import { AuthClient } from '../auth.client'

export function LoginUseCase() {
  const authClient = AuthClient()

  async function execute(args: LoginArgs) {
    const result = await authClient.login(args)

    if (result.error) {
      return {
        data: null,
        error: 'Usuário não encontrado ou senha inválida.'
      }
    }

    if (result.data) {
      return { data: result.data, error: null }
    }

    return { data: null, error: 'Não foi possível logar.' }
  }

  return { execute }
}
