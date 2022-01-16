import { VFC } from 'react'

import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined'

import { SBaseIcon } from './SBaseIcon'

import { iconType } from '../../../assets/type/iconType'

export const QiitaIcon: VFC<iconType> = (props) => {
  const { url } = props
  return (
    <SBaseIcon>
      <LibraryBooksOutlinedIcon onClick={() => window.open(url)} />
    </SBaseIcon>
  )
}
