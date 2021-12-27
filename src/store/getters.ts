import { GetterTree } from 'vuex'
import { State } from '@/store/state'

export type Getters = {
  doubledCounter(state: State): number
}

const appGetters: GetterTree<State, State> & Getters = {
  doubledCounter (state: State): number {
    return state.counter * 2
  }
}
export default appGetters
