import { VFC } from 'react'
import { helpQuestionData } from '../../../assets/data/helpQustionData'
import { PHelp } from './Presenter'

export const Help: VFC = () => {
  return <PHelp helpQuestionData={helpQuestionData} />
}
