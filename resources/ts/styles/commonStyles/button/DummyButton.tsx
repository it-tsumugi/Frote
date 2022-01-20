import { VFC } from 'react'
import { ActionButton } from './ActionButton'

type propsType = {
  children?: string
}

export const DummyButton: VFC<propsType> = ({ children }) => {
  return <ActionButton style={{ visibility: 'hidden' }}>{children}</ActionButton>
}
