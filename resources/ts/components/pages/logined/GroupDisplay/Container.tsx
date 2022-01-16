import { VFC } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { groupTaskListsState } from '../../../../state/atom'
import { LoadingIcon } from '../../../atoms/icon/LoadingIcon'
import { PGroupDisplay } from './Presenter'

export const GroupDisplay: VFC = () => {
  const groupTaskLists = useRecoilValueLoadable(groupTaskListsState)

  switch (groupTaskLists.state) {
    case 'hasValue':
      return <PGroupDisplay groupTaskLists={groupTaskLists.contents} />
    case 'loading':
      return <LoadingIcon />
    case 'hasError':
      throw groupTaskLists.contents
  }
}
