import { AuthService } from './auth.service'

export function AuthResolver() {
  const authService = AuthService()

  async function login(
    args: LoginArgs
  ): Promise<SuccessDto<{ token: string }>> {
    return await authService.login(args)
  }

  async function register(args: RegisterArgs): Promise<SuccessDto> {
    return await authService.register(args)
  }

  return { login, register }
}
