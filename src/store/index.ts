import { createStore } from 'vuex'
import { IRootState } from '@/store/app/interfaces'
import { CounterStoreModuleTypes } from '@/store/counter/types'
import { RootStoreModuleTypes } from '@/store/app/types'

import root from '@/store/app'

export const store = createStore<IRootState>(root)

type StoreModules = {
  counterModule: CounterStoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = CounterStoreModuleTypes<
  Pick<StoreModules, 'counterModule'>
  > &
  RootStoreModuleTypes<Pick<StoreModules, 'root'>>;
