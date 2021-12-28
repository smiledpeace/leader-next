import { Module } from 'vuex'
import { IRootState } from '@/store/app/interfaces'
import { CounterStateTypes } from '@/store/counter/interfaces'
import { getters } from '@/store/counter/getters'
import { actions } from '@/store/counter/actions'
import { mutations } from '@/store/counter/mutations'
import { state } from '@/store/counter/state'

// Module
const counter: Module<CounterStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
}

export default counter
