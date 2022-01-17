import { VFC } from 'react'
import styled from 'styled-components'
import { NavButton } from '../../atoms/button/NavButton'
import { SText, STitle } from '../../atoms/style/TextStyle'
import { path } from '../../../constant/path'

export const PConfirmRegister: VFC = () => {
  return (
    <SComponentContainer>
      <SSection>
        <STitle>登録のまえに</STitle>
        <SText>このページでは登録の前に確認事項を説明させていただきます。</SText>
      </SSection>
      <SSection>
        <STitle>Froteの現状</STitle>
        <SText>
          Froteは現在開発者のつむぎがポートフォリオとして開発中のものであり、今後も改善していく予定です。
          バグを発見した場合や意見のある場合はフッターにあるTwitterアイコンからTwitterのDMにて報告お願いします。
        </SText>
      </SSection>
      <SSection>
        <STitle>お試しで利用したい方へ</STitle>
        <SText>
          お試しで利用したい方はログインページ記載のメールアドレスとパスワードでログインして利用してください。
        </SText>
      </SSection>
      <SSection>
        <SText>以上のことを踏まえてご利用出来る方のみ登録をお願いします</SText>
      </SSection>
      <SNavButton to={path.register}>登録へ</SNavButton>
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

const SSection = styled.div`
  margin: 40px 20px;
`

const SNavButton = styled(NavButton)`
  font-size: 24px;
`
