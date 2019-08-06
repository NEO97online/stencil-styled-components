let context = {};
let listeners = {};
export const ThemeContext = {
  Provider: function(props, children) {
    context = props.theme
    
    for (const fn of Object.values(listeners)) {
      fn(context)
    }
    
    return [children]
  },
  Consumer: function({ key }, [renderer]) {
    listeners[key] = renderer
    
    return renderer(context)
  }
};