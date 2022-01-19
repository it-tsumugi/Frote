import { CircularProgress } from '@material-ui/core'
import { VFC } from 'react'
import { LoadingHeader } from '../atoms/LoadingHeader'
import { SCenter } from '../../styles/commonStyles/SCenter'
import { SFooterFixed } from '../../styles/commonStyles/SFooterFixed'
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
