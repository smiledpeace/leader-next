import { ActionTree } from 'vuex'
import { IRootState } from '@/store/app/interfaces'
import { CounterActionsTypes, CounterStateTypes } from '@/store/counter/interfaces'

import { COUNTER_STORE } from '@/store/counter/constants'

export const actions: ActionTree<CounterStateTypes, IRootState> &
  CounterActionsTypes = {
    [COUNTER_STORE.ACTIONS.GET_COUNTER] ({ commit }, payload: number) {
      commit(COUNTER_STORE.MUTATIONS.SET_COUNTER, payload)
    },
    [COUNTER_STORE.ACTIONS.SET_ROOT_DISPATCH] ({ commit }, payload: boolean) {
      commit(COUNTER_STORE.MUTATIONS.SET_ROOT_DISPATCH, payload)
    },
    [COUNTER_STORE.ACTIONS.CALL_COUNTER] ({ commit }, payload: boolean) {
      commit(COUNTER_STORE.MUTATIONS.SET_ROOT_DISPATCH, payload)
      console.log('payload', payload)
      console.log('commit', commit)
    }
  }
