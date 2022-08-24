<template>
  <div class="input">
    <input type="text" placeholder="Search..." v-model="searchQuery">
  </div>
  <!-- <span @click="clearValue()" class="input-clear">&times;</span> -->
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    }
  },
  computed: {
    searchQuery: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
  },
  data() {
    return {}
  },
  methods: {
    clearValue() {
      
    }
  }
}
</script>

<style scoped>

</style>