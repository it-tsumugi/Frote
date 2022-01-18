import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { booleanState } from '../../../../state/atom'
import { booleanStateKey } from '../../../../constant/stateKey'
import { useGetActions } from '../../../../hooks/useGetActions'
import { PHeaderLinks } from './Presenter'

export const HeaderLinks: VFC = () => {
  const isLogin = useRecoilValue(booleanState(booleanStateKey.isLogin))
  const { logout } = useGetActions()

  return <PHeaderLinks isLogin={isLogin} logout={logout} />
}
