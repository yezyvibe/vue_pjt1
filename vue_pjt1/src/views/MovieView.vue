<template>
  <div>
    <h1>나만의 무비컬렉션</h1>
    <MovieList/>
  </div>
</template>

<script>
import MovieList from '@/components/Movie/MovieList.vue'

export default {
  name: 'MovieView',
  components: {
    MovieList
  },
}
</script>

<style>

</style>