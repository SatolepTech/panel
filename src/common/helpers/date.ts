import {
  differenceInHours,
  format,
  intervalToDuration,
  isDate,
  parse,
  parseISO
} from 'date-fns'

export function dateIsGreaterThanOrEqualTo24h(date: string | Date) {
  const difference = differenceInHours(
    new Date(),
    parseDatetime(date)
  )

  return difference >= 24
}

export function formatDate(date: string | Date, mask = 'dd/MM/yyyy') {
  return format(new Date(date), mask, {
    // locale: ptBrLocale
  })
}

export function formatDatetime(
  date: string | Date,
  mask = 'dd/MM/yyyy HH:mm'
) {
  const parsedDate = new Date(date)
  if (isNaN(parsedDate.getTime())) {
    return ''
  }
  return format(parsedDate, mask, {
    // locale: ptBrLocale
  })
}

export function formatTime(date: string) {
  return format(parseISO(date), 'HH:mm')
}

export function formatTimeFromSeconds(secondsParam: number) {
  const minutes = Math.floor(secondsParam / 60)
  const seconds = secondsParam % 60
  return `${minutes}:${seconds > 9 ? seconds : '0' + seconds}`
}

export function getExpiresDateInOneDay() {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  return date
}

export function getIntervalToDuration(
  startDate: Date | undefined,
  endDate: Date | undefined
) {
  if (!startDate || !endDate) {
    return { color: 0, time: '-' }
  }

  const { days, hours, minutes, months, seconds, weeks, years } =
    intervalToDuration({
      start: startDate,
      end: endDate
    })

  const haveAtLeastOneDay = days && days > 0
  const haveAtLeastOneHour = hours && hours > 0
  const haveAtLeastOneMonth = months && months > 0
  const haveAtLeastOneWeek = weeks && weeks > 0
  const haveAtLeastOneYear = years && years > 0

  const totalSeconds =
    (days ?? 0) * 86400 +
    (hours ?? 0) * 3600 +
    (minutes ?? 0) * 60 +
    (seconds ?? 0)

  if (
    haveAtLeastOneYear ||
    haveAtLeastOneMonth ||
    haveAtLeastOneWeek ||
    haveAtLeastOneDay
  ) {
    const D = `${days ?? 0}D `
    const h = `${hours ?? 0}h`
    const M = haveAtLeastOneMonth ? `${months ?? 0}M ` : ''
    const S = haveAtLeastOneWeek ? `${weeks ?? 0}S ` : ''
    const A = haveAtLeastOneYear ? `${years ?? 0}A ` : ''

    return {
      seconds: totalSeconds,
      time: `${A}${M}${S}${D}${h}`
    }
  }

  const h = haveAtLeastOneHour
    ? `${getValueWithTwoDigits(hours)}:`
    : ''
  const m =
    minutes && minutes > 0
      ? `${getValueWithTwoDigits(minutes)}:`
      : '00:'
  const s =
    seconds && seconds > 0 ? getValueWithTwoDigits(seconds) : '00'

  return {
    seconds: totalSeconds,
    time: `${h}${m}${s}`
  }
}

export function getMonthDateRange() {
  const today = new Date()

  const firstDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  )
  const lastDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  )

  const formattedDate = (date: Date): string =>
    date.toLocaleDateString('pt-BR')

  return {
    beginDate: formattedDate(firstDayOfMonth),
    endDate: formattedDate(lastDayOfMonth)
  }
}

export function getTodayDate() {
  const date = new Date()
  return date.getDate()
}

export function getValueWithTwoDigits(value: number) {
  if (value > 9) {
    return value
  }

  return `0${value}`
}

/**
 * Checks if a given date string is in the Brazilian date format (DD/MM/YYYY).
 *
 * @param date - The date string to be checked.
 * @returns `true` if the date string is in the Brazilian date format, otherwise `false`.
 */
export function isBrazilianDateFormat(date: string): boolean {
  const brazilianDateRegex =
    /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
  return brazilianDateRegex.test(date)
}

export function parseDate(date: string | Date) {
  return isDate(date)
    ? (date as Date)
    : parse(date as string, 'dd/MM/yyyy', new Date(), {
        // locale: ptBrLocale
      })
}

export function parseDateISO(date: string) {
  return parseISO(date)
}

export function parseDatetime(date: string | Date) {
  return isDate(date)
    ? (date as Date)
    : parse(date as string, 'dd/MM/yyyy HH:mm', new Date(), {
        // locale: ptBrLocale
      })
}
