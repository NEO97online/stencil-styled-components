import { tags } from './lib/tags'
import { createElement } from './lib/create-element'

const styled = {}

for (const tag of tags) {
  styled[tag] = createElement(tag)
}

export default styled