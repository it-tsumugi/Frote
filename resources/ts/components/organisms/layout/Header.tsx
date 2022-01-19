import { VFC } from 'react'
import { HeaderMenu } from '../../molecules/header/HeaderMenu/Container'
import { HeaderLinks } from '../../molecules/header/HeaderLinks/Container'
import { SAppBar } from '../../../styles/commonStyles/SAppBar'

export const Header: VFC = () => {
  return (
    <SAppBar position="static" color="inherit">
      <HeaderLinks />
      <HeaderMenu />
    </SAppBar>
  )
}
