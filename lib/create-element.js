import { h } from '@stencil/core';
import { injectStyles }  from './inject-styles'
import hash from './utils/hash'
import generateAlphabeticName from './utils/generateAlphabeticName'
import { ThemeContext } from "./create-provider";

let counter = 0
export default (Tag) =>
  (strings, ...values) => {
    return (props, children) => {
      // generate a unique component ID
      counter++
      const componentId = 'ssc-' + generateAlphabeticName(hash('ssc' + counter))
      
      // consume and generate styles
      return h(ThemeContext.Consumer, {}, (theme) => {
        // inject styles into stylesheet 
        injectStyles(componentId, strings, {...props, theme}, values)

        return h(Tag, { 
          ...props, 
          class: [props.class, componentId].filter(x => !!x).join(' '), 
          ref: (props && props.ref) 
        }, children)
      })
    }
  }