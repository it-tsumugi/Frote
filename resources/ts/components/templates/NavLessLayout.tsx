import { VFC } from 'react'

import { SCenter } from '../../styles/style/SCenter'
import { SFooterFixed } from '../../styles/style/SFooterFixed'
import { Footer } from '../organisms/layout/Footer'
import { Header } from '../organisms/layout/Header'

type PropsType = {
  children: React.ReactElement
}

export const NavLessLayout: VFC<PropsType> = (props) => {
  const { children } = props

  return (
    <SFooterFixed>
      <Header />
      <SCenter>{children}</SCenter>
      <Footer />
    </SFooterFixed>
  )
}
