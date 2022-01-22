import styled from 'styled-components'
import media from '../../media'

export const ActionButton = styled.button`
  margin: 5px;
  display: inline-block;
  border-radius: 10%;
  font-size: 18pt;
  cursor: pointer;

  background: #3d3d3d;
  color: #ffffff;
  line-height: 1em;
  opacity: 1;
  transition: 0.3s;
  border: none;
  box-shadow: 4px 4px 3px gray;
  font-size: 14px;
  &:hover {
    box-shadow: none;
    text-decoration: none;
    color: white;
    opacity: 0.6;
  }

  padding: 15px 20px;
  width: 100px;
  font-size: 14px;
  ${media.lg`
    padding: 13px 16px;
    max-width: 90px;
    font-size: 12px;
    `}
  ${media.md`
    padding: 10px 15px;
    max-width: 80px;
    font-size: 10px;
    `}
`
