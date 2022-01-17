require('./bootstrap')

import { VFC } from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import { StylesProvider } from '@material-ui/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './assets/styles/theme'
import { ComponentRouter } from './router/ComponentRouter'
import { SetInitialState } from './state/SetInitialState'
import styled from 'styled-components'

export const App: VFC = () => {
  return (
    <RecoilRoot>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <SComponentContainer>
            <SetInitialState>
              <ComponentRouter />
            </SetInitialState>
          </SComponentContainer>
        </MuiThemeProvider>
      </StylesProvider>
    </RecoilRoot>
  )
}

const SComponentContainer = styled.div`
  //色の指定
  color: white;
  background-color: #423c3c;
`

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'))
}
