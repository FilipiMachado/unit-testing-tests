<template>
  <div id="app">
    <h1>Introduction to Vue Test Utils</h1>
    <SearchInput v-model="search"/>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'

export default {
  name: 'App',
  components: {
    SearchInput,
  },
  data() {
    return {
      search: undefined,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.component-box {
  width: 30%;
}
</style>
