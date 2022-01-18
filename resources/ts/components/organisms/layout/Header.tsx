import { VFC } from 'react'
import { HeaderMenu } from '../../molecules/header/HeaderMenu'
import { HeaderLinks } from '../../molecules/header/HeaderLinks'
import { SAppBar } from '../../atoms/style/SAppBar'

export const Header: VFC = () => {
  return (
    <SAppBar position="static" color="inherit">
      <HeaderLinks />
      <HeaderMenu />
    </SAppBar>
  )
}
