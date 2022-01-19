import styled from 'styled-components'
import { VFC } from 'react'
import Grid from '@material-ui/core/Grid'
import { SCard } from '../../../../styles/commonStyles/SCard'
import { DeleteGroupButton } from '../../../atoms/button/DeleteGroupButton'
import { NavButton } from '../../../../styles/commonStyles/NavButton'
import { path } from '../../../../constant/path'
import { SText } from '../../../../styles/commonStyles/TextStyle'
import { groupListType } from '../../../../type/dataType'

type propsType = {
  isGroupTaskLists: boolean
  groupLists: groupListType[]
}

export const PGroupList: VFC<propsType> = ({ isGroupTaskLists, groupLists }) => {
  if (isGroupTaskLists) {
    if (groupLists.length !== 0) {
      return (
        <Grid container spacing={2}>
          {groupLists.map((item) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}>
                <SSCard>
                  <div>{item.group}</div>
                  <NavButton to={`/${item.id}` + path.editGroup}>編集</NavButton>
                  <DeleteGroupButton id={item.id}>削除</DeleteGroupButton>
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
