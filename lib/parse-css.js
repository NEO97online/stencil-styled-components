/**
 * Parses an array of strings from a template string into an object.
 */
export const parseCSS = (strings) => {
  const cssStrings = strings.join().replace(/\n/g, '').split(';')
  const obj = {}
  for (const str of cssStrings) {
    const [key, value] = str.split(':')
    if (key && value) {
      obj[key.trim()] = value.trim()
    }
  }
  return obj
}