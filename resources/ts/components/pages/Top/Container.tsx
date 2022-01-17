import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { booleanState } from '../../../state/atom'
import { PTop } from './Presenter'

export const Top: VFC = () => {
  const isLogin = useRecoilValue(booleanState('isLogin'))
  return <PTop isLogin={isLogin} />
}
