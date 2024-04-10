export interface ICustomBlackList {
  id: string
  url: string
  domain: string
  dns: any
  category: any
  userId: string
  isBlocked: boolean
  createdAt: string
  updatedAt: string
}

export type IDialogMode = "unlock" | "whitelist"