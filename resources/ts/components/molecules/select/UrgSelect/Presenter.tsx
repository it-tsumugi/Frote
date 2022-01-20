import { VFC } from 'react'
import { SFlexContainer, SItemName, SSelect } from '../../../../styles/commonStyles/select/SelectStyle'
import { urgData } from '../../../../constant/urgData'

type propsType = {
  urg: number
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const PUrgSelect: VFC<propsType> = ({ urg, onChange }) => {
  return (
    <SFlexContainer>
      <SItemName>緊急度</SItemName>
      <SSelect
        inputProps={{
          name: 'urgency'
        }}
        value={urg}
        onChange={onChange}
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
