import { VFC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import media from '../../../../styles/media'
import { DefaultButton } from '../../../atoms/button/DefaultButton'
import { SFlexContainer } from '../../../../styles/commonStyles/SelectStyle'
import { path } from '../../../../constant/path'
import { DummyButton } from '../../../atoms/button/DummyButton'

type propsType = {
  isLogin: boolean
  logout: () => Promise<void>
}

export const PHeaderLinks: VFC<propsType> = ({ isLogin, logout }) => {
  return (
    <SComponentContainer>
      <SFlexContainer>
        <SLink to={path.top}>トップ</SLink>
        {!isLogin ? (
          <>
            <SLink to={path.login}>ログイン</SLink>
            <SLink to={path.confirmRegister}>登録</SLink>
          </>
        ) : null}
        {isLogin ? <SLink to={path.home}>ホーム</SLink> : null}
        <SLink to={path.usage}>使い方</SLink>
        <SLink to={path.help}>ヘルプ</SLink>
      </SFlexContainer>
      {isLogin ? <DefaultButton onClick={logout}>ログアウト</DefaultButton> : <DummyButton>文字調整</DummyButton>}
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThanlg`
    display: none;
    `}
`

const SLink = styled(Link)`
  color: white;
  margin: 0 10px;
  &:hover {
    color: gray;
  }
`
