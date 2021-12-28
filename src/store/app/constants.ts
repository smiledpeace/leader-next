export enum RootActions {
  UPDATE_VERSION = 'UPDATE_VERSION',
  COUNTER_CHECK = 'COUNTER_CHECK',
  USER_LISTS = 'USER_LISTS',
  IS_MOBILE_DEVICE = 'IS_MOBILE_DEVICE'
}
export enum RootMutations {
  UPDATE_VERSION = 'UPDATE_VERSION',
  COUNTER_CHECK = 'COUNTER_CHECK',
  SET_ROOT_DISPATCH = 'SET_ROOT_DISPATCH',
  USER_LISTS = 'USER_LISTS',
  IS_MOBILE_DEVICE = 'IS_MOBILE_DEVICE'
}
export enum RootGetters {
  UPDATE_VERSION = 'UPDATE_VERSION',
  COUNTER_CHECK = 'COUNTER_CHECK',
  SET_ROOT_DISPATCH = 'SET_ROOT_DISPATCH',
  USER_LISTS = 'USER_LISTS',
  IS_MOBILE_DEVICE = 'IS_MOBILE_DEVICE'
}

export const ROOT_STORE = {
  GETTERS: RootGetters,
  MUTATIONS: RootMutations,
  ACTIONS: RootActions
}
