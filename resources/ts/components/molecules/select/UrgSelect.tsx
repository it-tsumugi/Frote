import { VFC } from 'react'
import { useRecoilState } from 'recoil'

import { SFlexContainer, SItemName, SSelect } from '../../atoms/style/SelectStyle'

import { useGetUrg } from '../../../hooks/useGetUrg'
import { urgData } from '../../../constant/urgData'
import { numberState } from '../../../state/atom'
import { numberStateKey } from '../../../constant/stateKey'

type propsType = {
  task_list_id: number
}

export const UrgSelect: VFC<propsType> = (props) => {
  const { task_list_id } = props
  const [urg, setUrg] = useRecoilState(numberState(numberStateKey.urg))
  useGetUrg(task_list_id)

  return (
    <SFlexContainer>
      <SItemName>緊急度</SItemName>
      <SSelect
        inputProps={{
          name: 'urgency'
        }}
        value={urg}
        onChange={(e) => setUrg(Number(e.target.value))}
      >
        {urgData.map((item) => {
          return (
            <option value={item.num} key={item.num}>
              {item.text}
            </option>
          )
        })}
      </SSelect>
    </SFlexContainer>
  )
}
