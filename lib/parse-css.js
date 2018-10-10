/**
 * Parses an array of strings from a template string into an object.
 */
export const parseCSS = (strings, props, funcs) => {
  if (props) {
    for (const propKey of Object.keys(props)) {
      const camelCaseKey = propKey.replace(/-([a-z])/g, g => g[1].toUpperCase())
      props[camelCaseKey] = props[propKey]
    }
  } else {
    props = {}
  }
  return strings
    .reduce((acc, cur, i) => {
      return acc + cur + (funcs[i] ? funcs[i](props) : '')
    }, '')
    .replace(/\n/g, '')
    .split(';')
    .reduce((acc, cur) => {
      const [key, value] = cur.split(':').map(x => x.trim())
      acc[key] = value
      return acc
    }, {})
}