export function deepBoolean(value: unknown): boolean {
  if (value === 'false' || value === 0 || !value) {
    return false
  }

  return Boolean(value)
}
