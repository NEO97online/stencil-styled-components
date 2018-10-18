import domElements from './lib/utils/domElements'
import createElement from './lib/create-element'

const styled = {}

for (const tag of domElements) {
  styled[tag] = createElement(tag)
}

export default styled