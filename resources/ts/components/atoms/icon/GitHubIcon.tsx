import { VFC } from 'react'

import GitHub from '@material-ui/icons/GitHub'

import { SBaseIcon } from './SBaseIcon'

import { iconType } from '../../../assets/type/iconType'

export const GitHubIcon: VFC<iconType> = (props) => {
  const { url } = props
  return (
    <SBaseIcon>
      <GitHub onClick={() => window.open(url)} />
    </SBaseIcon>
  )
}
