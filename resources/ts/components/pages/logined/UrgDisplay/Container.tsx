import { VFC } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { urgTaskListsState } from '../../../../state/atom'
import { PUrgDisplay } from './Presenter'
import { LoadingIcon } from '../../../atoms/icon/LoadingIcon'

export const UrgDisplay: VFC = () => {
  const urgTaskLists = useRecoilValueLoadable(urgTaskListsState)

  switch (urgTaskLists.state) {
    case 'hasValue':
      return <PUrgDisplay urgTaskLists={urgTaskLists.contents} />
    case 'loading':
      return <LoadingIcon />
    case 'hasError':
      throw urgTaskLists.contents
  }
}
