# Stencil Styled-Components

Small library to bring the concept of [styled-components](https://github.com/styled-components/styled-components) to StencilJS.

## Installation

```
npm i stencil-styled-components
```

## Usage

```tsx
import { Component } from '@stencil/core'
import styled from 'stencil-styled-components'

const StyledDiv = styled.div`
  display: inline-block;
  background-color: ${props => props.invert ? 'black' : 'white'};
  color: ${props => props.invert ? 'white' : 'black'};
  width: 100px;
  height: 100px;

  &:hover {
    border: 1px solid #448aff;
  }
`

@Component({
  tag: 'my-component'
})
export class MyComponent {
  render() {
    return (
      <div>
        <StyledDiv>
          <span>Hey, I'm styled!</span>
        </StyledDiv>
        <StyledDiv invert>
          <span>Hey, I'm inverted with a prop!</span>
        </StyledDiv>
      </div>
    )
  }
}
```