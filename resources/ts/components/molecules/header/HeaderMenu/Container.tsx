import { useState, VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { booleanState } from '../../../../state/atom'
import { booleanStateKey } from '../../../../constant/stateKey'
import { useGetActions } from '../../../../hooks/useGetActions'
import { PHeaderMenu } from './Presenter'

export const HeaderMenu: VFC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const isLogin = useRecoilValue(booleanState(booleanStateKey.isLogin))
  const { logout } = useGetActions()

  return (
    <PHeaderMenu
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
      isLogin={isLogin}
      logout={logout}
    />
  )
}
