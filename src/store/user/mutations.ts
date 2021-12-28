import { UserState } from '@/store/user/state'
import { MutationTree } from 'vuex'
import { UserMutationTypes } from '@/store/user/mutation-types'

export type UserMutations<S = UserState> = {
  [UserMutationTypes.SET_USER_CORE](state: S, payload: number): void
}

const userMutations: MutationTree<UserState> & UserMutations = {
  [UserMutationTypes.SET_USER_CORE] (state, payload: number) {
    state.core = payload
  }
}

export default userMutations
