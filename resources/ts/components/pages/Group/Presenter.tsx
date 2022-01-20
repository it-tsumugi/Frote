import { VFC } from 'react'
import { path } from '../../../constant/path'
import { NavButton } from '../../../styles/commonStyles/button/NavButton'
import { GroupList } from '../../organisms/group/GroupList/Container'

export const PGroup: VFC = () => {
  return (
    <>
      <GroupList />
      <NavButton to={path.addGroup}>グループの追加</NavButton>
    </>
  )
}
