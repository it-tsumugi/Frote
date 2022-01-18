import { useState, VFC } from 'react'
import { helpQustionDataType } from '../../../../type/dataType'
import { PHelpQuestion } from './Presenter'

type propsType = {
  data: helpQustionDataType
}

export const HelpQuestion: VFC<propsType> = (props) => {
  const { data } = props
  const [isClick, setIsClick] = useState(false)
  const onClick = () => setIsClick(!isClick)

  return <PHelpQuestion data={data} isClick={isClick} onClick={onClick} />
}
