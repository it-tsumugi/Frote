import { VFC } from 'react'
import { Loading } from '../components/pages/Loading/Container'
import { booleanState } from './atom'
import { booleanStateKey } from '../assets/data/stateKey'
import { useGetActions } from '../hooks/useGetActions'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

type propsType = {
  children: React.ReactNode
}

export const SetInitialState: VFC<propsType> = ({ children }) => {
  const [isComplete, setIsComplete] = useRecoilState(booleanState(booleanStateKey.isComplete))
  const { auth, setAllInitialData } = useGetActions()

  useEffect(() => {
    const promise = auth()
    promise.then((isLogin) => {
      if (isLogin) {
        setAllInitialData().then(() => {
          setIsComplete(true)
        })
      } else {
        setIsComplete(true)
      }
    })
  }, [])

  return <>{isComplete ? children : <Loading />}</>
}
