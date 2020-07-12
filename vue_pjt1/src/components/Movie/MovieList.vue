<template>
  <div>
    <button @click="getMovies">영화 가져오기</button>
    <span>
      <MovieListItem v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </span>
  </div>
</template>

<script>
import MovieListItem from '@/components/Movie/MovieListItem.vue'
import axios from 'axios'
const MOVIE_URL = "http://www.json-generator.com/api/json/get/ceNyuXZmwi?indent=2"

export default {
  name: 'MovieList',
  components: {
    MovieListItem
  },
  data() {
    return {
      movies:null
    }
  },
  methods: {
    getMovies() {
      axios.get(MOVIE_URL)
        .then((res) => {
          this.movies = res.data
        })
        .catch((err) => console.log(err))
    }
  }

}
</script>

<style>

</style>