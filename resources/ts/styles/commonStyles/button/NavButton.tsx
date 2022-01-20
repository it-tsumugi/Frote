import { Link } from 'react-router-dom'
import styled from 'styled-components'
import media from '../../media'

type NavButtonPropsType = {
  ishidden?: boolean
}

export const NavButton = styled(Link)<NavButtonPropsType>`
  color: #ffffff;
  background: #2d2d31;
  margin: 5px;
  padding: 12px 12px;
  cursor: pointer;

  border-radius: 5%;
  box-shadow: 4px 4px 3px gray;
  display: inline-block;
  line-height: 1em;
  opacity: 1;
  transition: 0.3s;
  &:hover {
    box-shadow: none;
    text-decoration: none;
    color: white;
    opacity: 0.6;
  }
  font-size: 14px;

  visibility: ${(props) => (props?.ishidden ? 'hidden' : 'visible')};

  ${media.lg`
    max-width: 100px;
    font-size: 12px;
    `}
  ${media.md`
    max-width: 70px;
    font-size: 10px;
    `}
`
