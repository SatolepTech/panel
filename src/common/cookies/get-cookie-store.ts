import { cookies } from 'next/headers'

export async function cookieStore() {
  return await cookies()
}
