import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions
} from 'vuex'

import state, { State } from '@/store/state'

import appMutations, { Mutations } from '@/store/mutations'
import appActions, { Actions } from '@/store/actions'
import appGetters, { Getters } from '@/store/getters'

const store = createStore({
  state,
  mutations: appMutations,
  actions: appActions,
  getters: appGetters,
  modules: {
  }
})

export type Store = Omit<
  VuexStore<State>,
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

export function useStore () {
  return store as Store
}

export default store
