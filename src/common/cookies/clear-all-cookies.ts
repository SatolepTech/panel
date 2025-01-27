import { cookieStore } from './get-cookie-store'

import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export async function clearAllCookies() {
  const allCookies: RequestCookie[] = (await cookieStore()).getAll()

  for (let index = 0; index < allCookies.length; index++) {
    const cookie = allCookies[index]
    cookieStore().then(store => store.delete(cookie.name))
  }
}
