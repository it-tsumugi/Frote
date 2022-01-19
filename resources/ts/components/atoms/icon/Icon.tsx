import { VFC } from 'react'
import styled from 'styled-components'
import GitHub from '@material-ui/icons/GitHub'
import Twitter from '@material-ui/icons/Twitter'
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined'
import { iconData } from '../../../constant/iconData'

type propsType = {
  url: string
  type: string
}

export const Icon: VFC<propsType> = ({ url, type }) => {
  const onClick = () => window.open(url)
  const selectIcon = () => {
    switch (type) {
      case iconData.github.type:
        return <GitHub onClick={onClick} />
      case iconData.twitter.type:
        return <Twitter onClick={onClick} />
      case iconData.qiita.type:
        return <LibraryBooksOutlinedIcon onClick={onClick} />
    }
  }

  return <SBaseIcon>{selectIcon()}</SBaseIcon>
}

const SBaseIcon = styled.div`
  cursor: pointer;
`
