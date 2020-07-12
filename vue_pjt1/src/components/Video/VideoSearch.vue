<template>
  <div class="video-search">
    <input @keypress.enter="searchVideo" v-model="input" type="text">
    <button @click="searchVideo">검색</button>
  </div>
</template>

<script>
export default {
  name: 'VideoSearch',
  data() {
    return{
      input:null,
    }
  },
  methods: {
    searchVideo() {
      this.$emit('search-input', this.input)
      this.input = ""
    }
  }
}
</script>

<style scoped>
  .video-search {
    background-color: antiquewhite;
  }
</style>