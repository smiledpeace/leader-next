import { Module, ModuleTree } from 'vuex'
import { IRootState } from '@/store/app/interfaces'
import { getters } from '@/store/app/getters'
import { actions } from '@/store/app/actions'
import { mutations } from '@/store/app/mutations'
import { state } from '@/store/app/state'
import counterModule from '@/store/counter'

// Modules
const modules: ModuleTree<IRootState> = {
  counterModule
}
const root: Module<IRootState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  modules
}

export default root
