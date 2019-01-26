import { injectStyles }  from './inject-styles'
import hash from './utils/hash'
import generateAlphabeticName from './utils/generateAlphabeticName'

let counter = 0

export default (Tag) =>
  (strings, ...values) => {
    
    return (props, children) => {
      // generate a unique component ID
      counter++
      const componentId = 'sc-' + generateAlphabeticName(hash('sc' + counter))
  
      // inject styles into stylesheet 
      injectStyles(componentId, strings, props, values)
      return h(Tag, { class: componentId, ref: (props && props.ref) }, children)
    }
  }