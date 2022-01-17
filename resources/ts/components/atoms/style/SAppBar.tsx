import { AppBar } from '@material-ui/core'
import styled from 'styled-components'
import media from '../../../styles/media'

export const SAppBar = styled(AppBar)`
  background: #201a22;
  color: #fff;
  /* padding: 5px 0; */

  height: 5vh;
  ${media.lg`
    height: 8vh;
    `}
  ${media.md`
    height: 10vh;
    `}
`
