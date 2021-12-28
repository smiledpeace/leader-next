import { RootActionsTypes, IRootGettersTypes } from '@/store/app/interfaces'
import { CounterActionsTypes, CounterGettersTypes } from '@/store/counter/interfaces'

export interface StoreActions
  extends RootActionsTypes,
    CounterActionsTypes {}

export interface StoreGetters
  extends IRootGettersTypes,
    CounterGettersTypes {}
