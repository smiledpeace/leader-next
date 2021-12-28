import { ActionTree, ActionContext } from 'vuex'
import { UserState } from '@/store/user/state'
import { UserMutations } from '@/store/user/mutations'
import { UserActionTypes } from '@/store/user/action-types'
import { UserMutationTypes } from '@/store/user/mutation-types'

type UserActionContext = {
  commit<K extends keyof UserMutations>(
    key: K,
    payload: Parameters<UserMutations[K]>[1]
  ): ReturnType<UserMutations[K]>
} & Omit<ActionContext<UserState, UserState>, 'commit'>

export interface UserActions {
  [UserActionTypes.GET_USER_CORE] (
    { commit }: UserActionContext,
    payload: number
  ): Promise<number>
}

const userActions: ActionTree<UserState, UserState> & UserActions = {
  [UserActionTypes.GET_USER_CORE] ({ commit }) {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = 122
        commit(UserMutationTypes.SET_USER_CORE, data)
        resolve(data)
      })
    })
  }
}

export default userActions
