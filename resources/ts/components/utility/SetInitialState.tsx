import { VFC } from 'react'
import { Loading } from './Loading'
import { booleanState } from '../../state/atom'
import { booleanStateKey } from '../../constant/stateKey'
import { useGetActions } from '../../hooks/useGetActions'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useGetAllTaskLists2 } from '../../hooks/useGetAllTasklists2'

type propsType = {
  children: React.ReactNode
}

export const SetInitialState: VFC<propsType> = ({ children }) => {
  const [isComplete, setIsComplete] = useRecoilState(booleanState(booleanStateKey.isComplete))
  const { auth, setAllInitialData } = useGetActions()
  const { getAllTasklists2 } = useGetAllTaskLists2()

  const test = async () => {
    auth().then((isLogin) => {
      if (isLogin) {
        getAllTasklists2().then(() => {
          setIsComplete(true)
        })
      } else {
        setIsComplete(true)
      }
    })
  }

  useEffect(() => {
    test()
  }, [])
  // useEffect(() => {
  //   const promise = auth()
  //   promise.then((isLogin) => {
  //     if (isLogin) {
  //       // const promiseArray = setAllInitialData()
  //       const promise = getAllTasklists2
  //       const promiseArray = [promise]
  //       Promise.all(promiseArray).then(() => {
  //         setIsComplete(true)
  //       })
  //     } else {
  //       setIsComplete(true)
  //     }
  //   })
  // }, [])

  return <>{isComplete ? children : <Loading />}</>
}
