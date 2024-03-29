import { VFC } from 'react'
import styled from 'styled-components'
import { NavButton } from '../../../styles/commonStyles/button/NavButton'
import { path } from '../../../constant/path'

export const Nav: VFC = () => {
  return (
    <SComponentContainer>
      <NavButton to={path.home}>一覧表示</NavButton>
      <NavButton to={path.groupDisplay}>グループ表示</NavButton>
      <NavButton to={path.impDisplay}>重要度表示</NavButton>
      <NavButton to={path.urgDisplay}>緊急度表示</NavButton>
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
