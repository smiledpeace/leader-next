<template>
  <router-view/>
  {{ doubleCounter }}
  {{ core }}

  <button @click="handleClick">handleClick</button>

</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { AppMutationTypes } from '@/store/app/mutation-types'
import { UserActionTypes } from '@/store/user/action-types'

export default defineComponent({
  name: 'Home',
  setup () {
    const store = useStore()
    function handleClick () {
      store.commit(AppMutationTypes.SET_COUNTER, 1)
      store.dispatch(UserActionTypes.GET_USER_CORE, 1)
    }

    const doubleCounter = computed(() => {
      return store.getters.doubledCounter
    })
    const core = computed(() => {
      return store.getters.core
    })

    return {
      doubleCounter,
      handleClick,
      core
    }
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
