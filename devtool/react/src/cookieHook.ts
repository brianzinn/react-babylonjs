import { useCookies } from 'react-cookie'

export const useRememberCookieState = <TValue extends any>(
  defaultValue: TValue,
  key = ''
): [value: TValue, setValue: (value: TValue) => void] => {
  const [cookies, setCookies] = useCookies()

  const _set = (value: TValue) => {
    const save = { _v: value }
    // console.log(key, 'setting', save)
    setCookies(key, save)
  }

  const _v = (() => {
    const _v = cookies[key]
    // console.log(key, 'get', 'existing', { _v })
    if (typeof _v === 'undefined') {
      // console.log(key, 'get', 'default', defaultValue)
      return defaultValue
    }
    return _v._v
  })()

  return [_v, _set]
}

type CookieState<TValue extends any> = (
  defaultValue: TValue,
  guid?: string
) => [TValue, (value: TValue) => void]

export const createCookieHooker = <TValue extends any>(name: string) => {
  const useFunc: CookieState<TValue> = (defaultValue, guid = '') => {
    const [value, set] = useRememberCookieState<TValue>(defaultValue, `${guid}_${name}`)

    return [value, set]
  }
  return useFunc
}
