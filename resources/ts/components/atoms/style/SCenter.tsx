import styled from 'styled-components'
import media from '../../../styles/media'

export const SCenter = styled.div`
  //コンテンツの中央寄せと幅の指定
  margin: auto;

  width: 80vw;
  ${media.lg`
    width: 90vw;
    `}
  ${media.md`
    width: 95vw;
    `}
`
