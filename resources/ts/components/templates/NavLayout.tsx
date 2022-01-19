import { VFC } from 'react'

import { Header } from '../organisms/layout/Header'
import { Nav } from '../organisms/layout/Nav'
import { Footer } from '../organisms/layout/Footer'
import { SCenter } from '../../styles/commonStyles/SCenter'
import { SFooterFixed } from '../../styles/commonStyles/SFooterFixed'

type PropsType = {
  children: React.ReactElement
}

export const NavLayout: VFC<PropsType> = (props) => {
  const { children } = props

  return (
    <SFooterFixed>
      <Header />
      <Nav />
      <SCenter>{children}</SCenter>
      <Footer />
    </SFooterFixed>
  )
}
