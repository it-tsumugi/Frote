import { Children, FC } from 'react'
import styled from 'styled-components'
import media from '../../../styles/media'

export const Text: FC = ({ children }) => {
  return <SText>{children}</SText>
}

const SText = styled.h2`
  font-size: 24px;
  ${media.lg`
    font-size: 22px;
    `}
  ${media.md`
    font-size: 20px;
    `}
`
