import { VFC } from 'react'
import { path } from '../../../constant/path'
import { NavButton } from '../../atoms/button/NavButton'
import { GroupList } from '../../organisms/GroupList'

export const PGroup: VFC = () => {
  return (
    <>
      <GroupList />
      <NavButton to={path.addGroup}>グループの追加</NavButton>
    </>
  )
}