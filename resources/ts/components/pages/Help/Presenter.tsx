import { VFC } from 'react'
import styled from 'styled-components'
import { helpQustionDataType } from '../../../type/dataType'
import { STitle } from '../../atoms/style/TextStyle'
import { HelpQuestion } from '../../molecules/help/HelpQustion/Container'
import { helpQuestionData } from '../../../constant/helpQustionData'

export const PHelp: VFC = () => {
  return (
    <SComponentContainer>
      <SSTitle>よくある質問</SSTitle>
      {helpQuestionData.map((data) => {
        return <HelpQuestion key={data.id} data={data} />
      })}
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  text-align: center;

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

const SSTitle = styled(STitle)`
  margin-bottom: 50px;
`
