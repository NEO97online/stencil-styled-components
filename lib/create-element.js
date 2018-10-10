import { parseCSS }  from './parse-css'

export const createElement = (Tag) => {
  return (strings) => {
    return (props, children) => (
      h(Tag, { style: parseCSS(strings) }, children)
    )
  }
}