import { Component } from '@stencil/core';

import styled from '../../../../'

const StyledButton = styled.button`
  color: ${props => props.color};
`

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
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
        </stencil-route-link>
      </div>
    );
  }
}
