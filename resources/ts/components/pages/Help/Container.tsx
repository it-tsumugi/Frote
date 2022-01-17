import { VFC } from 'react'
import { helpQuestionData } from '../../../constant/helpQustionData'
import { PHelp } from './Presenter'

export const Help: VFC = () => {
  return <PHelp helpQuestionData={helpQuestionData} />
}
