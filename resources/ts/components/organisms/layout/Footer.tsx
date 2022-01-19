import { VFC } from 'react'
import styled from 'styled-components'
import media from '../../../styles/media'
import { Icon } from '../../atoms/icon/Icon'
import { iconData } from '../../../constant/iconData'

export const Footer: VFC = () => {
  return (
    <SComponentContainer>
      &copy; 2021 Tsumugi
      <Icon url={iconData.github.url} type={iconData.github.type} />
      <Icon url={iconData.twitter.url} type={iconData.twitter.type} />
      <Icon url={iconData.qiita.url} type={iconData.qiita.type} />
    </SComponentContainer>
  )
}

const SComponentContainer = styled.footer`
  background-color: #201a22;
  padding: 10px 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  //フッター固定用
  margin-top: auto;

  gap: 80px;
  height: 40px;
  ${media.lg`
    gap: 60px;
    height: 45px;
    `}
  ${media.md`
    gap: 40px;
    height: 50px;
    `}
`
