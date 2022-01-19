import { NativeSelect } from '@material-ui/core'
import styled from 'styled-components'
import media from '../media'

export const SFlexContainer = styled.div`
  display: flex;
`

export const SColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SItemName = styled.div`
  width: 100px;

  font-size: 22px;
  ${media.lg`
    font-size: 18px;
    `}
  ${media.md`
    font-size: 14px;
    `}
`

export const SSelect = styled(NativeSelect)`
  background-color: white;

  font-size: 22px;
  ${media.lg`
    font-size: 18px;
    `}
  ${media.md`
    font-size: 12px;
    `}
`
