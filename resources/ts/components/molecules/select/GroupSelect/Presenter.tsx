import { VFC } from 'react'
import {
  SColumnContainer,
  SFlexContainer,
  SItemName,
  SSelect
} from '../../../../styles/commonStyles/select/SelectStyle'
import { SText } from '../../../../styles/commonStyles/text/TextStyle'
import { groupListType } from '../../../../type/dataType'

type propsType = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  isComplete: boolean
  groupLists: groupListType[]
  group: string
}

export const PGroupSelect: VFC<propsType> = ({ onChange, isComplete, groupLists, group }) => {
  if (isComplete) {
    if (groupLists.length === 0) {
      return <SText>グループがないためリストを作成出来ません。先にグループを作成してください</SText>
    } else {
      return (
        <SColumnContainer>
          <SFlexContainer>
            <SItemName>グループ</SItemName>
            <SSelect
              inputProps={{
                name: 'group'
              }}
              value={group}
              onChange={onChange}
            >
              {groupLists.map((item) => {
                return (
                  <option value={item.group} key={item.id}>
                    {item.group}
                  </option>
                )
              })}
            </SSelect>
          </SFlexContainer>
        </SColumnContainer>
      )
    }
  } else {
    return <h1>ローディング中</h1>
  }
}
