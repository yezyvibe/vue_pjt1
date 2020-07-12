<template>
  <div class="card" style="width: 18rem;">
    <img :src="movie.backdrop_url" class="card-img-top" alt="movie poster">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <!-- <p class="card-text">평점 : {{ movie.user_rating }}</p> -->
      <a href="#" class="btn btn-primary">상세보기</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: {
    movie:{
      type: Object
    }
  },
}
</script>

<style>

</style>