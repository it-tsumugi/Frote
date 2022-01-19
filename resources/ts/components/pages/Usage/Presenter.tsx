import { VFC } from 'react'
import styled from 'styled-components'
import { SText, STitle } from '../../../styles/style/TextStyle'

export const PUsage: VFC = () => {
  return (
    <SComponentContainer>
      <SSection>
        <STitle>Froteの使い方</STitle>
        <SText>このページではFrote(フローテ)の思想と使い方を説明していきます。</SText>
      </SSection>
      <SSection>
        <STitle>タスクとリスト</STitle>
        <SText>
          リストはタスク同士の依存関係を明確化するためのものであり、複数のタスクで構成されています。
          依存関係のあるタスクが存在する場合はリストに複数のタスクを順番に追加してください。
          タスクが１つだけの場合、それは要素が１つのリストとして扱われます。
        </SText>
      </SSection>
      <SSection>
        <STitle>グループ</STitle>
        <SText>
          リストを分類するためにグループがあります。 それぞれのリストはグループに所属しなければなりません。
          グループはユーザーが作成することが出来ます。
        </SText>
      </SSection>
      <SSection>
        <STitle>重要度と緊急度</STitle>
        <SText>
          リストの優先度を決めるために各リストに重要度と緊急度が存在します。
          重要度と緊急度は各ユーザーがリストに対して決定し、それによって自動的に優先度が決定されます。
          ユーザーは常に重要度と緊急度が適切か考える必要があります。
        </SText>
      </SSection>
      <SSection>
        <STitle>４つの表示</STitle>
        <SText>
          Froteでは優先度順、グループごと、重要度ごと、緊急度ごとの４つの表示方法があります。
          自分の好きな表示方法でタスクを見てください。
        </SText>
      </SSection>
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
