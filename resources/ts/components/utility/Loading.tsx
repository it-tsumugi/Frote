import { CircularProgress } from '@material-ui/core'
import { VFC } from 'react'
import { SCenter } from '../../styles/commonStyles/SCenter'
import { SFooterFixed } from '../../styles/commonStyles/SFooterFixed'
import { Footer } from '../organisms/layout/Footer'
import { SAppBar } from '../../styles/commonStyles/SAppBar'

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
