export const row = (container, styles = '') => {
  return `<div class="row" style="${styles}">${container}</div>`
}

export const col = (container) => `<div class="col-sm">${container}</div>`

export const css = (styles = {}) => {
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}


