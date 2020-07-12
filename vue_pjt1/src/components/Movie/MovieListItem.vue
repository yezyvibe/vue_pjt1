<template>
  <div>
    {{ movie.title }}
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