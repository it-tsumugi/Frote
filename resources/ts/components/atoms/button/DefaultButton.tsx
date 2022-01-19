import { ReactNode, VFC } from 'react'
import styled from 'styled-components'
import media from '../../../styles/media'

type propsType = {
  children: ReactNode
  onClick?: () => any
  isHidden?: boolean
  style?: React.CSSProperties | undefined
}

export const DefaultButton: VFC<propsType> = ({ children, onClick, isHidden, style }) => {
  return (
    <SButton onClick={onClick} style={style}>
      {children}
    </SButton>
  )
}

type SButtonPropsType = {
  isHidden?: boolean
}

const SButton = styled.button<SButtonPropsType>`
  margin: 5px;
  display: inline-block;
  border-radius: 5%;
  font-size: 18pt;
  cursor: pointer;
  padding: 12px 12px;
  background: #2d2d31;
  color: #ffffff;
  line-height: 1em;
  opacity: 1;
  transition: 0.3s;
  border: none;
  box-shadow: 4px 4px 3px gray;
  &:hover {
    box-shadow: none;
    text-decoration: none;
    color: white;
    opacity: 0.6;
  }

  /* visibility: ${(props) => (props?.isHidden ? 'hidden' : 'visible')}; */

  font-size: 14px;
  ${media.lg`
    max-width: 100px;
    font-size: 12px;
    `}
  ${media.md`
    max-width: 60px;
    font-size: 10px;
    `}
`
