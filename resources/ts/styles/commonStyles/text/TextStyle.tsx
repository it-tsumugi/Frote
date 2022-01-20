import styled from 'styled-components'
import media from '../../media'

export const STitle = styled.h1`
  font-weight: bold;

  font-size: 40px;
  ${media.lg`
    font-size: 36px;
    `}
  ${media.md`
    font-size: 32px;
    `}
`

export const SText = styled.h2`
  font-size: 24px;
  ${media.lg`
    font-size: 22px;
    `}
  ${media.md`
    font-size: 20px;
    `}
`

export const SActionText = styled.h2`
  font-weight: bold;

  font-size: 28px;
  ${media.lg`
    font-size: 26px;
    `}
  ${media.md`
    font-size: 22px;
    `}
`
