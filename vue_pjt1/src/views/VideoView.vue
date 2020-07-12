<template>
  <div>
    <h1>영화 예고편 검색</h1>
    <VideoSearch @search-input="onSearchList"/>
    <div class="row justify-content-center">
      <VideoItem class="col-6" :videos="videos"/>
    </div>
  </div>
</template>

<script>
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = 'AIzaSyBYoVQuyYq7YYG2loQq83pISsFAFr64CU8'
import axios from 'axios'
import VideoSearch from '@/components/Video/VideoSearch.vue'
import VideoItem from '@/components/Video/VideoItem.vue'

export default {
  name: 'VideoView',
  components: {
    VideoSearch,
    VideoItem,
  },
  data() {
    return{
      videos:[]
    }
  },
  methods: {
    onSearchList(input) {
      const params = {
        key : API_KEY,
        part : 'snippet',
        type : 'video',
        q : input + ' trailer',
      }
      axios.get(YOUTUBE_URL, {params})
        // .then((res) => console.log(res))
        .then((res) => this.videos = res.data.items)
    }
  }
}
</script>

<style>

</style>