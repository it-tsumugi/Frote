import styled from 'styled-components'
import { VFC } from 'react'
import Grid from '@material-ui/core/Grid'
import { SCard } from '../../../../styles/commonStyles/card/SCard'
import { NavButton } from '../../../../styles/commonStyles/button/NavButton'
import { path } from '../../../../constant/path'
import { SText } from '../../../../styles/commonStyles/text/TextStyle'
import { groupListType } from '../../../../type/dataType'
import { DefaultButton } from '../../../../styles/commonStyles/button/DefaultButton'

type propsType = {
  isGroupTaskLists: boolean
  groupLists: groupListType[]
  deleteGroup: (id: number) => Promise<void>
}

export const PGroupList: VFC<propsType> = ({ isGroupTaskLists, groupLists, deleteGroup }) => {
  if (isGroupTaskLists) {
    if (groupLists.length !== 0) {
      return (
        <Grid container spacing={2}>
          {groupLists.map((item) => {
            const deleteHandler = () => deleteGroup(item.id)

            return (
              <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}>
                <SSCard>
                  <div>{item.group}</div>
                  <NavButton to={`/${item.id}` + path.editGroup}>編集</NavButton>
                  <DefaultButton onClick={deleteHandler}>削除</DefaultButton>
                </SSCard>
              </Grid>
            )
          })}
        </Grid>
      )
    } else {
      return <SText>グループが存在しません。追加してください</SText>
    }
  } else {
    return <SText>ローディング中です</SText>
  }
}

const SSCard = styled(SCard)`
  display: flex;
  align-items: center;
  justify-content: center;
`
