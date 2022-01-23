import styled from 'styled-components'
import { VFC } from 'react'
import Grid from '@material-ui/core/Grid'
import { SCard } from '../../../../styles/commonStyles/card/SCard'
import { NavButton } from '../../../../styles/commonStyles/button/NavButton'
import { path } from '../../../../constant/path'
import { SText } from '../../../../styles/commonStyles/text/TextStyle'
import { groupListType } from '../../../../type/dataType'
import { DefaultButton } from '../../../../styles/commonStyles/button/DefaultButton'
import * as H from 'history'

type propsType = {
  groupLists: groupListType[]
  deleteGroup: (id: number) => Promise<void>
  getGroup: (props: getGroupPropsType) => Promise<void>
  history: H.History
}

export const PGroupList: VFC<propsType> = ({ groupLists, deleteGroup, getGroup, history }) => {
  if (groupLists.length !== 0) {
    return (
      <Grid container spacing={2}>
        {groupLists.map((item) => {
          const deleteHandler = () => deleteGroup(item.id)
          const editGroupPath = `/${item.id}` + path.editGroup
          const editTaskHandler = () => {
            getGroup({ id: item.id, key: 'group' }).then(() => {
              history.push(editGroupPath)
            })
          }

          return (
            <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}>
              <SSCard>
                <div>{item.group}</div>
                <DefaultButton onClick={editTaskHandler}>編集</DefaultButton>
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
}

const SSCard = styled(SCard)`
  display: flex;
  align-items: center;
  justify-content: center;
`
