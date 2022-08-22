<template>
  <ul>
    <li v-for="(message, idx) in messages" :key="idx">
    {{ message }}</li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: ['messages'],
}
</script>