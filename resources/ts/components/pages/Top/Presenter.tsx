import { VFC } from 'react'
import styled from 'styled-components'
import media from '../../../assets/styles/media'
import { Grid } from '@material-ui/core'
import { BigNavButton } from '../../atoms/button/BigNavButton'
import { SCard } from '../../atoms/style/SCard'
import { path } from '../../../assets/data/path'

type propsType = {
  isLogin: boolean
}

export const PTop: VFC<propsType> = ({ isLogin }) => {
  return (
    <SComponentContainer>
      <STitle>Froteへようこそ！</STitle>
      <SSubText>Froteはタスクの優先度決定からの解放を目的としたタスク管理サービスです</SSubText>
      <SGrid container spacing={2}>
        {isLogin ? (
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <SCard>
              <BigNavButton to={path.home}>ホーム</BigNavButton>
            </SCard>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <SCard>
                <BigNavButton to={path.login}>ログイン</BigNavButton>
              </SCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <SCard>
                <BigNavButton to={path.confirmRegister}>登録</BigNavButton>
              </SCard>
            </Grid>
          </>
        )}
        {isLogin ? (
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <SCard>
              <BigNavButton to={path.usage}>使い方</BigNavButton>
            </SCard>
          </Grid>
        ) : (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <SCard>
              <BigNavButton to={path.usage}>使い方</BigNavButton>
            </SCard>
          </Grid>
        )}
      </SGrid>
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-name: anime;
  animation-duration: 0.3s;
  animation-timing-function: ease;
  @keyframes anime {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`

const STitle = styled.h1`
  font-weight: bold;

  font-size: 48px;
  ${media.lg`
    font-size: 42px;
    `}
  ${media.md`
    font-size: 34px;
    `}
`

const SSubText = styled.h2`
  font-size: 32px;
  ${media.lg`
    font-size: 28px;
    `}
  ${media.md`
    font-size: 24px;
    `}
`

const SGrid = styled(Grid)`
  margin-top: 30px;
`
