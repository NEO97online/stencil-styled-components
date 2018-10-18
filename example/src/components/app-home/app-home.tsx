import { Component } from '@stencil/core';

import styled from '../../../../'

const StyledButton = styled.button`
  color: ${props => props.color};
  height: 50px;
  &:hover {
    color: red;
  }
`

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <StyledButton color="blue">
            Profile page
          </StyledButton>
          <StyledButton color="blue">
            Profile page
          </StyledButton>
          <StyledButton color="blue">
            Profile page
          </StyledButton>
          <StyledButton color="blue">
            Profile page
          </StyledButton>
        </stencil-route-link>
      </div>
    );
  }
}
