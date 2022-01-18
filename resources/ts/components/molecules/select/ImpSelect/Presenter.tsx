import { VFC } from 'react'
import { SFlexContainer, SItemName, SSelect } from '../../../atoms/style/SelectStyle'
import { impData } from '../../../../constant/impData'

type propsType = {
  imp: number
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const PImpSelect: VFC<propsType> = ({ imp, onChange }) => {
  return (
    <SFlexContainer>
      <SItemName>重要度</SItemName>
      <SSelect
        inputProps={{
          name: 'importance'
        }}
        value={imp}
        onChange={onChange}
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
