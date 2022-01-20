import { Card } from '@material-ui/core'
import styled from 'styled-components'
import media from '../../media'

export const FormCard = styled(Card)`
  color: white;
  background-color: #606061;
  height: 100%;
  box-sizing: border-box;
  font-size: 24px;

  border: 4px solid　#3d3d3d;
  border-radius: 20px;

  padding: 50px;
  ${media.lg`
    padding: 30px;
    `}
  ${media.md`
    padding: 15px;
    `}
`
