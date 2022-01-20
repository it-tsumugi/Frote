import styled from 'styled-components'
import media from '../../media'

export const DefaultButton = styled.button`
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
