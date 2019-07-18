import './vendor/stylis/stylis.min'

// create a <style> tag which will hold all our component styles
const sheet = document.createElement('style')
document.head.appendChild(sheet)

const styleCache = {}

/**
 * Parses an array of strings from a template string into an object.
 */
export const injectStyles = (componentId, strings, props = {}, funcs) => {
  // convert hyphenated props to camelCase props
  for (const propKey of Object.keys(props || {})) {
    const camelCaseKey = propKey.replace(/-([a-z])/g, g => g[1].toUpperCase())
    props[camelCaseKey] = props[propKey]
  }

  if (!props) {
    props = {}
  }

  // runs all functions inside the css template, reducing down to pure css
  const css = strings.reduce((acc, cur, i) => {
    return acc + cur + ((funcs[i] && typeof funcs[i] === 'function') ? funcs[i](props) : (funcs[i] || ''))
  }, '')

  // clear style if exists
  if (styleCache[componentId] != null) {
    sheet.innerHTML = sheet.innerHTML.replace(styleCache[componentId], '')
  }

  // parse the rule with stylis and add to our <style> tag
  const rule = stylis('html /deep/ .' + componentId, css)
  sheet.innerHTML += rule

  // save in cache last style
  styleCache[componentId] = rule
}
