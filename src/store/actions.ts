import { ActionTree, ActionContext } from 'vuex'
import { State } from '@/store/state'
import { AppActionTypes } from '@/store/action-types'
import { Mutations } from '@/store/mutations'
import { AppMutationTypes } from '@/store/mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [AppActionTypes.GET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>
}

const appActions: ActionTree<State, State> & Actions = {
  [AppActionTypes.GET_COUNTER] ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 256
        commit(AppMutationTypes.SET_COUNTER, data)
        resolve(data)
      }, 500)
    })
  }
}

export default appActions
