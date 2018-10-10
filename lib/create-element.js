import { parseCSS }  from './parse-css'

export const createElement = (Tag) => {
  return (strings, ...values) => {
    return (props, children) => {
      return h(Tag, { style: parseCSS(strings, props, values) }, children)
    }
  }
}