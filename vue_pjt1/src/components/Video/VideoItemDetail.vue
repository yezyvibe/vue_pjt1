<template>
  <div>
    <iframe :src="videoUrl" frameborder="0"></iframe>
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