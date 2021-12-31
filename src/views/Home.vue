<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    {{ nowTime }}

    <button @click="macroTick">开始</button>
    <button @click="pause" style="margin-left: 12px;">暂停</button>
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
    const { macroTick, nowTime, pause } = useCountDown()

    macroTick()
    return {
      nowTime: computed(() => {
        return formatDate(nowTime.value)
      }),
      pause,
      macroTick
    }
  }
})
</script>
