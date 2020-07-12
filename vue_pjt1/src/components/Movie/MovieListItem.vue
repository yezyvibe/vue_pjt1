<template>
  <div class="card" style="width: 18rem;">
    <img :src="movie.backdrop_url" class="card-img-top" alt="movie poster">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <!-- <p class="card-text">평점 : {{ movie.user_rating }}</p> -->
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#movie-'+ movie.id">
      상세보기
      </button>
    </div>
    <MovieListItemModal :movie="movie"/>
  </div>
</template>

<script>
import MovieListItemModal from '@/components/Movie/MovieListItemModal.vue'
export default {
  name: 'MovieListItem',
  components: {
    MovieListItemModal,
  },
  props: {
    movie:{
      type: Object
    }
  },
}
</script>

<style>

</style>