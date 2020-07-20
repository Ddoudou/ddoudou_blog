<template>
    <div>
        <nav-header></nav-header>
        <div class="container">
            <router-view></router-view>
        </div>
        <aplayer
            autoplay
            mini
            :music="{
    title: '来一起爬山啊',
    artist: '你看我还有机会吗',
    src: 'http://music.163.com/song/media/outer/url?id=1300592401.mp3',
    pic: 'https://p2.music.126.net/6gdbj6LHlhShsYptj4fNRg==/109951163451264184.jpg'
  }"
        />
    </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import Aplayer from "vue-aplayer";
export default {
  name: "index",
  components: {
    NavHeader,
    Aplayer
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.container {
  width: 1100px;
  max-width: 100vw;
  margin: 0 auto;
  padding-top: 70px;
}
</style>