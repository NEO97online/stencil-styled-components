import domElements from './lib/utils/domElements'
import createElement from './lib/create-element'
import { ThemeContext } from './lib/create-provider'

// styled custom components
function styled(el) {
  return createElement(el)
}

for (const tag of domElements) {
  styled[tag] = createElement(tag)
}

export const ThemeProvider = ThemeContext.Provider;
export default styled
