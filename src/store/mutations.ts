import { State } from '@/store/state'
import { AppMutationTypes } from '@/store/mutation-types'
import { MutationTree } from 'vuex'

export type Mutations<S = State > = {
  [AppMutationTypes.SET_COUNTER](state: S, payload: number): void
  // [AppMutationTypes.REST_COUNTER](state: S): void
}

const appMutations: MutationTree<State> & Mutations = {
  [AppMutationTypes.SET_COUNTER] (state, payload: number) {
    state.counter = payload
  },
  [AppMutationTypes.REST_COUNTER] (state) {
    state.counter = 0
  }
}

export default appMutations
