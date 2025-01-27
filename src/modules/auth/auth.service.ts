import { cookies } from '@common/cookies'

import { LoginUseCase } from './use-cases/login.use-case'
import { RegisterUseCase } from './use-cases/register.use-case'

export function AuthService() {
  const loginUseCase = LoginUseCase()
  const registerUseCase = RegisterUseCase()

  async function login(
    args: LoginArgs
  ): Promise<SuccessDto<{ token: string }>> {
    const { data: loginData, error: loginError } =
      await loginUseCase.execute(args)

    if (!loginData || loginError) {
      return {
        data: null,
        error: loginError || 'Ocorreu um erro ao logar.',
        success: false
      }
    }

    const token = loginData.login.token
    cookies.token.set(token)

    return {
      data: {
        token: loginData.login.token
      },
      error: null,
      success: true
    }
  }

  async function register(args: RegisterArgs): Promise<SuccessDto> {
    const { data: registerData, error: registerError } =
      await registerUseCase.execute(args)

    if (!registerData || registerError) {
      return {
        data: null,
        error: 'Ocorreu um erro ao registrar.',
        success: false
      }
    }

    return {
      data: null,
      error: null,
      success: true
    }
  }

  return { login, register }
}
