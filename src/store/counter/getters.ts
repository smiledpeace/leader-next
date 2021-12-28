import { COUNTER_STORE } from '@/store/counter/constants'
import { GetterTree } from 'vuex'
import { IRootState } from '@/store/app/interfaces'
import {
  CounterGettersTypes,
  CounterStateTypes
} from '@/store/counter/interfaces'

export const getters: GetterTree<CounterStateTypes, IRootState> &
  CounterGettersTypes = {
    [COUNTER_STORE.GETTERS.COUNTER_VALUE]: (state: CounterStateTypes) => {
      return state.counter || 0
    },
    [COUNTER_STORE.GETTERS.DOUBLED_COUNTER]: (state: CounterStateTypes) => {
      return (state.counter || 0) * 2
    },
    [COUNTER_STORE.GETTERS.GET_ROOT_DISPATCH]: (state: CounterStateTypes) => {
      return state.rootDispatch || false
    }
  }
