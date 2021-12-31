<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    {{ nowTime }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { useCountDown } from '@/utils/useCountDown'
import { formatDate } from '@/utils/date'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const { macroTick, nowTime } = useCountDown()

    macroTick()
    return {
      nowTime: computed(() => {
        return formatDate(nowTime.value)
      })
    }
  }
})
</script>
