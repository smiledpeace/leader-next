import { GetterTree } from 'vuex'
import { RootState } from '@/store/index'

export type Getters = {
  doubledCounter(state: RootState): number,
  core(state: RootState): number
}

const appGetters: GetterTree<RootState, RootState> & Getters = {
  doubledCounter (state: RootState): number {
    return state.counter * 2
  },
  core (state: RootState): number {
    return state.user.core * 2
  }
}
export default appGetters
