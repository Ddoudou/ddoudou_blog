<template>
  <div id="dota2index">
    <div style="margin-top: 15px;">
      <el-input placeholder="比赛ID" v-model="matchID" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="getMatchInfo"></el-button>
      </el-input>
    </div>
    <el-card class="box-card match-card">
      <div class="match_info_space">
        <div class="space_radiant">
          <div class="hero_image" v-for="item in radiantPlayerList" :key="item.heroName">
            <div v-if="matchInfoShow" class="animated fadeInLeft">
              <el-image style="width: 100%; height: 100px" :src="item.heroUrl" fit="cover"></el-image>
            </div>
          </div>
        </div>
        <div class="space_mid"></div>
        <div class="space_dire">
          <div class="hero_image" v-for="item in direPlayerList" :key="item.heroName">
            <div v-if="matchInfoShow">
              <el-image style="width: 100%; height: 100px" :src="item.heroUrl" fit="cover"></el-image>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
const staticSrcUrl = "https://cdn.jsdelivr.net/gh/Ddoudou/dd/src/static/";
const apiBaseUrl = "https://api.opendota.com/api/";
// import jsonp from 'jsonp'
import Vue from "vue";
import axios from "axios";
Vue.prototype.$axios = axios;

export default {
  name: "home",
  components: {},
  data() {
    return {
      matchInfoShow: true,
      matchID: "",
      radiantPlayerList: [],
      direPlayerList: []
    };
  },

  methods: {
    getMatchInfo() {
      // 加载框
      var that = this;
      var matchUrl = apiBaseUrl + "matches/" + that.matchID;

      // 获取比赛信息
      axios.get(matchUrl).then(function(res) {
        var playerList = res.data.players;

        // 获取每个选手头像
        playerList.forEach(function(value, index, arr) {
          var playerUrl = apiBaseUrl + "players/" + value.account_id;
          arr[index].heroName = value.max_hero_hit.unit.slice(14);
          arr[index].heroUrl =
            "http://cdn.dota2.com/apps/dota2/images/heroes/" +
            value.heroName +
            "_full.png";
          // 设置头像默认值，不设置（好像）不能响应式渲染？
          arr[index].ava = staticSrcUrl + "img/wh.png";

          // 获取玩家头像
          if (value.account_id) {
            axios.get(playerUrl).then(function(res) {
              arr[index].ava = res.data.profile.avatarfull;
            });
          } else {
            arr[index].personaname = "匿名玩家";
          }
        });
        that.radiantPlayerList = playerList.slice(0, 5);
        that.direPlayerList = playerList.slice(5);
      });
    }
  }
};
</script>


<style>
.match-card{
  margin-top: 50px;
  width: 60%;
}
.match_info_space {
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.space_radiant {
  height: 100%;
  width: 40%;
  background-color: limegreen;
}
.space_dire {
  width: 40%;
  background-color: brown;
}
.space_mid {
  width: 20%;
  background-color: #4fc08d;
}
</style>
