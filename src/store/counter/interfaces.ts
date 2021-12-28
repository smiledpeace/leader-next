import { ActionContext } from 'vuex'
import { IRootState } from '@/store/app/interfaces'
import { COUNTER_STORE } from '@/store/counter/constants'

export interface CounterStateTypes {
  counter?: number;
  rootDispatch?: boolean;
}

export interface CounterGettersTypes {
  [COUNTER_STORE.GETTERS.DOUBLED_COUNTER](state: CounterStateTypes): number;
  [COUNTER_STORE.GETTERS.COUNTER_VALUE](state: CounterStateTypes): number;
  [COUNTER_STORE.GETTERS.GET_ROOT_DISPATCH](state: CounterStateTypes): boolean;
}

export type CounterMutationsTypes<S = CounterStateTypes> = {
  [COUNTER_STORE.MUTATIONS.SET_COUNTER](state: S, payload: number): void;
  [COUNTER_STORE.MUTATIONS.RESET_COUNTER](state: S): void;
  [COUNTER_STORE.MUTATIONS.SET_ROOT_DISPATCH](
    state: S,
    payload?: boolean
  ): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof CounterMutationsTypes>(
    key: K,
    payload: Parameters<CounterMutationsTypes[K]>[1]
  ): ReturnType<CounterMutationsTypes[K]>;
} & Omit<ActionContext<CounterStateTypes, IRootState>, 'commit'>;

export interface CounterActionsTypes {
  [COUNTER_STORE.ACTIONS.GET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
  [COUNTER_STORE.ACTIONS.SET_ROOT_DISPATCH](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
  [COUNTER_STORE.ACTIONS.CALL_COUNTER](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
}
