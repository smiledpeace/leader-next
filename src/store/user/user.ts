import { Module, CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex'

import userState, { UserState } from '@/store/user/state'
import userActions, { UserActions } from '@/store/user/actions'
import userMutations, { UserMutations } from '@/store/user/mutations'

export type UserStore<S = UserState> = Omit<
  VuexStore<S>,
  'commit' | 'dispatch'
  > & {
  commit<K extends keyof UserMutations, P extends Parameters<UserMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ) : ReturnType<UserMutations[K]>
} & {
  dispatch<K extends keyof UserActions>(
    key: K,
    payload: Parameters<UserActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<UserActions[K]>
}

export type UseModule = Module<UserState, UserState>

const userModule = {
  namespaced: true,
  state: userState,
  actions: userActions,
  mutations: userMutations
}

export default userModule
