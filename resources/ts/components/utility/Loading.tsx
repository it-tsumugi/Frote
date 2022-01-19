import { CircularProgress } from '@material-ui/core'
import { VFC } from 'react'
import { LoadingHeader } from '../atoms/LoadingHeader'
import { SCenter } from '../../styles/style/SCenter'
import { SFooterFixed } from '../../styles/style/SFooterFixed'
import { Footer } from '../organisms/layout/Footer'

export const Loading: VFC = () => {
  return (
    <SFooterFixed>
      <LoadingHeader />
      <SCenter style={{ textAlign: 'center' }}>
        <CircularProgress style={{ color: '#fff' }} />
      </SCenter>
      <Footer />
    </SFooterFixed>
  )
}
