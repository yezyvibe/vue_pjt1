<template>
  <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="videoUrl" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoItemDetail',
  props: {
    video:{
      type: Object,
    },
  },
  // methods: {
  //   videoUrl() {
  //     return `https://youtube.com/embed/${this.video.id.videoId}`
  //   }
  // },
  computed: {
    videoUrl() {
        return `https://youtube.com/embed/${this.video.id.videoId}`
    }
  },
}
</script>

<style>

</style>