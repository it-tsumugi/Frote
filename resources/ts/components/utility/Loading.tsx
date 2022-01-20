import { CircularProgress } from '@material-ui/core'
import { VFC } from 'react'
import { SCenter } from '../../styles/commonStyles/locate/SCenter'
import { SFooterFixed } from '../../styles/commonStyles/locate/SFooterFixed'
import { Footer } from '../organisms/layout/Footer'
import { SAppBar } from '../../styles/commonStyles/appbar/SAppBar'

export const Loading: VFC = () => {
  return (
    <SFooterFixed>
      <SAppBar position="static" color="inherit" />
      <SCenter style={{ textAlign: 'center' }}>
        <CircularProgress style={{ color: '#fff' }} />
      </SCenter>
      <Footer />
    </SFooterFixed>
  )
}
