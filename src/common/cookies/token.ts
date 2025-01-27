'use server'

import {
  getExpiresDateInOneDay,
  parseDateISO
} from '@common/helpers/date'

import { cookies } from '.'
import { cookieStore } from './get-cookie-store'

export async function getTokenInCookies() {
  const token = (await cookieStore()).get(cookies.token.name)
  return token
}

export async function removeTokenInCookies() {
  return cookieStore().then(store =>
    store.delete(cookies.token.name).has(cookies.token.name)
  )
}

export async function setTokenInCookies(
  token: string | undefined,
  expiresIn?: string
) {
  if (!token) return false

  const expiresInDate = expiresIn
    ? parseDateISO(expiresIn)
    : getExpiresDateInOneDay()

  return cookieStore().then(store =>
    store
      .set(cookies.token.name, token, {
        expires: expiresInDate
      })
      .has(cookies.token.name)
  )
}
