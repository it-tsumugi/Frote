import { VFC } from 'react'
import { useRecoilState } from 'recoil'

import { SFlexContainer, SItemName, SSelect } from '../../atoms/style/SelectStyle'

import { useGetImp } from '../../../hooks/useGetImp'
import { impData } from '../../../constant/impData'
import { numberState } from '../../../state/atom'
import { numberStateKey } from '../../../constant/stateKey'

type propsType = {
  task_list_id: number
}

export const ImpSelect: VFC<propsType> = (props) => {
  const { task_list_id } = props
  const [imp, setImp] = useRecoilState(numberState(numberStateKey.imp))
  useGetImp(task_list_id)

  return (
    <SFlexContainer>
      <SItemName>重要度</SItemName>
      <SSelect
        inputProps={{
          name: 'importance'
        }}
        value={imp}
        onChange={(e) => setImp(Number(e.target.value))}
      >
        {impData.map((item) => {
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
