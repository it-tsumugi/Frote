import { path } from './path'

type headerItemType = {
  id: number
  route: string
  label: string
}

export const headerItem: headerItemType[] = [
  {
    id: 1,
    route: path.top,
    label: 'トップ'
  },
  {
    id: 2,
    route: path.login,
    label: 'ログイン'
  },
  {
    id: 3,
    route: path.register,
    label: '登録'
  },
  {
    id: 4,
    route: path.home,
    label: 'ホーム'
  },
  {
    id: 5,
    route: path.usage,
    label: '使い方'
  },
  {
    id: 6,
    route: path.help,
    label: 'ヘルプ'
  }
]
