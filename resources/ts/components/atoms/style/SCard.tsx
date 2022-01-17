import { Card } from '@material-ui/core'
import styled from 'styled-components'
import media from '../../../styles/media'

export const SCard = styled(Card)`
  border: solid 4px #2d2d31;
  border-radius: 10px;
  background-color: #55555a;
  color: #f0f0f0;
  height: 100%;
  box-sizing: border-box;

  padding: 15px;
  font-size: 24px;
  ${media.lg`
    padding: 10px;
    font-size: 22px;
    `}
  ${media.md`
    padding: 5px;
    font-size: 20px;
    `}
`
