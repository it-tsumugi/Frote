import { VFC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import media from '../../../../styles/media'
import { Menu, MenuItem, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { headerItem } from '../../../../constant/headerItem'
import { path } from '../../../../constant/path'

type propsType = {
  anchorEl: HTMLElement | null
  handleClose: () => void
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  isLogin: boolean
  logout: () => Promise<void>
}

export const PHeaderMenu: VFC<propsType> = ({ anchorEl, handleClose, handleClick, isLogin, logout }) => {
  return (
    <SComponentContainer>
      <SMenuTitle>Frote</SMenuTitle>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {!anchorEl ? <MenuIcon style={{ color: 'white' }} /> : <CloseIcon style={{ color: 'white' }} />}
      </Button>
      <SMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          style: { backgroundColor: '#55555a' }
        }}
      >
        {headerItem.map((val) => {
          if (isLogin) {
            if (val.route !== path.register && val.route !== path.login) {
              return (
                <MenuItem key={val.id} onClick={handleClose} component={SLink} to={val.route}>
                  {val.label}
                </MenuItem>
              )
            }
          } else {
            if (val.route !== path.home) {
              return (
                <MenuItem key={val.id} onClick={handleClose} component={SLink} to={val.route}>
                  {val.label}
                </MenuItem>
              )
            }
          }
        })}
        <MenuItem onClick={logout} component={SButton}>
          ログアウト
        </MenuItem>
      </SMenu>
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  display: none;

  ${media.lessThanlg`
    display: flex;
    align-items:center;
    justify-content: space-between;
  `}
`

const SMenuTitle = styled.h1`
  font-size: 24px;
  margin: 10px;
`

const SLink = styled(Link)`
  color: white;
  &:hover {
    color: gray;
  }
`

const SMenu = styled(Menu)`
  margin-top: 30px;
`

const SButton = styled(Button)`
  color: white;
  &:hover {
    color: gray;
  }
`
