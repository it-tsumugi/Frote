import { VFC } from 'react'
import { SColumnContainer, SFlexContainer, SItemName, SSelect } from '../../../atoms/style/SelectStyle'
import { SText } from '../../../atoms/style/TextStyle'
import { groupListType } from '../../../../type/dataType'

type propsType = {
  task_list_id: number
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  isComplete: boolean
  groupLists: groupListType[]
  group: string
}

export const PGroupSelect: VFC<propsType> = ({ task_list_id, onChange, isComplete, groupLists, group }) => {
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
