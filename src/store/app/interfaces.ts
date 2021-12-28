import { ROOT_STORE } from '@/store/app/constants'
import { ActionContext, DispatchOptions } from 'vuex'
import { StoreActions } from '@/store/interfaces'

export interface IUserData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IRootState {
  root: boolean;
  version: string;
  userlists: IUserData[];
  isMobile: boolean;
}

export interface IRootGettersTypes {
  [ROOT_STORE.GETTERS.UPDATE_VERSION](state: IRootState): string;
  [ROOT_STORE.GETTERS.USER_LISTS](state: IRootState): IUserData[];
  [ROOT_STORE.GETTERS.IS_MOBILE_DEVICE](state: IRootState): boolean;
}

export type RootMutationsTypes<S = IRootState> = {
  [ROOT_STORE.MUTATIONS.UPDATE_VERSION](state: S, payload: string): void;
  [ROOT_STORE.MUTATIONS.USER_LISTS](state: S, payload: IUserData[]): void;
  [ROOT_STORE.MUTATIONS.IS_MOBILE_DEVICE](
    state: IRootState,
    payload: boolean
  ): void;
};

/**
 * probably this can be moved inside individual module
 * as counterTypes.ts and then can be imported here
 */
type AugmentedActionContextRoot = {
  commit<K extends keyof RootMutationsTypes>(
    key: K,
    payload: Parameters<RootMutationsTypes[K]>[1]
  ): ReturnType<RootMutationsTypes[K]>
} & Omit<ActionContext<IRootState, IRootState>, 'commit'> & {
  dispatch<K extends keyof StoreActions>(
    key: K,
    payload?: Parameters<StoreActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<StoreActions[K]>;
}

export interface RootActionsTypes {
  [ROOT_STORE.ACTIONS.UPDATE_VERSION](
    { commit }: AugmentedActionContextRoot,
    payload: string
  ): void;
  [ROOT_STORE.ACTIONS.COUNTER_CHECK](
    { dispatch }: AugmentedActionContextRoot,
    payload: boolean
  ): void;
  [ROOT_STORE.ACTIONS.USER_LISTS](
    { dispatch }: AugmentedActionContextRoot,
    payload: IUserData[]
  ): void;
  [ROOT_STORE.ACTIONS.IS_MOBILE_DEVICE](
    { dispatch }: AugmentedActionContextRoot,
    payload: boolean
  ): void;
}
