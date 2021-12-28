import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions
} from 'vuex'

import state, { State } from '@/store/app/state'
import appMutations, { Mutations } from '@/store/app/mutations'
import appActions, { Actions } from '@/store/app/actions'
import appGetters, { Getters } from '@/store/getters'
import user from '@/store/user/user'
import { UserState } from '@/store/user/state'

export type RootState = State & {
  user: UserState
}

const store = createStore({
  state,
  mutations: appMutations,
  actions: appActions,
  getters: appGetters,
  modules: {
    user
  }
})

export type AppStore<S = State> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
  > & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ) : ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export type Store = AppStore & UserState

export function useStore (): Store {
  return store as Store
}

export default store
