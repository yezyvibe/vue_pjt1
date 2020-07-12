<template>
  <div class="video-item">
    <h3>
      비디오 아이템
    </h3>
    <VideoItemDetail v-for="video in videos" :key="video.etag" :video="video"/>
  </div>
</template>

<script>
import VideoItemDetail from '@/components/Video/VideoItemDetail.vue'
export default {
  name: 'VideoItem',
  components:{
    VideoItemDetail
  },
  props:  {
    videos: {
      type: Array,
    },
  },
}
</script>

<style scoped>
  .video-item {
    background-color:blueviolet
  }

</style>