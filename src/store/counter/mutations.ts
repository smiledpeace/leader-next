import { MutationTree } from 'vuex'
import { CounterMutationsTypes, CounterStateTypes } from '@/store/counter/interfaces'
import { COUNTER_STORE } from '@/store/counter/constants'

export const mutations: MutationTree<CounterStateTypes> &
  CounterMutationsTypes = {
    [COUNTER_STORE.MUTATIONS.SET_COUNTER] (
      state: CounterStateTypes,
      payload: number
    ) {
      state.counter = payload
    },
    [COUNTER_STORE.MUTATIONS.RESET_COUNTER] (state: CounterStateTypes) {
      state.counter = 0
    },
    [COUNTER_STORE.MUTATIONS.SET_ROOT_DISPATCH] (state, payload: boolean) {
      state.rootDispatch = payload
    }
  }
