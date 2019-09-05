import Cookie from 'js-cookie'

export function setCookie(name, value) {
  return Cookie.set(name, value)
}

export function getCookie(name) {
  return Cookie.get(name)
}

export function removeCookie(name) {
  return Cookie.remove(name)
}
